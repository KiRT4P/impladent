'use client'

import { IconCirclePlus } from '@tabler/icons-react';
import Photos from './Photos';

import { addMonthly, editMonthly } from './actions';
import { useRef, useEffect, useState } from 'react'
import { useFormState } from 'react-dom'

export default function Monthly({ startData }) {

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 6 }, (_, index) => currentYear - index);
    const [images, setImages] = useState([]);
    const [pending, setPending] = useState(false);

    const [state, formAction] = useFormState(!!startData ? editMonthly : addMonthly, {
        message: "",
        error: undefined,
        values: {
            email: "",
            text: "",
        }
    })

    useEffect(() => {
        setImages([]);
        if (startData) {
            console.log("running now");

            const images = startData.images;
            images.forEach(image => {
                fetch(process.env.NEXT_PUBLIC_IMAGE_DOMAIN + '/' + image)
                    .then(res => res.blob())
                    .then(blob => {
                        blob = new File([blob], image, { type: 'image/jpeg' });
                        setImages(old => [...old, blob]);
                    });
            });
        }
        // eslint-disable-next-line
    }, [startData]);


    const handleSubmit = async (e) => {
        if (startData) {
            fetch(process.env.NEXT_PUBLIC_IMAGE_DOMAIN, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ files: startData.images })
            })
        }

        const formData = new FormData();
        let names = [];
        Array.from(images).forEach((file) => {
            formData.append("files", file);
        });
        try {
            let res = await fetch(process.env.NEXT_PUBLIC_IMAGE_DOMAIN, {
                method: 'POST',
                body: formData
            });

            if (!res.ok) {
                console.log("uff");
            }
            let { fileNames } = await res.json();
            fileNames.forEach(file => {
                names.push(file);
            })

            if (res.ok) {

                const newImages = [...names];
                e.append('images', JSON.stringify(newImages));
                e.append('id', startData?.id);
                formAction(e);
            } else {
                console.log("fail");

            }
        } catch (error) {
            console.log(error);

        }




    }


    const formRef = useRef(null)

    useEffect(() => {
        if (state?.message === 'success') {
            redirect('/admin')

        } else if (state?.message === 'error') {
            alert(state.error)
        }





    }, [state])

    useEffect(() => {
        formRef.current.elements.month.value = startData ? startData.month : ""
        formRef.current.elements.year.value = startData ? startData.year : ""
        formRef.current.elements.title.value = startData ? startData.title : ""
        formRef.current.elements.text.value = startData ? startData.text : ""

    }, [startData])



    return (
        <div className="rounded-3xl shadow-2xl p-8 w-[45%] mx-4">
            <div className="flex items-center">
                <IconCirclePlus size={32} color="#46B8BD" />
                <h1 onClick={e => console.log(startData)} className="font-semibold text-2xl text-primary pl-4">
                    {startData ? "Upraviť prípad" : " Nový prípad mesiaca"}
                </h1>
            </div>
            <form ref={formRef} action={handleSubmit} className="pt-8 flex flex-col">
                <div className='flex'>
                    <select defaultValue={""} disabled={pending} name='month' required className={`outline outline-1 outline-gray-200 rounded-lg text-base p-3 pl-4 w-full mb-5 mr-4 child:text-gray-900  invalid:text-gray-300 `}>
                        <option value="" disabled hidden className='text-white hover:text-red-500'>Mesiac</option>
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
                    <select defaultValue={""} disabled={pending} name='year' required className={`outline outline-1 outline-gray-200 rounded-lg text-base p-3 pl-4 w-full mb-5 ml-4 child:text-gray-900 placeholder-gray-300 invalid:text-gray-300 `}>
                        <option value="" disabled hidden >Rok</option>
                        {years.map((year, i) => (
                            <option key={i} value={year.toString()}>
                                {year}
                            </option>

                        ))}
                    </select>
                </div>

                <input

                    disabled={pending}
                    name='title'
                    type="text"
                    placeholder="Názov prípadu"
                    className="outline outline-1 outline-gray-200 rounded-lg text-base p-3 pl-4 w-full mb-5 placeholder-gray-300"
                    required
                />
                <textarea

                    disabled={pending}
                    name='text'
                    type="text"
                    placeholder="Popis"
                    className="resize-none outline outline-1 outline-gray-200 rounded-lg pl-4 text-base p-3 w-full mb-5 h-48 min-h-[5rem] placeholder-gray-300"
                    required
                ></textarea>
                <label className="text-gray-300">Fotografie</label>
                <Photos startData={startData} images={images} setImages={setImages} pending={pending} message={state?.message} />
                <div className='w-full flex flex-col items-end justify-end  grow pb-3 '>
                    <Submit backCall={setPending} message={state?.message} type={!!startData ? "update" : "add"} />
                    {startData && <button type="submit" className="mt-4 w-36 h-max border-2 border-customGray rounded-3xl float-right hover:bg-customGray hover:text-white duration-300 cursor-pointer px-8 py-2 text-customGray uppercase text-lg">
                        Vymazať
                    </button>}
                </div>


            </form>
        </div>
    )
}



import { useFormStatus } from "react-dom";
import { redirect } from 'next/navigation';

export function Submit({ message, backCall, type }) {
    const { pending } = useFormStatus();

    useEffect(() => {
        backCall(pending)
        //eslint-disable-next-line
    }, [pending])


    return (
        <div>
            {type === 'add' && <button type="submit" disabled={pending || message === 'success'} className="w-36 h-max border-2 border-primary rounded-3xl float-right hover:bg-primary hover:text-white duration-300 cursor-pointer px-8 py-2 text-primary uppercase text-lg">
                {pending ? "Pridávam..." : message === 'success' ? "Pridané!" : "Pridať"}
            </button>}
            {type === 'update' && <button type="submit" disabled={pending || message === 'success'} className="w-36 h-max border-2 border-primary rounded-3xl float-right hover:bg-primary hover:text-white duration-300 cursor-pointer px-8 py-2 text-primary uppercase text-lg">
                {pending ? "Ukladám..." : message === 'success' ? "Uložené!" : "Uložiť"}
            </button>}
        </div>


    );
}

export function ConfirmModal() {
    return (
        <div>
            <h1>Are you sure you want to delete this case?</h1>
        </div>
    )
} 