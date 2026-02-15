"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const footerRouts = {
    upload: "/upload",
    myfiles: "/myfiles",
};

const linkStyle = {
    base: "flex items-center justify-center border-2 border-(--strava-ozadje) text-sm rounded-[30px] w-25 h-10 cursor-pointer text-(--strava-button)",
    inactive: "bg-black",
    active: "bg-white",
};

function Footer() {
    const pathname = usePathname();

    return (
        <div className="flex items-center justify-between w-screen h-10 p-7 bg-(--strava-bar)">
            <Link
                href="/upload"
                className={`${linkStyle.base} ${pathname === footerRouts.upload ? linkStyle.active : linkStyle.inactive}`}
            >
                Nalozi slike
            </Link>

            <Link
                href="/myfiles"
                className={`${linkStyle.base} ${pathname === footerRouts.myfiles ? linkStyle.active : linkStyle.inactive}`}
            >
                Moje slike
            </Link>
        </div>
    );
}

export default Footer;
