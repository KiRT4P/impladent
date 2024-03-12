'use client'

import { IconCirclePlus, IconCircleMinus, IconHandMove } from '@tabler/icons-react';
import { useState, useRef } from 'react';



export default function Admin() {
    const [images, setImages] = useState([]);
    const inputRef = useRef(null);

    const handleImageChange = (event) => {
        const files = event.target.files;

        const newImages = [...images]; // Create a copy of the existing images
        const num = newImages.length;
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onloadend = () => {
                newImages.push(reader.result);
                if (newImages.length === files.length + num) {
                    setImages(newImages);
                    console.log(newImages);
                }
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        }
    };

    function removeFile(idx) {
        const newArr = [...images];
        newArr.splice(idx, 1);
        setImages([...newArr]);
    }

    function openFileExplorer() {
        inputRef.current.value = "";
        inputRef.current.click();
    }

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 6 }, (_, index) => currentYear - index);


    const [data, setData] = useState({
        month: "def",
        year: "def",
        title: "",
        description: "",
        images: [],
    })

    const [dragItem, setDragItem] = useState(null);
    const [dragOverItem, setDragOverItem] = useState(null);

    const handleSort = () => {
        //duplicate items
        let _listItems = [...images];

        //remove and save the dragged item content
        const draggedItemContent = _listItems.splice(dragItem, 1)[0];

        //switch the position
        _listItems.splice(dragOverItem, 0, draggedItemContent);
        //reset the position ref
        setDragItem(null)
        setDragOverItem(null)

        //update the actual array





        setImages(_listItems);
    };
    return (
        <div className="p-10 pl-16 w-full flex">
            <div className="rounded-3xl shadow-2xl p-8 w-[45%] h-max">
                <div className="flex items-center">
                    <IconCirclePlus size={32} color="#46B8BD" />
                    <h1 className="font-semibold text-2xl text-primary pl-4">
                        Nový prípad mesiaca
                    </h1>
                </div>
                <form action="" className="mt-8">
                    <div className='mb-4 flex'>
                        <select value={data.month} onChange={e => setData({ ...data, month: e.target.value })} className={`outline outline-1 outline-gray-200 rounded-lg text-base p-3 pl-4 w-full mb-5 mr-4 child:text-gray-900 placeholder-gray-300 ${data.month === "def" ? "text-gray-300" : ""}`}>
                            <option value="def" className='text-white hover:text-red-500'>Mesiac</option>
                            <option value="jan">Január</option>
                            <option value="feb">Február</option>
                            <option value="mar">Marec</option>
                            <option value="apr">Apríl</option>
                            <option value="may">Máj</option>
                            <option value="jun">Jún</option>
                            <option value="jul">Júl</option>
                            <option value="aug">August</option>
                            <option value="sep">September</option>
                            <option value="oct">Október</option>
                            <option value="nov">November</option>
                            <option value="dec">December</option>
                        </select>
                        <select value={data.year} onChange={e => setData({ ...data, year: e.target.value })} className={`outline outline-1 outline-gray-200 rounded-lg text-base p-3 pl-4 w-full mb-5 ml-4 child:text-gray-900 placeholder-gray-300 ${data.year === "def" ? "text-gray-300" : ""}`}>
                            <option value="def">Rok</option>
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>

                    <input
                        type="text"
                        placeholder="Názov prípadu"
                        className="outline outline-1 outline-gray-200 rounded-lg text-base p-3 pl-4 w-full mb-5 placeholder-gray-300"
                    />
                    <textarea
                        type="text"
                        placeholder="Popis"
                        className="resize-none outline outline-1 outline-gray-200 rounded-lg pl-4 text-base p-3 w-full mb-5 h-48 min-h-[5rem] placeholder-gray-300"
                    ></textarea>
                    <label className="text-gray-300">Fotografie</label>
                    <div className='flex flex-wrap pt-4'>

                        {images.map((image, index) => (
                            <div
                                key={index}

                                className={`size-32 rounded-2xl relative z-50 group   mr-4 mb-4 ${index === 0 ? "border-4 border-dotted border-primary" : ""}`}
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
                                <img src={image} alt={`Preview ${index}`} className={`object-cover aspect-square rounded-xl`} />
                            </div>


                        ))}
                        <div>
                            <div className="font-bold  cursor-pointer size-32 border-2 border-gray-300 rounded-2xl flex justify-center items-center mr-4 mb-4" onClick={openFileExplorer}>
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
                    </div>
                    <div className="border-2 border-primary rounded-3xl float-right hover:bg-primary hover:text-white duration-300 cursor-pointer px-8 py-2 text-primary w-min uppercase text-lg">
                        Pridať
                    </div>

                </form>
            </div>
        </div>
    );
}