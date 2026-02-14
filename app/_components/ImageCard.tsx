"use client";
import Image from "next/image";
import { saveAs } from "file-saver";
import { MdDownloadForOffline } from "react-icons/md";

function ImageCard({
    imgURL,
    imgName,
}: {
    imgURL: string;
    imgName: string;
}) {
    function handleDownload():void {
        saveAs(imgURL, imgName);
    }

    return (
        <div className="relative w-80 h-50">
            <button
                onClick={handleDownload}
                className="absolute z-30 cursor-pointer bottom-[0.4rem] right-[0.4rem]"
            >
                <MdDownloadForOffline size={40} color="white" />
            </button>
            {/* <a className="absolute z-30" href={imgURL} download="test.jpg">
                <button type="button" className="cursor-pointer">X</button>
                X
            </a> */}
            <Image
                src={imgURL}
                alt=""
                fill
                className="object-cover"
                // width={50}
                // height={50}
            />
        </div>
    );
}

export default ImageCard;
