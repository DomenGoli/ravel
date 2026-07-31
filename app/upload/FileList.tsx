import FileItem from "./FileItem";

type FileWithProgress = {
    id: string;
    file: File;
    progress: number;
    uploaded: boolean;
}

type FileListProps = {
    files: FileWithProgress[];
    onRemove: (id: string) => void;
    uploading: boolean;
}

function FileList({files, onRemove, uploading}: FileListProps) {
    if(files.length === 0) return null;

    return (
        <div className="space-y-2">
            <label className="font-semibold">Slike:</label>
            <div className="space-y-2">
                {files.map(file => (
                    <FileItem file={file} onRemove={onRemove} uploading={uploading}/>
                ))}
            </div>
        </div>
    )
}

export default FileList
