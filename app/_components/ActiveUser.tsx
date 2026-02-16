import { auth } from "../_lib/auth";
import { getUserByName } from "../_lib/data-service";
import Link from "next/link";

async function ActiveUser() {
    const session = await auth();
    if (!session) return null;

    const { name } = await getUserByName(session?.user?.name);

    return (
        <div>
            {session && (
                <div className="flex items-center gap-5">
                    <Link href="/logout">
                        <p className="text-stone-400 text-2xl">{name}</p>
                    </Link>
                    {/* <form action={logout}>
                        <IconButton>

                        <button><HiOutlineLogout color="#fc5200" size={40} /></button>
                        </IconButton>
                    </form> */}
                </div>
            )}
        </div>
    );
}

export default ActiveUser;
