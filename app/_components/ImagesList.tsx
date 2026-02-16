"use client";
import ImageCard from "./ImageCard";
import { useAppSelector } from "../hooks";
import { Suspense } from "react";
import Spinner from "../_ui/Spinner";

const IMG_URL =
    "https://fkcolgozeqvaxilodttu.supabase.co/storage/v1/object/public/slike";

function ImagesList() {
    const { imageArray, userId } = useAppSelector((store) => store.galery);
    // queryClient.invalidateQueries({ queryKey: ['user-images'] })
    // const searchParams = useSearchParams();
    // const folder = searchParams?.get("id") || 1;

    // const { data, isLoading } = useQuery({
    //     queryKey: ["user-images"],
    //     queryFn: ()=>fetchImages(userFolder),
    //     refetchOnMount: true,

    // });
    // useEffect(function() {
    //     queryClient.invalidateQueries({ queryKey: ['user-images'], exact: true  })

    // }, [queryClient, userFolder])
    // const slike = folder ? getUserImagesById(folder) : []
    if(!imageArray) return null

    return (
        <div className="overflow-scroll">
            <div className="flex flex-col items-center justify-center gap-2 ">
                {/* <Suspense fallback={<Spinner />}> */}
                {imageArray.slice(1)?.map((img, i) => (
                    <ImageCard
                    key={i}
                    imgName={img}
                    imgURL={`${IMG_URL}/${userId}/${img}`}
                    />
                ))}
                {/* </Suspense> */}
            </div>
        </div>
    );
}

export default ImagesList;
