import Link from "next/link"
import { IoHome } from "react-icons/io5";
import IconButton from "./IconButton";

function HomeButton() {
    return (
        <div className="">
            <IconButton>
                <Link href="/"><IoHome color="white" /></Link>
            </IconButton>
        </div>
    )
}

export default HomeButton