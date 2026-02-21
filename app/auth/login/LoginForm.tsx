"use client"
import { login } from "@/app/_lib/actions";
import MenuButton from "@/app/_ui/MenuButton";
import {useCookies} from "react-cookie"

function LoginForm() {
    // const [cookie, setCookie] = useCookies()
    


    async function handleSubmit(e){
        e.preventDefault()
        const formData = new FormData(e.target)
        const response = await login(formData)
        console.log("dsfsdfsdfsdfsdf");
        console.log("response:",response);

    //     setCookie("user", JSON.stringify(response), {
    //     path: "/",
    //     maxAge: 3600, // Expires after 1hr
    //     sameSite: true,
    //   })
    }

    return (
        <div className="flex flex-col justify-center items-center gap-14">
            <div className="flex flex-col text-center">
                {/* <label className="absolute left-11 rotate-270 top-50 text-stone-400 text-lg">imG</label> */}
                <label className="text-7xl text-stone-400">imGravel</label>
            </div>
            <form onSubmit={handleSubmit} id="form">
                <div className="flex flex-col gap-10 items-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex flex-col items-center gap-2">
                            <label className="text-center text-2xl text-stone-400">
                                Uporabniško ime
                            </label>
                            <input
                                type="username"
                                name="username"
                                className="w-40 h-10 rounded-2xl bg-(--strava-bar)  text-stone-400 text-2xl text-center border"
                            ></input>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <label className="text-center text-2xl text-stone-400">
                                Geslo
                            </label>
                            <input
                                type="password"
                                name="password"
                                className="w-40  rounded-2xl h-10 bg-(--strava-bar) text-stone-400 text-2xl text-center border"
                            ></input>
                        </div>
                    </div>
                    <MenuButton>
                        <button className="cursor-pointer active:bg-white duration-700" type="submit">
                            Prijavi
                        </button>
                    </MenuButton>

                    {/* <Button type="submit" variation="form">
                        Login
                    </Button> */}
                    <div className="flex mt-12 justify-center"></div>
                </div>
            </form>
            {/* <Guest /> */}
        </div>
    );
}

export default LoginForm;
