import Footer from "../_ui/Footer";
import ImageCard from "../_components/ImageCard";
import Navbar from "../_ui/Navbar";
import { auth } from "../_lib/auth";
import { getImages, getUserByName } from "../_lib/data-service";
import { Suspense } from "react";
import Spinner from "../_ui/Spinner";
import MyList from "./MyList";

// import { Suspense } from "react"
// import MyfilesSuspense from "./MyfilesSuspense"
// import Spinner from "../_ui/Spinner"

const IMG_URL =
    "https://fkcolgozeqvaxilodttu.supabase.co/storage/v1/object/public/slike";

async function page() {
    // const session = await auth();
    // const { id: userId } = await getUserByName(session?.user?.name);
    // const imageArray = await getImages(userId);

    return (
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
            <Navbar />
            <div className="overflow-scroll no-scrollbar">
                <div className="flex flex-col items-center justify-center gap-2">
                    {/* <Suspense fallback={<Spinner/>}>

                    {imageArray?.slice(1)?.map((img, i) => (
                        <ImageCard
                        mode={"edit"}
                        key={i}
                        imgName={img}
                        userId={userId}
                        imgURL={`${IMG_URL}/${userId}/${img}`}
                        />
                    ))}
                    </Suspense> */}
                    <Suspense fallback={<Spinner />}>
                    <MyList />
                    </Suspense>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default page;

// function page() {
//     return (
//         <div>
//             <Suspense fallback={<Spinner />}>

//             <MyfilesSuspense />
//             </Suspense>
//         </div>
//     )
// }

// export default page
