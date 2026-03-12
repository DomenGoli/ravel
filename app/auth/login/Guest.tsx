"use client";
import { login } from "@/app/_lib/actions";
import MenuButton from "@/app/_ui/MenuButton";
import SpinnerMini from "@/app/_ui/SpinnerMini";
import { useFormStatus } from "react-dom";

const guestCredentials = new Map();
guestCredentials.set("username", "g");
guestCredentials.set("password", "g");

function Guest() {
    const { pending } = useFormStatus();
    return (
        <div className="flex">
            <button
                className="flex items-center justify-center border-2 border-(--strava-ozadje) text-3xl rounded-[35px] w-38 h-18 bg-black cursor-pointer text-(--strava-button) active:bg-white duration-700"
                onClick={() => login(guestCredentials)}
            >
                {!pending ? "Gost" : <SpinnerMini />}
            </button>
        </div>
    );
}

export default Guest;
