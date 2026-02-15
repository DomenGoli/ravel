// "use client"

// import { useAppSelector } from "../hooks"
// import ImageCard from "./ImageCard"

// type lastFiveProps = {
//     lastFiveImages: string[] | undefined
// }

// const IMG_URL =
//     "https://fkcolgozeqvaxilodttu.supabase.co/storage/v1/object/public/slike";

// function LastFive({lastFiveImages}: lastFiveProps) {
//     const {imageArray} = useAppSelector(store => store.galery)

//     if(!!imageArray) return null

//     return (
//         <div>
//             <div className="overflow-scroll">
//                 <div className="flex flex-col items-center justify-center gap-2 overflow-scroll">
//                     {lastFiveImages?.map((img, i) => (
//                         <ImageCard
//                             mode={"edit"}
//                             key={i}
//                             imgName={img}
//                             userId={userId}
//                             imgURL={`${IMG_URL}/${userId}/${img}`}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }



// export default LastFive
