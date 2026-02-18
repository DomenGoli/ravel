import { auth } from "../_lib/auth";
import { getImages, getUserByName } from "../_lib/data-service";
import MyList from "./MyList";


async function MyGalery() {
    const session = await auth();
    const { id: userId } = await getUserByName(session?.user?.name);
    const imageArray = await getImages(userId);

    return (
        <div className="h-full">
            <MyList imageArray={imageArray} userId={userId}/>   
        </div>
    );
}

export default MyGalery;
