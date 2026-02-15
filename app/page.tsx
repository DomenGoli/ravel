import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Galery from "@/app/_components/Galery";
import { auth } from "@/app/_lib/auth";
import { getUserByName, getUsers } from "@/app/_lib/data-service"
// import LastFive from "./_components/LastFive";

export default async function Home() {
    const users = await getUsers() || []
    const session = await auth()
    const {id} = await getUserByName(session?.user?.name)
    const contacts = users.filter((user) => user.id !== id )

    // const lastFiveImages = await getLastFiveImages()
    // console.log("BBBBBBBBBBBBBBBBBBBBBBBBBB:",images);



    return (
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
            <Navbar />
            <div>
                <Galery contacts={contacts} />
                {/* <LastFive /> */}
            </div>
            <Footer />
        </div>
    );
}































{
    /* <MenuButton>
                    <Link href="/upload">Nalozi slike</Link>
                </MenuButton> */
}
{
    /* <MenuButton>
                    <Link href="/galery">Galerija</Link>
                </MenuButton> */
}
{
    /* <MenuButton>
                    <Link href="/myfiles">Moje slike</Link>
                </MenuButton> */
}
