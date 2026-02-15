import ActiveUser from "./ActiveUser"
import HomeButton from "./HomeButton"

function Navbar() {
    return (
        <div className="flex justify-between items-center w-screen h-15 p-7 bg-(--strava-bar)">
            <HomeButton />
            <p className="text-stone-600">Ravel</p>
            <ActiveUser />
        </div>
    )
}

export default Navbar
