import { supabase } from "@/app/_lib/supabase";

export async function getUsers() {
    const { data, error } = await supabase.from("users").select("*");

    if (error) {
        // Handle error
    }
    return data;
}

export async function getImages(id: string): Promise<string[] | undefined> {
    // For testing db data long loading time
    // await new Promise((res) => setTimeout(res, 5000));
    const { data, error } = await supabase.storage.from("slike").list(id);
    if (error) {
    }
    // console.log(data?.sort((a,b) => a.created_at - b.created_at));
    const list = data
        ?.slice(1) // prvi elelment je .placeholder za supabase prazn file
        ?.sort((a, b) => {
            const dateA = new Date(a!.created_at).getTime();
            const dateB = new Date(b!.created_at).getTime();
            if (dateA > dateB) return 1;
            if (dateA < dateB) return -1;
            return 0;
        })
        .map((img) => img.name);

    return list;
}

// type lastUplodedImageType = {
//     name: string;
//     userId: string;
//     // bucket_id: string;
//     // owner: string;
//     // id: string;
//     // updated_at: string;
//     created_at: string;
//     // last_accessed_at: string;
//     // metadata: Record<string, any>;
//     // buckets: "";
// };
export async function getLastFiveImages() {
    const { data: user1 } = await supabase.storage.from("slike").list("1");
    const { data: user2 } = await supabase.storage.from("slike").list("2");
    const { data: user3 } = await supabase.storage.from("slike").list("3");

    const user1withId = user1?.map((img) => {
        return { name: img.name, created_at: img.created_at, userId: "1" };
    });
    const user2withId = user2?.map((img) => {
        return { name: img.name, created_at: img.created_at, userId: "2" };
    });
    const user3withId = user3?.map((img) => {
        return { name: img.name, created_at: img.created_at, userId: "3" };
    });

    const allImages = [user1withId, user2withId, user3withId].flat();

    const sortedImages = allImages
        .sort((a, b) => {
            const dateA = new Date(a!.created_at).getTime();
            const dateB = new Date(b!.created_at).getTime();
            if (dateA > dateB) return -1;
            if (dateA < dateB) return 1;
            return 0;
        })
        .filter((img) => img?.name !== ".emptyFolderPlaceholder")
        .slice(0, 5);

    // const lastFiveList = sortedImages?.map(img=> {return {name: img!.name, userId:img?.bucket_id}})

    return sortedImages;
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

// export async function deleteFile(imageName: string, id: string | undefined) {
//     console.log("tagged", imageName, id);
//     const imagePath = `${id}/${imageName}`;
//     console.log(imagePath);
//     const { data, error } = await supabase.storage
//         .from("slike")
//         .remove([imagePath]);
//     if (error) {
//         console.log(error);
//     }
//     console.log(data);
//     return data;
// }

// export async function downloadFile(file:string) {
//     const { data, error } = await supabase.storage
//         .from("slike")
//         .download(file);
// }
