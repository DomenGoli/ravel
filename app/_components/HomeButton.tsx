import Link from "next/link"
import { IoHome } from "react-icons/io5";
import IconButton from "./IconButton";

function HomeButton() {
    return (
        <div className="">
            <IconButton>
                <Link href="/"><IoHome color="#fc5200" size={40} /></Link>
            </IconButton>
        </div>
    )
}

export default HomeButton