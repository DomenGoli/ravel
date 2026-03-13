
import Footer from "../_ui/Footer";
import Navbar from "../_ui/Navbar";
import { logout } from "../_lib/actions";
import Link from "next/link";
import MenuButton from "../_ui/MenuButton";
import Logout from "./Logout";

function page() {
    return (
        <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
            <Navbar />
            <Logout />
            <Footer />
        </div>
    );
}

export default page;
