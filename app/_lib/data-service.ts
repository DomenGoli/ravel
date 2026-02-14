import { supabase } from "@/app/_lib/supabase";

export async function getUsers() {
    const { data, error } = await supabase.from("users").select("*");

    if (error) {
        // Handle error
    }
    return data;
}

export async function getImages(id: string): Promise<string[] | undefined> {
    const { data, error } = await supabase.storage.from("slike").list(id);
    if (error) {
    }
    const list = data?.map((img) => img.name);

    return list;
}

type UserType = {
    name: string;
    username: string;
    password: string;
    id: string;
};

export async function getUserByUsername(
    username: string | unknown,
): Promise<UserType> {
    const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("username", username)
        .single();

    if (error) {
        // Handle error
    }
    return data;
}

export async function getUserByName(
    name: string | null | undefined,
): Promise<UserType> {
    const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("name", name)
        .single();

    if (error) {
        // Handle error
    }
    return data;
}
export async function uploadFile(file: File, id: string) {
    const imageName = file.name;
    const imagePath = `/${id}/${imageName}`;
    const { data, error } = await supabase.storage
        .from("slike")
        .upload(imagePath, file);
    if (error) {
        // Handle error
    } else {
        return data;
    }
}

export async function deleteFile(imageName:string, id:string | undefined) {
    console.log("tagged", imageName, id);
    const imagePath = `/${id}/${imageName}`;
    const { data, error } = await supabase.storage
        .from("slike")
        .remove([imagePath]);
    if(error) {
        console.log(error);
    }
    console.log(data);
    return data
}

// export async function downloadFile(file:string) {
//     const { data, error } = await supabase.storage
//         .from("slike")
//         .download(file);
// }
