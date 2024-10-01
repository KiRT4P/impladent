'use client'

import { sendEmail } from "./actions"
import Submit from "./Submit"
import { useRef, useEffect } from 'react'
import { useFormState } from 'react-dom'

export default function ContactForm({ city }) {
    'use client'
    const [state, formAction] = useFormState(sendEmail.bind(null, city), {
        message: "",
        error: undefined,
        values: {
            email: "",
            text: "",
        }
    })

    const formRef = useRef(null)

    useEffect(() => {
        console.log(state);

        if (state?.message === 'success') {
            formRef.current?.reset()
        } else if (state?.message === 'error') {
            alert(state.error)
        }

    }, [state])


    return (
        <div className="relative h-52">
            <div className="absolute flex justify-center  w-full">
                <form ref={formRef} action={formAction} className="bg-white shadow-xl md:w-[70%] rounded-xl p-4 md:p-8 mx-4 md:mx-0">
                    <h1 className="text-primary font-semibold text-2xl pb-8 ">Zanechajte nám správu</h1>
                    <input name="email" type="email" placeholder="Email" className=" outline outline-1 outline-gray-200 rounded-lg text-base p-3 pl-4 w-full mb-5 placeholder-gray-300" />
                    <textarea name="text" type="text" placeholder="Správa" className=" resize-none outline outline-1 outline-gray-200 rounded-lg pl-4 text-base p-3 w-full mb-5 h-48 min-h-[5rem] placeholder-gray-300"></textarea>


                    <Submit message={state.message} />
                </form>

            </div>
        </div>
    )
}