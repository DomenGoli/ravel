import Footer from "../_ui/Footer";
import Navbar from "../_ui/Navbar";
import UploadImages from "./_components/UploadImages";
import { auth } from "../_lib/auth";
import { getUserByName } from "../_lib/data-service";

async function page() {
    const session = await auth();
    const { id } = await getUserByName(session?.user?.name);
    return (
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
            <Navbar />
            <UploadImages id={id} />
            <Footer />
            {/* <div>
                <p>Nalozena slika se samodejno</p>
                <p>zbrise po 48 urah.</p>
            </div> */}
        </div>
    );
}

export default page;
