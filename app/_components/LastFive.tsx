"use client"

import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "../hooks"
import ImageCard from "./ImageCard"
import { getLastFiveImages } from "../_lib/data-service";
import Spinner from "../_ui/Spinner";

// type lastUplodedImageType = {
//     name:string;
//     userId:string;
// }

// type lastFiveProps = {
//     lastFiveImages: lastUplodedImageType[] | undefined
// }



function LastFive() {
    const {imageArray} = useAppSelector(store => store.galery)
    
    const { data: lastFiveImages, isLoading } = useQuery({
        queryKey: ["lastUploaded"],
        queryFn: ()=>getLastFiveImages(),
        refetchOnMount: true,
    });
    
    if(imageArray) return null

    if(isLoading) return <Spinner />

    return (
        <div>
            <div className="overflow-scroll no-scrollbar">
                <p className="text-center">Zadnjih 5 naloženih slik</p>
                <div className="flex flex-col items-center justify-center gap-1 overflow-scroll no-scrollbar">
                    {lastFiveImages?.map((img, i) => (
                        <ImageCard
                            key={i}
                            imgName={img!.name}
                            imgURL={`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET}/${img!.userId}/${img!.name}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}



export default LastFive
