type MenuButtonProps = {
    children: React.ReactNode
}

function Button({children}: MenuButtonProps) {
    return (
        <div className="flex justify-center items-center pb-1 text-3xl border-2 border-(--icon) rounded-[30px] w-30 h-11 bg-(--button) cursor-pointer">
            {children}
        </div>
    )
}

export default Button