import ImageCard from "../_components/ImageCard";
import { auth } from "../_lib/auth";
import { getImages, getUserByName } from "../_lib/data-service";
const IMG_URL =
    "https://fkcolgozeqvaxilodttu.supabase.co/storage/v1/object/public/slike";

async function MyList() {
    const session = await auth();
    const { id: userId } = await getUserByName(session?.user?.name);
    const imageArray = await getImages(userId);

    return (
        <div>
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
    );
}

export default MyList;
