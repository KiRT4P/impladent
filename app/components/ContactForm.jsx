"use client"

import { sendEmail } from "./actions"
import Submit from "./Submit"
import { useFormState } from 'react'

export default function ContactForm({ city }) {

    const [state, formAction] = useFormState(sendEmail, {})

    return (
        <div className="relative h-52">
            <div className="absolute flex justify-center  w-full">
                <form action={formAction} className="bg-white shadow-xl md:w-[70%] rounded-xl p-4 md:p-8 mx-4 md:mx-0">
                    <h1 className="text-primary font-semibold text-2xl pb-8 ">Zanechajte nám správu</h1>
                    <input name="email" type="email" placeholder="Email" className=" outline outline-1 outline-gray-200 rounded-lg text-base p-3 pl-4 w-full mb-5 placeholder-gray-300" />
                    <textarea name="text" type="text" placeholder="Správa" className=" resize-none outline outline-1 outline-gray-200 rounded-lg pl-4 text-base p-3 w-full mb-5 h-48 min-h-[5rem] placeholder-gray-300"></textarea>


                    <Submit />
                </form>

            </div>
        </div>
    )
}