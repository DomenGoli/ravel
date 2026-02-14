import ImageCard from "../_components/ImageCard"
import { auth } from "../_lib/auth"
import { getImages, getUserByName } from "../_lib/data-service"

const IMG_URL =
    "https://fkcolgozeqvaxilodttu.supabase.co/storage/v1/object/public/slike";

async function page() {
    const session = await auth()
    const {id: userId} = await getUserByName(session?.user?.name)
    const imageArray = await getImages(userId)

    return (
        <div>
            <div className="flex flex-col items-center justify-center gap-2">
            {imageArray?.slice(1)?.map((img, i) => (
                <ImageCard key={i} imgName={img} imgURL={`${IMG_URL}/${userId}/${img}`} />
            ))}
        </div>
        </div>
    )
}

export default page
