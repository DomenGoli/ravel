import { ChangeEvent } from "react";

type FileInputProps = {
    inputRef: React.RefObject<HTMLInputElement | null>;
    disabled: boolean;
    onFileSelect: (e: ChangeEvent<HTMLInputElement>) => void;
};

function FileInput({inputRef, disabled, onFileSelect}: FileInputProps) {
    return(
        <>
            <input
                    // className="flex items-center justify-center file:w-20 file:h-20 file:text-[0rem] file:mr-3 h-20 rounded-[40] cursor-pointer bg-(--strava-bar) border border-white text-heading text-md rounded-base focus:ring-brand focus:border-brand w-full shadow-xs placeholder:text-body "
                    className="hidden"
                    id="multiple_files"
                    type="file"
                    ref={inputRef}
                    multiple
                    onChange={onFileSelect}
                    disabled={disabled}
                />
            <label
                htmlFor="multiple_files"
                className="flex cursor-pointer border items-center gap-2 rounded-md bg-(--strava-bar) px-6 py-2"
            >Dodaj slike +</label>    
        </>
    )
}

export default FileInput
