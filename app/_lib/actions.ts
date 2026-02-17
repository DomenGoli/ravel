"use server"
import { signIn, signOut } from "@/app/_lib/auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";

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

export async function login(credentials: FormData | Map<string, string>):Promise<void> {
    const username = credentials.get("username");
    const password = credentials.get("password");

    if(!username) return

    await signIn("credentials", {
        username,
        password,
        redirectTo: "/",
    });
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