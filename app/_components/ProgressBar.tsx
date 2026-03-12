function ProgressBar({ progress = 40 }) {
    return (
        <div className="bg-gray-400 w-75 mt-3 rounded-full">
            <div
                className="p-1 bg-amber-600 rounded-full"
                style={{ width: `${progress}%` }}
            >
                {`${Number(progress).toFixed(0)}%`}
            </div>
        </div>
    );
}

export default ProgressBar;
