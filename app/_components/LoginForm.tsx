import { login } from "../_lib/actions";
import Button from "./Button";

function LoginForm() {
    return (
        <div className="flex flex-col justify-center items-center">
            {/* <label className="text-8xl mb-5">LockIn v2</label> */}
            <form action={login}>
                <div className="flex flex-col gap-5 items-center">
                    <div className="flex flex-col">
                        <label className="text-center">Username</label>
                        <input
                            type="username"
                            name="username"
                            className="w-50 bg-amber-50 text-black text-center border"
                        ></input>
                        <label className="text-center">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-50 bg-amber-50 text-black text-center border"
                        ></input>
                    </div>
                    <Button>
                        <button className="cursor-pointer" type="submit">Login</button>
                    </Button>

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
