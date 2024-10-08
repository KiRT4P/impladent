'use client'

import { useFormState } from "react-dom";
import { useRef, useEffect } from 'react'
import { changeValue } from "./actions"

export default function BannerForm({ value }) {
    const [state, formAction] = useFormState(changeValue, {
        message: "",
        error: undefined,
        values: {
            email: "",
            text: "",
        }
    })

    const formRef = useRef(null)

    useEffect(() => {

        if (state?.message === 'success') {
            formRef.current?.reset()
            setTimeout(() => {
                location.reload()
            }, 500);
        } else if (state?.message === 'error') {
            alert(state.error)
        }

    }, [state])
    return (
        <form action={formAction} className="mt-4">
            <input
                defaultValue={value}
                name="text"
                type="text"
                placeholder="Text oznamu"
                className="outline outline-1 outline-gray-300 rounded-lg text-base p-6 pl-4 w-full my-8 placeholder-gray-300"
            />
            <div className="flex justify-end">
                <Submit message={state.message} />
            </div>
        </form>
    )
}


import { useFormStatus } from "react-dom";

export function Submit({ message }) {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending || message === 'success'} className="border-2 border-primary text-primary py-3 px-10 rounded-full text-lg  w-max cursor-pointer">
            {pending ? "Ukladám..." : message === 'success' ? "Uložené" : "Uložiť"}
        </button>
    );
}

