import Footer from "../_ui/Footer";
import ImageCard from "../_components/ImageCard";
import Navbar from "../_ui/Navbar";
import { auth } from "../_lib/auth";
import { getImages, getUserByName } from "../_lib/data-service";

const IMG_URL =
    "https://fkcolgozeqvaxilodttu.supabase.co/storage/v1/object/public/slike";

async function page() {
    const session = await auth();
    const { id: userId } = await getUserByName(session?.user?.name);
    const imageArray = await getImages(userId);

    return (
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
            <Navbar />
            <div className="overflow-scroll no-scrollbar">
                <div className="flex flex-col items-center justify-center gap-2">
                    {imageArray?.slice(1)?.map((img, i) => (
                        <ImageCard
                            mode={"edit"}
                            key={i}
                            imgName={img}
                            userId={userId}
                            imgURL={`${IMG_URL}/${userId}/${img}`}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default page;
