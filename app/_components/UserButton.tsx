"use client"

import { useQuery } from "@tanstack/react-query"
// import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { getUserImagesById } from "../_lib/actions"
import { useAppDispatch } from "../hooks"
import { cacheId, cacheImages } from "../_lib/redux/galerySlice"

type UserType = {
    name: string;
    id: string;
}

type UserButtonProps = {
    user: UserType
}

function UserButton({user}: UserButtonProps) {

    const dispatch = useAppDispatch()
    // const searchParams = useSearchParams()
    // const pathName = usePathname()
    // const router = useRouter()

    const { data, isLoading } = useQuery({
        queryKey: [user.name],
        queryFn: ()=>getUserImagesById(user.id),
        refetchOnMount: true,
    });

    function handleClick():void {
        dispatch(cacheImages(data))
        dispatch(cacheId(user.id))
        // dispatch(saveImages(data))
    }

    if(isLoading) return null;

    return (
        <div className="text-center font-bold border border-(--icon) rounded-[15px] ml-0.5 w-20 bg-(--button) cursor-pointer" onClick={handleClick}>
            {user.name}
        </div>
    )
}

export default UserButton
