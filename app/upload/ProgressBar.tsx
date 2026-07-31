
type ProgressBarProps = {
    progress: number;
}

function ProgressBar({progress}: ProgressBarProps) {
    return (
        <div className="h-2 w-full overflow-hidden rounded-full bg-(--strava-ozadje)">
            <div className="h-full bg-(--strava-button) transition-all duration-300"
            style={{width: `${progress}%`}} />
        </div>
    )
}

export default ProgressBar


