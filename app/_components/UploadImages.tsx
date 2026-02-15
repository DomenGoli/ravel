"use client";

import { useState } from "react";
import { uploadFile } from "../_lib/data-service";
import MenuButton from "./MenuButton";

type UploadImagesProps = {
    id: string;
};

function UploadImages({ id }: UploadImagesProps) {
    const [files, setFiles] = useState<FileList | null>(null);

    function onFileSelect(files: FileList | null): void {
        if (files) {
            setFiles(files);
            // console.log(file);
        }
    }

    function handleUpload(): void {
        if (!files || files.length < 1) return;
        for (let i = 0; i < files.length; i++) {
            uploadFile(files[i], id);
            console.log(files[i]);
        }
        // uploadFile(file, id)
        // console.log(files);
    }

    return (
        <div className="flex flex-col items-center gap-20 mt-20">
            <div className="flex flex-col items-center">

            <label
                className="block mb-2.5 text-lg font-medium text-heading"
                htmlFor="multiple_files"
                >
                Izberi slike
            </label>
            <input
                className="flex items-center justify-center file:h-20 bg-(--button) file:text-[0rem] file:mr-3 h-20 rounded-[40] cursor-pointer bg-neutral-secondary-medium border border-default-medium text-black text-center text-heading text-md rounded-base focus:ring-brand focus:border-brand w-full shadow-xs placeholder:text-body"
                id="multiple_files"
                type="file"
                multiple
                
                // onChange={(e)=>onFileSelect(e.target.files)}
                onChange={(e) => onFileSelect(e.target.files)}
                />
                </div>
            <MenuButton>
                <button onClick={handleUpload}>Naloži</button>
            </MenuButton>
        </div>
    );
}

export default UploadImages;
// onChange={(e: React.InputEvent<HTMLInputElement>)=>onFileSelect((e.target as HTMLInputElement)?.files[0])}
