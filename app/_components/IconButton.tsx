type IconButtonProps = {
    children: React.ReactNode
}

function IconButton({children}: IconButtonProps) {
    return (
        <div className="flex justify-center text-3xl border rounded-[5px] w-10 bg-black cursor-pointer">
            {children}
        </div>
    )
}

export default IconButton
