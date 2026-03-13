"use client"

import Link from "next/link"
import MenuButton from "../_ui/MenuButton"
import { logout } from "../_lib/actions"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { signOut } from "../_lib/auth"

function Logout() {
    const router = useRouter()
    // useEffect(function() {
    //     async function main(){

    //     }
    // }, [])
    // function hadleLogout(){
    //     async function main() {
    //         await signOut({redirect:false})
    //         router.push("/auth/login")
    //     }
    //     const timeout = setTimeout(() => main(), 500)

    //     return () => clearTimeout(timeout)
    // }



    return (
        <div className="flex  flex-col items-center justify-center gap-3">
                <label className="text-stone-400 text-2xl">
                    Se želite odjaviti?
                </label>
                <form action={logout}>
                    <div className="flex gap-3">
                        <MenuButton>
                            <button type="submit">Da</button>
                        </MenuButton>
                        <MenuButton>
                            <Link href="/">Ne</Link>
                        </MenuButton>
                    </div>
                </form>
            </div>
    )
}

export default Logout
