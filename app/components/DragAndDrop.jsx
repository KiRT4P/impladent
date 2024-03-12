"use client";

import { useRef, useState } from "react";
import { IconCirclePlus } from '@tabler/icons-react';

export default function DragAndDrop({ destination }) {
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef(null);
    const [files, setFiles] = useState([]);
    function handleChange(e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            for (let i = 0; i < e.target.files.length; i++) {
                setFiles((prevState) => [...prevState, e.target.files[i]]);
            }
        }
    }

    async function handleSubmitFile(e) {
        if (files.length === 0) {
            // no file has been submitted
        } else {
            const formData = new FormData();
            files.forEach((file) => {
                formData.append("files", file);
            });

            try {
                const response = await fetch(destination, {
                    method: "POST",
                    body: formData,
                });

                if (response.ok) {
                    location.reload();
                } else {
                    // File upload failed
                }
            } catch (error) {
                // Handle error
            }
        }
    }

    function handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            for (let i = 0; i < e.dataTransfer.files.length; i++) {
                setFiles((prevState) => [...prevState, e.dataTransfer.files[i]]);
            }
        }
    }

    function handleDragLeave(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    }

    function handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }

    function handleDragEnter(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }

    function removeFile(fileName, idx) {
        const newArr = [...files];
        newArr.splice(idx, 1);
        setFiles([]);
        setFiles(newArr);
    }

    function openFileExplorer() {
        inputRef.current.value = "";
        inputRef.current.click();
    }

    return (
        <div className="flex items-center justify-center">
            <form
                className={`${dragActive ? "bg-primary/50" : "border-primary border-4 "}  p-4 md:w-1/3 rounded-xl  min-h-[10rem] text-center flex flex-col items-center justify-center`}
                onDragEnter={handleDragEnter}
                onSubmit={(e) => e.preventDefault()}
                onDrop={handleDrop}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
            >
                {/* this input element allows us to select files for upload. We make it hidden so we can activate it when the user clicks select files */}
                <input
                    placeholder="fileInput"
                    className="hidden"
                    ref={inputRef}
                    type="file"
                    multiple={true}
                    onChange={handleChange}
                    accept="image/*"
                />
                <div className="font-bold  cursor-pointer" onClick={openFileExplorer}>
                    <IconCirclePlus size={32} color='#46B8BD' />
                </div>

                <div className="flex flex-col items-center p-3">
                    {files.map((file, idx) => (
                        <div key={idx} className="flex flex-row space-x-5">
                            <span>{file.name}</span>
                            <span
                                className="text-red-500 cursor-pointer"
                                onClick={() => removeFile(file.name, idx)}
                            >
                                remove
                            </span>
                        </div>
                    ))}
                </div>

                {/* <button className="bg-primary rounded-lg p-2 mt-3 w-auto" onClick={handleSubmitFile}>
                    <span className="p-2 text-white">Submit</span>
                </button> */}
            </form>
        </div>
    );
}