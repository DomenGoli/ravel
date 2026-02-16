import ActiveUser from "../_components/ActiveUser";
import HomeButtonProvider from "../_components/HomeButtonProvider";
import RavelLogoButton from "./RavelLogoButton";

function Navbar() {
    return (
        <div className="flex justify-between items-center w-screen h-15 p-7 bg-(--strava-bar)">
            <HomeButtonProvider />
            <RavelLogoButton />
            <ActiveUser />
        </div>
    );
}

export default Navbar;
