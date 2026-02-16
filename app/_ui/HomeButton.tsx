"use client";

import Link from "next/link";
import { IoHome } from "react-icons/io5";
import IconButton from "./IconButton";
import { useAppDispatch } from "../hooks";
import { galeryToInitialState } from "../_lib/redux/galerySlice";

function HomeButton() {
    const dispatch = useAppDispatch();

    function handleClick() {
        dispatch(galeryToInitialState());
    }

    return (
        <div className="">
            <IconButton>
                <Link onClick={handleClick} href="/">
                    <IoHome color="#fc5200" size={40} />
                </Link>
            </IconButton>
        </div>
    );
}

export default HomeButton;
