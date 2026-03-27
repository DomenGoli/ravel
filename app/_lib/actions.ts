"use server"
import { signIn, signOut } from "@/app/_lib/auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import * as tus from 'tus-js-client'

export async function getUserImagesById(id:string): Promise<string[] | undefined> {
    // For testing db data long loading time
    // await new Promise((res) => setTimeout(res, 5000));
    const { data, error } = await supabase.storage.from("slike").list(id);
    const list = data?.map(img => img.name)
    if(error) {
        //Handle error
    }
    return list;
}

export async function login(credentials: FormData | Map<string, string>) {
    const username = credentials.get("username");
    const password = credentials.get("password");

    if(!username) return

    const res = await signIn("credentials", {
        username,
        password,
        redirectTo: "/",
    });
    console.log("response:",res);
    return res
}

export async function logout():Promise<void> {
    await signOut({ redirectTo: "/auth/login", redirect: true });
}

export async function deleteFileSA(imageName: string, id: string | undefined) {
    const imagePath = `${id}/${imageName}`;
    const { data, error } = await supabase.storage
        .from("slike")
        .remove([imagePath]);
    if (error) {
        console.log(error);
    }
    revalidatePath("myfiles");
    return data;
}


export async function uploadFileAction(file: File, id: string) {
    const imageName = file.name;
    const imagePath = `/${id}/${imageName}`;
    const { data, error } = await supabase.storage
        .from("slike")
        .upload(imagePath, file, {
            cacheControl: "3600",
            upsert: false,
            duplex: "half",
            contentType: "image/png"
        });
    if (error) {
        // Handle error
    } else {
        return data;
    }
}
const projectId = "fkcolgozeqvaxilodttu"

export async function uploadFileActionTUS(file: File, id: string):Promise<void> {
    const fileName = file.name;
    return new Promise((resolve, reject) => {
        var upload = new tus.Upload(file, {
            // Supabase TUS endpoint (with direct storage hostname)
            endpoint: `https://${projectId}.storage.supabase.co/storage/v1/upload/resumable`,
            retryDelays: [0, 3000, 5000, 10000, 20000],
            headers: {
                authorization: `Bearer sdfsdf`,
                'x-upsert': 'true', // optionally set upsert to true to overwrite existing files
            },
            uploadDataDuringCreation: true,
            removeFingerprintOnSuccess: true, // Important if you want to allow re-uploading the same file https://github.com/tus/tus-js-client/blob/main/docs/api.md#removefingerprintonsuccess
            metadata: {
                bucketName: id,
                objectName: fileName,
                contentType: 'image/png',
                cacheControl: "3600",
                metadata: JSON.stringify({ // custom metadata passed to the user_metadata column
                    yourCustomMetadata: true,
                }),
            },
            chunkSize: 6 * 1024 * 1024, // NOTE: it must be set to 6MB (for now) do not change it
            onError: function (error) {
                console.log('Failed because: ' + error)
                reject(error)
            },
            onProgress: function (bytesUploaded, bytesTotal) {
                var percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2)
                console.log(bytesUploaded, bytesTotal, percentage + '%')
            },
            onSuccess: function () {
                // console.log('Download %s from %s', upload.file.name, upload.url)
                resolve()
            },
        })
        // Check if there are any previous uploads to continue.
        return upload.findPreviousUploads().then(function (previousUploads) {
            // Found previous uploads so we select the first one.
            if (previousUploads.length) {
                upload.resumeFromPreviousUpload(previousUploads[0])
            }
            // Start the upload
            upload.start()
        })
    })
}