"use client"

import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "../hooks"
import ImageCard from "./ImageCard"
import { getLastFiveImages } from "../_lib/data-service";

// type lastUplodedImageType = {
//     name:string;
//     userId:string;
// }

// type lastFiveProps = {
//     lastFiveImages: lastUplodedImageType[] | undefined
// }

const IMG_URL =
    "https://fkcolgozeqvaxilodttu.supabase.co/storage/v1/object/public/slike";

function LastFive() {
    const {imageArray} = useAppSelector(store => store.galery)
    
    const { data: lastFiveImages } = useQuery({
        queryKey: ["lastUploaded"],
        queryFn: ()=>getLastFiveImages(),
        refetchOnMount: true,
    });
    
    console.log("teest",lastFiveImages);
    if(imageArray) return null

    return (
        <div>
            <div className="overflow-scroll">
                <p className="text-center">Zadnjih 5 nalozenih slik</p>
                <div className="flex flex-col items-center justify-center gap-2 overflow-scroll">
                    {lastFiveImages?.map((img, i) => (
                        <ImageCard
                            key={i}
                            imgName={img!.name}
                            imgURL={`${IMG_URL}/${img!.userId}/${img!.name}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}



export default LastFive
