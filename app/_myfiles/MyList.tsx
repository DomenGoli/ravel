"use client";

import { useOptimistic } from "react";
import ImageCard from "../_components/ImageCard";
// import { deleteFile } from "../_lib/data-service";
import { deleteFileSA } from "../_lib/actions";


type MyListProps = {
    imageArray: string[] | undefined;
    userId: string;
};
function MyList({ imageArray, userId }: MyListProps) {
    const [optimisticImageArray, optimisticDelete] = useOptimistic(
        imageArray,
        (curImages, imgName) => {
            return curImages?.filter((img) => img !== imgName);
        },
    );

    async function handleDelete(imgName: string, userId: string | undefined) {
        optimisticDelete(imgName);
        await deleteFileSA(imgName, userId);
    }

    if(imageArray?.length === 0) return (
        <div className="flex items-center justify-center h-full">
            <p className="text-lg">Brez slik</p>
        </div>
    )

    return (
        <div className="flex flex-col gap-1">
            {optimisticImageArray?.map((img) => (
                <ImageCard
                    mode={"edit"}
                    key={img}
                    imgName={img}
                    userId={userId}
                    imgURL={`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET}/${userId}/${img}`}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
}

export default MyList;
