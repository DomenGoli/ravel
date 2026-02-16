"use client";
import Image from "next/image";
import { saveAs } from "file-saver";
import { MdDownloadForOffline } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { deleteFile } from "../_lib/data-service";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

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
    // const {downloadedFiles} = useAppSelector(store=> store.galery)
    const [isDownloaded, setIsDownloaded] = useState(false)


    function handleDownload(): void {
        saveAs(imgURL, imgName);
        // markAsDownloaded(imgName)
        setIsDownloaded(true)
    }

    function handleDelete():void {
        deleteFile(imgName, userId)
    }

    // useEffect(function() {
    //     const isIn = downloadedFiles === imgName
    //     if(isIn) setIsDownloaded(true)
    // }, [downloadedFiles, imgName])

    return (
        <div className="relative w-screen h-60">
            {!isDownloaded && (
                <button
                onClick={handleDownload}
                className="absolute z-30 cursor-pointer bottom-[0.4rem] right-[0.4rem]"
            >
                <MdDownloadForOffline size={41} color="white" />
            </button>
            )}

            {isDownloaded && (
                <button
                // onClick={handleDownload}
                className="absolute z-30 cursor-pointer bottom-[0.6rem] right-[0.6rem]"
            >
                <FaCheckCircle size={35} color="white" />
            </button>
            )}
            


            {mode === "edit" && (
                <button
                    onClick={handleDelete}
                    className="absolute z-30 cursor-pointer top-[0.1rem] left-[0.1rem]"
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
                // fill
                className="object-cover"
                // quality={80}
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
