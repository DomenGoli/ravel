type IconButtonProps = {
    children: React.ReactNode
}

function IconButton({children}: IconButtonProps) {
    return (
        <div className="flex justify-center items-center text-3xl rounded-[5px] w-18 h-11 bg-black cursor-pointer">
            {children}
        </div>
    )
}

export default IconButton
