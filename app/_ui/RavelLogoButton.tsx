"use client"
function RavelLogoButton() {
    function toggleFullScreen() {
        const element = document.body;

        // if (event instanceof HTMLElement) {
        //     element = event;
        // }
        if (!document.fullscreenElement) {
            // If the document is not in full screen mode
            // make the video full screen
            element.requestFullscreen();
        } else {
            // Otherwise exit the full screen
            document.exitFullscreen?.();
        }
    }
    return (
        <div>
            <p onClick={toggleFullScreen} className="text-stone-600">imGravel</p>
        </div>
    )
}

export default RavelLogoButton
