

// const buttonStyle = {
//     base: "",
//     inactive: "",
//     active: "",
// }

type MenuButtonProps = {
    children: React.ReactNode,
    active?: boolean,
    page?: string,
}
function MenuButton({children}: MenuButtonProps) {
    return (
        <div className="flex items-center justify-center border-2 border-(--strava-ozadje) text-3xl rounded-[35px] w-38 h-18 bg-black cursor-pointer text-(--strava-button)">
            {children}
        </div>
    )
}

export default MenuButton



// const footerRouts = {
//     upload: "/upload",
//     myfiles: "/myfiles",
// };

// const linkStyle = {
//     base: "flex items-center justify-center border-2 border-(--strava-ozadje) text-sm rounded-[30px] w-25 h-10 cursor-pointer text-(--strava-button)",
//     inactive: "bg-black",
//     active: "bg-white",
// };

// className={`${linkStyle.base} ${pathname === footerRouts.myfiles ? linkStyle.active : linkStyle.inactive}`}