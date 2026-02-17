import Footer from "../_ui/Footer";
import Navbar from "../_ui/Navbar";
import { Suspense } from "react";
import Spinner from "../_ui/Spinner";
import MyGalery from "./MyGalery";




async function page() {
    return (
        <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
            <Navbar />
            <div className="overflow-scroll no-scrollbar">
                <div className="flex flex-col items-center justify-center gap-2">
                    <Suspense fallback={<Spinner />}>
                    <MyGalery />
                    </Suspense>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default page;

