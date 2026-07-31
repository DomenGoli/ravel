import ProgressBar from "./ProgressBar";

type FileWithProgress = {
    id: string;
    file: File;
    progress: number;
    uploaded: boolean;
}

type FileItemProps = {
    file: FileWithProgress;
    onRemove: (id:string)=>void;
    uploading: boolean;
}

function FileItem({file, onRemove, uploading}: FileItemProps) {
    const Icon = "icon"


    return (
        <div className="flex flex-col w-70 space-y-2 rounded-md bg-(--strava-bar) p-4">
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    {/* <Icon /> */}
                    <div className="flex flex-col">
                        <span className="font-medium">{file.file.name.slice(0, 23)}</span>
                    </div>
                </div>
                {!uploading && !file.uploaded && (
                    <button onClick={() => onRemove(file.id)} className="bg-none p-0">
                        X
                    </button>
                )}
            </div>
            <div className="text-right text-s">
                {file.uploaded ? 'Končano' : `${Math.round(file.progress)}%`}
            </div>
            <ProgressBar progress={file.progress} />
        </div>
    )
}

export default FileItem
