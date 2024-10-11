import NavLinks from "./NavLinks"
import connection from "@/app/api/DBconnection.js";
import { cookies } from "next/headers";


const getSettings = async () => {
    let [data] = await connection.execute('SELECT * FROM banner')
    let obj = {}

    if (data[0].display === 1) {
        obj.display = true
    } else {
        obj.display = false
    }
    obj.content = data[0].content
    return obj
}

export async function closeOffer() {
    'use server'
    const cookieStore = cookies();
    const currentDate = new Date();
    const twoDays = currentDate.getTime() + 48 * 60 * 60 * 1000;
    cookieStore.set('closedOffer', 1, { expires: twoDays });
}


export default async function Navbar() {
    const cookieStore = cookies();
    const exists = cookieStore.has('closedOffer')
    const data = await getSettings()


    return (
        <div className={`flex justify-center  w-full z-50 ${(!exists && data.display) ? "h-32" : "h-24 "}`}>
            <nav className={`w-full fixed backdrop-blur-xl bg-white/85 z-40 ${(!exists && data.display) ? " h-32" : "h-24 "}`} >
                {(!exists && data.display) &&
                    <form action={closeOffer} className='bg-primary py-2 text-white text-center flex justify-between px-4 md:px-16'>
                        <div></div>
                        <div className="text-white text-lg">{data.content} </div>

                        <button className="font-bold text-xl">X</button>
                    </form>
                }
                <NavLinks />
            </nav >
        </div >
    )
} 