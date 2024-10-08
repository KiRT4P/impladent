"use client"

import Link from "next/link";
import { signOut } from "next-auth/react"
import Image from "next/image"
import logo from "@/public/logo_nav.png"

export default function AdminNavbar() {

    return (
        <div className="hidden md:block w-[15vw] min-w-[300px] z-40 border-r-2 border-gray-100 h-screen">
            <div className="fixed       w-[13vw] min-w-[300px] h-[80%] flex flex-col justify-between py-2 px-8 text-gray-400  ">

                <div>
                    <Link href={"/"} className="w-full flex justify-center my-12">
                        <Image src={logo} alt="logo" width={500} height={500} className=' w-20' />
                    </Link>
                    <p className=" text-primary "><Link href="/admin" className="text-2xl font-bold"   >Admin panel</Link></p>
                    <div className="mt-3 flex flex-col justify-around child-hover:text-primary ">

                        <Link href={'/admin'} className="cursor-pointer font-semibold text-lg py-2">Prípad mesiaca</Link>
                        <Link href={'/admin/banner'} className="cursor-pointer font-semibold text-lg py-2">Banner</Link>
                    </div>
                </div>
                <button className="border-2 border-primary px-4 py-2 text-lg text-primary rounded-lg hover:text-white hover:bg-primary duration-300 w-max " onClick={() => signOut()}>Odhlásiť</button>

            </div>

        </div>
    )
}