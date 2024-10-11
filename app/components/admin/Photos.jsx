'use client'

import { IconCirclePlus, IconCircleMinus, IconHandMove } from '@tabler/icons-react';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function Photos({ images, setImages, pending, message }) {


    const inputRef = useRef(null);
    const [urlImages, setUrlImages] = useState([]);
    useEffect(() => {
        let temp = images.map((file, index) => {
            return URL.createObjectURL(file)
        })

        setUrlImages(temp);
    }, [images]);




    const handleImageChange = async (event) => {
        const files = event.target.files;
        setImages([...images, ...files]);
    };



    async function removeFile(idx) {
        // let res = await fetch(process.env.NEXT_PUBLIC_IMAGE_DOMAIN, {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ files: [images[idx]] })
        // });
        // console.log(res);

        // if (!res.ok) {
        //     alert("nastala chyba");;

        //     return
        // }

        const newArr = [...images];

        newArr.splice(idx, 1);
        console.log(newArr);


        setImages([...newArr]);
    }

    function openFileExplorer() {
        inputRef.current.value = "";
        inputRef.current.click();
    }

    const [dragItem, setDragItem] = useState(null);
    const [dragOverItem, setDragOverItem] = useState(null);

    const handleSort = () => {
        let _listItems = [...images];

        //remove and save the dragged item content
        const draggedItemContent = _listItems.splice(dragItem, 1)[0];

        //switch the position
        _listItems.splice(dragOverItem, 0, draggedItemContent);
        //reset the position ref
        setDragItem(null)
        setDragOverItem(null)




        setImages(_listItems);
        //duplicate items

    };

    return (
        <div className={' flex-wrap pt-1  ' + ((pending || message === 'success') ? " hidden " : " flex ")}>

            {urlImages.map((image, index) => (
                <div
                    key={index}
                    className={` mb-4 size-32 rounded-2xl relative z-50 group   mr-4  ${index === 0 ? "border-4 border-dotted border-primary" : ""}`}
                    draggable
                    onDragStart={(e) => (setDragItem(index))}
                    onDragEnter={(e) => { setDragOverItem(index) }}
                    onDragEnd={handleSort}
                    onDragOver={(e) => e.preventDefault()}
                >
                    <div className='w-full h-full absolute rounded-xl group-hover:opacity-100 opacity-0 duration-200 bg-black/70 flex flex-col justify-center items-center'>
                        <div onClick={e => removeFile(index)} className=' px-8 py-1 cursor-pointer'>
                            <IconCircleMinus size={32} color='#fff' />
                        </div>

                        <div className='h-[2px] rounded-full w-[80%] bg-slate-300 my-3'></div>
                        <div className=' px-8 py-1 cursor-pointer'>
                            <IconHandMove size={32} color='#fff' />
                        </div>
                    </div>
                    <div className={`my-auto w-1 h-full absolute -left-2 bg-primary ${(dragOverItem === index) ? "  " : " hidden  "}`}></div>
                    <Image src={image} fill alt={`Preview ${index}`} className={`-z-50 object-cover aspect-square rounded-xl`} />
                </div>
            )
            )}
            <div className="font-bold  cursor-pointer size-32 border-2 border-gray-300 rounded-2xl flex justify-center items-center mr-4 " onClick={openFileExplorer}>
                <IconCirclePlus size={32} color='#46B8BD' />
                <input
                    type="file"
                    accept="image/*"
                    ref={inputRef}
                    multiple
                    onChange={handleImageChange}
                    className='hidden'
                />
            </div>

        </div>
    )
}