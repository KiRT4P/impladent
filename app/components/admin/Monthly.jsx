'use client'

import { IconCirclePlus } from '@tabler/icons-react';
import Photos from './Photos';

import { addMonthly } from './actions';
import { useRef, useEffect, useState } from 'react'
import { useFormState } from 'react-dom'

export default function Monthly() {

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 6 }, (_, index) => currentYear - index);
    const [images, setImages] = useState([]);
    const [pending, setPending] = useState(false);

    const [state, formAction] = useFormState(addMonthly, {
        message: "",
        error: undefined,
        values: {
            email: "",
            text: "",
        }
    })


    const handleSubmit = async (e) => {
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
        console.log(state);
        if (state?.message === 'success') {
            location.reload()
        } else if (state?.message === 'error') {
            alert(state.error)
        }


    }, [state])


    return (
        <div className="rounded-3xl shadow-2xl p-8 w-[45%] mx-8">
            <div className="flex items-center">
                <IconCirclePlus size={32} color="#46B8BD" />
                <h1 className="font-semibold text-2xl text-primary pl-4">
                    Nový prípad mesiaca
                </h1>
            </div>
            <form ref={formRef} action={handleSubmit} className="pt-8 flex flex-col h-full">
                <div className='mb-4 flex'>
                    <select disabled={pending} name='month' required className={`outline outline-1 outline-gray-200 rounded-lg text-base p-3 pl-4 w-full mb-5 mr-4 child:text-gray-900  invalid:text-gray-300 `}>
                        <option value="" disabled selected hidden className='text-white hover:text-red-500'>Mesiac</option>
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
                    <select disabled={pending} name='year' required className={`outline outline-1 outline-gray-200 rounded-lg text-base p-3 pl-4 w-full mb-5 ml-4 child:text-gray-900 placeholder-gray-300 invalid:text-gray-300 `}>
                        <option value="" disabled selected hidden >Rok</option>
                        {years.map((year) => (
                            <option key={year} value={year.toString()}>
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
                <Photos images={images} setImages={setImages} pending={pending} message={state.message} />
                <div className='w-full grow flex items-end justify-end pb-6'>
                    <Submit backCall={setPending} message={state.message} />
                </div>


            </form>
        </div>
    )
}



import { useFormStatus } from "react-dom";

export function Submit({ message, backCall }) {
    const { pending } = useFormStatus();

    useEffect(() => {
        backCall(pending)
        console.log(pending);
    }, [pending])


    return (
        <button type="submit" disabled={pending || message === 'success'} className=" h-max border-2 border-primary rounded-3xl float-right hover:bg-primary hover:text-white duration-300 cursor-pointer px-8 py-2 text-primary w-min uppercase text-lg">
            {pending ? "Pridávam..." : message === 'success' ? "Pridané!" : "Pridať"}
        </button>
    );
}