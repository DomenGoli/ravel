"use client"

import { useState } from "react";
import { uploadFile } from "../_lib/data-service";


type UploadImagesProps = {
    id: string
}

function UploadImages({id}: UploadImagesProps) {
    const [files, setFiles] = useState<FileList | null>(null)

    function onFileSelect(files: FileList | null):void {
        if(files) {
            setFiles(files)
            // console.log(file);
        }
    }

    function handleUpload():void {
        if(!files || files.length < 1) return
        for(let i=0; i<files.length; i++) {
            uploadFile(files[i], id)
            console.log(files[i]);
        }
        // uploadFile(file, id)
        // console.log(files);
    }

    return (
        <div>
            <label
                className="block mb-2.5 text-sm font-medium text-heading"
                htmlFor="multiple_files"
            >
                Upload multiple files
            </label>
            <input
                className="cursor-pointer bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full shadow-xs placeholder:text-body"
                id="multiple_files"
                type="file"
                multiple
                // onChange={(e)=>onFileSelect(e.target.files)}
                onChange={(e)=>onFileSelect(e.target.files)}
            />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default UploadImages;
// onChange={(e: React.InputEvent<HTMLInputElement>)=>onFileSelect((e.target as HTMLInputElement)?.files[0])}