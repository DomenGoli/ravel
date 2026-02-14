import ActiveUser from "./ActiveUser"
import HomeButton from "./HomeButton"

function Navbar() {
    return (
        <div className="flex justify-between w-50 mt-6">
            <HomeButton />
            <ActiveUser />
        </div>
    )
}

export default Navbar
