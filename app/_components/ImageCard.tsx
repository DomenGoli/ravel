"use client";
import Image from "next/image";
import { saveAs } from "file-saver";
import { MdDownloadForOffline } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { deleteFile } from "../_lib/data-service";

function ImageCard({
    imgURL,
    imgName,
    mode = "display",
    userId,
}: {
    imgURL: string;
    imgName: string;
    mode?: string;
    userId?: string;
}) {
    function handleDownload(): void {
        saveAs(imgURL, imgName);
    }

    function handleDelete():void {
        deleteFile(imgName, userId)
    }

    return (
        <div className="relative w-80 h-50">
            <button
                onClick={handleDownload}
                className="absolute z-30 cursor-pointer bottom-[0.4rem] right-[0.4rem]"
            >
                <MdDownloadForOffline size={40} color="white" />
            </button>
            {mode === "edit" && (
                <button
                    onClick={handleDelete}
                    className="absolute z-30 cursor-pointer top-[0.2rem] left-[0.2rem]"
                >
                    <TiDelete size={50} color="white" />
                </button>
            )}
            {/* <a className="absolute z-30" href={imgURL} download="test.jpg">
                <button type="button" className="cursor-pointer">X</button>
                X
            </a> */}
            <Image
                src={imgURL}
                alt=""
                fill
                className="object-cover"
                quality={80}
                // width={50}
                // height={50}
            />
        </div>
    );
}
{
    /* <TiDelete /> */
}
export default ImageCard;
