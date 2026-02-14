type MenuButtonProps = {
    children: React.ReactNode
}

function MenuButton({children}: MenuButtonProps) {
    return (
        <div className="flex items-center justify-center text-3xl border-2 border-(--icon) rounded-[30px] w-50 h-15 bg-(--button) cursor-pointer">
            {children}
        </div>
    )
}

export default MenuButton
