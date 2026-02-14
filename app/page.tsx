// import Image from "next/image";

import Link from "next/link";
import MenuButton from "./_components/MenuButton";

export default function Home() {
    return (
        <div className="flex flex-col gap-7 h-screen justify-center">
            <MenuButton>
                <Link href="/upload">Nalozi slike</Link>
            </MenuButton>
            <MenuButton>
                <Link href="/galery">Galerija</Link>
            </MenuButton>
            <MenuButton>
                <Link href="/myfiles">Moje slike</Link>
            </MenuButton>
        </div>
    );
}
