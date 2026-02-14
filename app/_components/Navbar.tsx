import ActiveUser from "./ActiveUser"
import HomeButton from "./HomeButton"

function Navbar() {
    return (
        <div className="flex justify-between w-screen p-7 ">
            <HomeButton />
            <ActiveUser />
        </div>
    )
}

export default Navbar
