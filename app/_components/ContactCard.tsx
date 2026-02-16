"use client"

import { useQuery } from "@tanstack/react-query"
// import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { getUserImagesById } from "../_lib/actions"
import { useAppDispatch, useAppSelector } from "../hooks"
import { cacheId, cacheImages } from "../_lib/redux/galerySlice"
import Spinner from "../_ui/Spinner"
import SpinnerMini from "../_ui/SpinnerMini"


type UserType = {
    name: string;
    id: string;
}

type UserButtonProps = {
    user: UserType
}

function ContactCard({user}: UserButtonProps) {
    const {userId} = useAppSelector(store => store.galery)
    const dispatch = useAppDispatch()
    // const searchParams = useSearchParams()
    // const pathName = usePathname()
    // const router = useRouter()

    const { data, isLoading } = useQuery({
        queryKey: [user.name],
        queryFn: ()=>getUserImagesById(user.id),
        refetchOnMount: true,
    });

    const cardStyle ={
        base: "flex items-center justify-center pb-1 font-bold border-2 rounded-[25px] border-black ml-0.5 pl-3 pr-3 h-9 cursor-pointer",
        inactive: "bg-(--strava-bar) text-stone-400",
        active: "bg-stone-400 text-(--strava-bar)"
    }

    function handleClick():void {
        dispatch(cacheImages(data))
        dispatch(cacheId(user.id))
        // dispatch(saveImages(data))
    }

    if(isLoading) return <SpinnerMini />;

    return (
        <div className={`${cardStyle.base} ${user.id === userId ? cardStyle.active : cardStyle.inactive}`} onClick={handleClick}>
            {user.name}
        </div>
    )
}

export default ContactCard
