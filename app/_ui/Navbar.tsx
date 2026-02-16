import ActiveUser from "../_components/ActiveUser";
import HomeButtonProvider from "../_components/HomeButtonProvider";

function Navbar() {
    return (
        <div className="flex justify-between items-center w-screen h-15 p-7 bg-(--strava-bar)">
            <HomeButtonProvider />
            <p className="text-stone-600">Ravel</p>
            <ActiveUser />
        </div>
    );
}

export default Navbar;
