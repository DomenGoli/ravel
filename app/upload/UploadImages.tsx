"use client";

import { ChangeEvent, useRef, useState } from "react";
import FileInput from "./FileInput";
import FileList from "./FileList";
import ActionButtons from "./ActionButtons";
import * as tus from "tus-js-client";

type UploadImagesProps = {
    id: string;
};

type FileWithProgress = {
    id: string;
    file: File;
    progress: number;
    uploaded: boolean;
};

type UploadStatus = "idle" | "uploading" | "success" | "error";

function UploadImages({ id }: UploadImagesProps) {
    const [files, setFiles] = useState<FileWithProgress[]>([]);
    const [uploading, setUploading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const [status, setStatus] = useState<UploadStatus>("idle");

    function handleFileSelect(e: ChangeEvent<HTMLInputElement>) {
        if (!e.target.files?.length) return;

        const newFiles = Array.from(e.target.files).map((file) => ({
            file,
            progress: 0,
            uploaded: false,
            id: file.name,
        }));

        setFiles([...files, ...newFiles]);

        if (inputRef.current) inputRef.current.value = "";
    }

    function removeFile(id: string) {
        setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
    }

    function handleClear() {
        setFiles([]);
    }

    async function handleUpload() {
        const uploadPromises = files.map(async (fileWithProgress)=> {
            return new Promise<void>((resolve, reject) => {
                var upload = new tus.Upload(fileWithProgress.file, {
                    // Supabase TUS endpoint (with direct storage hostname)
                    endpoint: `https://fkcolgozeqvaxilodttu.supabase.co/storage/v1/upload/resumable`,
                    retryDelays: [0, 3000, 5000, 10000, 20000],
                    headers: {
                        authorization: `Bearer sb_publishable_uYqtaKG8GbdmEce2xlp9yw_fWER_C0K`,
                        'x-upsert': 'true', // optionally set upsert to true to overwrite existing files
                        apikey: 'sb_publishable_uYqtaKG8GbdmEce2xlp9yw_fWER_C0K',
                    },
                    uploadDataDuringCreation: true,
                    removeFingerprintOnSuccess: true, // Important if you want to allow re-uploading the same file https://github.com/tus/tus-js-client/blob/main/docs/api.md#removefingerprintonsuccess
                    metadata: {
                        bucketName: "tus",
                        objectName: fileWithProgress.file.name,
                        contentType: 'image/png',
                        cacheControl: '3600',
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
                        // var progress = ((bytesUploaded / bytesTotal) * 100).toFixed(2)
                        const progress = Math.round(((bytesUploaded / bytesTotal) * 100))
                        
                        setFiles((prevFiles) => 
                            prevFiles.map((file) => 
                                file.id === fileWithProgress.id ? {...file, progress} : file
                            )
                        )
                    },
                    onSuccess: function () {
                        setFiles((prevFiles) =>
                            prevFiles.map((file) =>
                                file.id === fileWithProgress.id
                                    ? { ...file, uploaded: true }
                                    : file,
                            ),
                        );

                        console.log('Download %s from %s', fileWithProgress.file.name, upload.url)
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
        })
        await Promise.all(uploadPromises);

        
    }
    

    return (
        <div className="flex flex-col items-center gap-12 mt-10">
            <div className="flex flex-col gap-6 items-center">
                <FileInput
                    inputRef={inputRef}
                    disabled={uploading}
                    onFileSelect={handleFileSelect}
                />
                {files.length !== 0 && <ActionButtons
                    disabled={files.length === 0 || uploading}
                    onUpload={handleUpload}
                    onClear={handleClear}
                />}
            </div>
            <FileList
                files={files}
                onRemove={removeFile}
                uploading={uploading}
            />
        </div>
    );
}

export default UploadImages;

// function getFileIcon(mimeType: string) {
//     if(mimeType.startsWith("image/")) return "Image"
// }

// function formatFileSize(bytes: number) {
//     if(bytes === 0) return "0 B";
//     const k = 1024;
//     const sizes = ["B", "KB", "MB", "GB"]
//     const i = Math.floor(Math.log(bytes) / Math.log(k))
//     return `${parseFloat((bytes / Math.pow(k, i).toFixed(1)))} ${sizes[i]}`
// }

