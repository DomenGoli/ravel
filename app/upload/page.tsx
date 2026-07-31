import Footer from "../_ui/Footer";
import Navbar from "../_ui/Navbar";
import UploadImages from "./UploadImages";


const id = "1"

async function page() {
    return (
        <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
            <Navbar />
            <div className="overflow-scroll no-scrollbar">
            <UploadImages id={id} />
            </div>
            <Footer />
        </div>
    );
}

export default page;
