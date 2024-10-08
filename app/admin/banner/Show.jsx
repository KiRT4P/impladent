'use client'

import { useState } from "react"

export default function Show({ value, display, handleDisplay }) {

    const [isPending, setIsPending] = useState(false)


    const handle = async (e) => {
        e.preventDefault()
        setIsPending(true)
        await handleDisplay()
        location.reload()
    }

    return (
        <div className="w-full  flex ">
            <div className={` rounded-3xl  items-center py-2 px-4 flex text-white w-full ${display ? 'bg-primary' : 'bg-gray-400'}`}>
                <h1 className="text-white font-bold">Banner:</h1>
                <p className="pl-4">{value}</p>
            </div>
            <form onSubmit={handle} className="border-primary border-2 rounded-full py-2 px-6 ml-8 flex text-primary w-max cursor-pointer">
                <button className="w-20" disabled={isPending}>{isPending ? "Ukladám..." : (display ? 'Skryť' : 'Zobrazovať')}</button>
            </form>
        </div>

    )
}