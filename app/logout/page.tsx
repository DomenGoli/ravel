import Footer from "../_ui/Footer";
import Navbar from "../_ui/Navbar";
import { logout } from "../_lib/actions";
import Link from "next/link";
import MenuButton from "../_ui/MenuButton";

function page() {
    return (
        <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
            <Navbar />
            <div className="flex  flex-col items-center justify-center gap-3">
                <label className="text-stone-400 text-2xl">
                    Se želite odjaviti?
                </label>
                <form action={logout}>
                    <div className="flex gap-3">
                        <MenuButton>
                            <button type="submit">Da</button>
                        </MenuButton>
                        <MenuButton>
                            <Link href="/">Ne</Link>
                        </MenuButton>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default page;
