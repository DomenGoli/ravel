import { logout } from "../_lib/actions";
import { auth } from "../_lib/auth";
import { getUserByName } from "../_lib/data-service";
import { HiOutlineLogout } from "react-icons/hi";
import IconButton from "./IconButton";

async function ActiveUser() {
    const session = await auth();
    if(!session) return null;

    const {name} = await getUserByName(session?.user?.name)

    return (
        <div>
            {session && (
                <div className="flex gap-4">
                    <p className="text-2xl">{name}</p>
                    <form action={logout}>
                        <IconButton>

                        <button><HiOutlineLogout color="white" /></button>
                        </IconButton>
                    </form>
                </div>
            )}
        </div>
    );
}

export default ActiveUser;
