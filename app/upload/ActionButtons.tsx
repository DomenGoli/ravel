type ActionButtonsProps = {
    disabled: boolean;
    onUpload: ()=>void;
    onClear: ()=>void;
}

function ActionButtons({disabled, onUpload, onClear}: ActionButtonsProps) {
    return (
        <div className="flex gap-6">
            <button
                onClick={onUpload}
                disabled={disabled}
                className="flex items-center text-(--strava-ozadje) font-bold cursor-pointer bg-(--strava-button) active:bg-white duration-700 px-6 py-2 rounded-md"
            >
                Naloži
            </button>
            {/* <button 
                onClick={onClear}
                disabled={disabled}
                className="flex items-center cursor-pointer bg-(--strava-bar) px-6 py-2 rounded-md"
                >
                Počisti vse
            </button> */}
        </div>
    )
}

export default ActionButtons
