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

export async function getLastFiveImages(): Promise<string[] | undefined> {
    const {data: user1} = await supabase.storage.from("slike").list("1")
    const {data: user2} = await supabase.storage.from("slike").list("2")
    const {data: user3} = await supabase.storage.from("slike").list("2")

    const allImages = [user1, user2, user3].flat()

    const sortedImages = allImages.sort((a,b) => {
        const dateA = new Date(a!.created_at).getTime()
        const dateB = new Date(b!.created_at).getTime()
        if(dateA < dateB) return -1
        if(dateA > dateB) return 1
        return 0
    }).slice(1,6)
    
    const lastFiveList = sortedImages?.map(img=> img!.name)

    return lastFiveList
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
