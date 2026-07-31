"use client";
import ImageCard from "./ImageCard";
import { useAppSelector } from "../hooks";
import { useQuery } from "@tanstack/react-query";
import { getUserImagesById } from "../_lib/actions";

const userId = "1"

function ImagesList() {
    // const { imageArray, userId } = useAppSelector((store) => store.galery);
    // queryClient.invalidateQueries({ queryKey: ['user-images'] })
    // const searchParams = useSearchParams();
    // const folder = searchParams?.get("id") || 1;

    const { data:imageArray, isLoading } = useQuery({
        queryKey: ["user-images"],
        queryFn: ()=>getUserImagesById(userId),
        refetchOnMount: true,

    });
    // useEffect(function() {
    //     queryClient.invalidateQueries({ queryKey: ['user-images'], exact: true  })

    // }, [queryClient, userFolder])
    // const slike = folder ? getUserImagesById(folder) : []
    if(!imageArray) return null
    if(imageArray?.length <= 1) return (
        <div className="flex items-center justify-center h-full pt-50">
            <p className="text-lg">Prazno</p>
        </div>
    )

    return (
        <div className="overflow-scroll no-scrollbar">
            <div className="flex flex-col items-center justify-center gap-1">
                {/* <Suspense fallback={<Spinner />}> */}
                {imageArray.slice(1)?.map((img, i) => (
                    <ImageCard
                    key={i}
                    imgName={img}
                    imgURL={`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET}/${img}`}
                    />
                ))}
                {/* </Suspense> */}
            </div>
        </div>
    );
}

export default ImagesList;
