import Navbar from "./_ui/Navbar";
import Footer from "./_ui/Footer";
import Galery from "@/app/_components/Galery";
import { auth } from "@/app/_lib/auth";
import {
    getUserByName,
    getUsers,
} from "@/app/_lib/data-service";
// import LastFive from "./_components/LastFive";

export default async function Home() {
    const users = (await getUsers()) || [];
    const session = await auth();
    const { id } = await getUserByName(session?.user?.name);
    const contacts = users.filter((user) => user.id !== id);

    // const lastFiveImages = await getLastFiveImages();
    // console.log("BBBBBBBBBBBBBBBBBBBBBBBBBB:",images);
    /**
     * Toggle fullscreen function who work with webkit and firefox.
     * @function toggleFullscreen
     * @param {Object} event
     */
    // function toggleFullscreen(event) {
    //     let element = document.body;

    //     if (event instanceof HTMLElement) {
    //         element = event;
    //     }

    //     const isFullscreen =
    //         document.webkitIsFullScreen || document.mozFullScreen || false;

    //     element.requestFullScreen =
    //         element.requestFullScreen ||
    //         element.webkitRequestFullScreen ||
    //         element.mozRequestFullScreen ||
    //         function () {
    //             return false;
    //         };
    //     document.cancelFullScreen =
    //         document.cancelFullScreen ||
    //         document.webkitCancelFullScreen ||
    //         document.mozCancelFullScreen ||
    //         function () {
    //             return false;
    //         };

    //     isFullscreen
    //         ? document.cancelFullScreen()
    //         : element.requestFullScreen();
    // }

    

    return (
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
            <Navbar />
            <div className="overflow-scroll no-scrollbar">
                <Galery contacts={contacts} />
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
