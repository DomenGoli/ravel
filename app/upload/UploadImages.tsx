"use client";

import { useState, useTransition } from "react";
// import { uploadFile } from "@/app/_lib/data-service";
import MenuButton from "@/app/_ui/MenuButton";
// import ProgressBar from "../_components/ProgressBar";
import SpinnerMini from "../_ui/SpinnerMini";
import { uploadFileAction } from "../_lib/actions";

type UploadImagesProps = {
    id: string;
};

type UploadStatus = "idle" | "uploading" | "success" | "error";

function UploadImages({ id }: UploadImagesProps) {
    const [files, setFiles] = useState<FileList | null>(null);
    // const [uploadMessage, setUploadMessage] = useState("");
    // const [isPending, startTransition] = useTransition();
    const [status, setStatus] = useState<UploadStatus>("idle");

    function onFileSelect(files: FileList | null): void {
        if (files) {
            setFiles(files);
        }
    }

    // function handleUpload(): void {
    //     if (!files || files.length < 1) return;

    //     uploadFileAction(files[0], id);
    //     // startTransition(() => {
    //     //     for (let i = 0; i < files.length; i++) {
    //     //         uploadFileActionTUS(files[i], id);
    //     //     }
    //     //     setUploadMessage("Naloženo");
    //     // });
    //     setFiles(null);
    // }

    async function handleUpload() {
        if (!files || files.length < 1) return;

        setStatus("uploading");

        try {
            for (let i = 0; i < files.length; i++) {
                await uploadFileAction(files[i], id);
            }
            setStatus("success")
        } catch {
            setStatus("error")
        }
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
                    className="flex items-center justify-center file:w-20 file:h-20 file:text-[0rem] file:mr-3 h-20 rounded-[40] cursor-pointer bg-(--strava-bar) border border-white text-heading text-md rounded-base focus:ring-brand focus:border-brand w-full shadow-xs placeholder:text-body "
                    id="multiple_files"
                    type="file"
                    multiple
                    // onChange={(e)=>onFileSelect(e.target.files)}
                    onChange={(e) => onFileSelect(e.target.files)}
                />
            </div>

            {files && (
                <MenuButton>
                    <button onClick={handleUpload}>
                        {status === "uploading" ? <SpinnerMini /> : "Naloži"}
                    </button>
                </MenuButton>
            )}
            {status === "uploading" && <p>Nalagamo slike...</p>}
            {status === "success" && <p>Slike so naložene.</p>}

            {/* <div className="text-center">
                <MenuButton>
                    <button onClick={handleUpload}>
                        {!isPending ? "Naloži" : <SpinnerMini />}
                    </button>
                </MenuButton>
                {isPending && <p>Nalagamo slike...</p>}
                {uploadMessage && <p>{uploadMessage}</p>}
            </div> */}
            {/* <p>Slike se hranijo 48ur</p> */}
        </div>
    );
}

export default UploadImages;
// onChange={(e: React.InputEvent<HTMLInputElement>)=>onFileSelect((e.target as HTMLInputElement)?.files[0])}
