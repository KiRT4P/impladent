'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { IconMenu2, IconX } from '@tabler/icons-react'
import { useState } from 'react';

export default function NavLinks() {

    const path = usePathname()
    const [showNavbar, setShowNavbar] = useState(false)
    return (
        <div className='max-w-[1600px] flex w-full px-4  md:px-28 justify-between items-center h-24 mx-auto'>
            <Link href={"/"} className="">
                <Image src="/logo_nav.png" alt="logo" width={360} height={360} className=' w-20' />
            </Link>
            {path === "/" && <div className="hidden md:flex uppercase text-lg justify-around  items-center text-gray-400 child:mx-4 child-hover:text-primary child:duration-300 child:cursor-pointer">
                <Link href="#sluzby">služby</Link>
                <Link href={"#onas"}>o nás</Link>
                <Link href={"#foto"}>foto</Link>
                <Link href={"#kontakt"}>kontakt</Link>
                <div className="text-primary border-2 py-2 px-4 border-primary rounded-full hover:bg-primary  hover:!text-white" data-open-modal>
                    <Link href={"?dialog=y"} scroll={false}> objednať sa </Link>
                </div>
            </div>}
            {path !== "/" && <div className="hidden md:flex uppercase text-lg justify-around  items-center text-gray-400 child:mx-4 child-hover:text-primary child:duration-300 child:cursor-pointer">
                <Link href="/#sluzby">služby</Link>
                <Link href={"/#onas"}>o nás</Link>
                <Link href={"/#foto"}>foto</Link>
                <Link href={"/#kontakt"}>kontakt</Link>
                <div className="text-primary border-2 py-2 px-4 border-primary rounded-full hover:bg-primary  hover:!text-white" data-open-modal>
                    <Link href={"?dialog=y"} scroll={false}> objednať sa </Link>
                </div>
            </div>}
            <div className='md:hidden' onClick={e => setShowNavbar(!showNavbar)}>
                <IconMenu2 size={40} color='#46B8BD' />
            </div>
            {
                <div className="fixed md:hidden top-0 left-0  w-screen h-screen z-50  pointer-events-none">
                    <div className={`  w-screen h-[100lvh] z-40 duration-300 ${showNavbar ? "bg-black/50 pointer-events-auto" : ""}`}>
                        <div className={`absolute  bg-white h-[100lvh] w-[75vw] min-w-max z-50 duration-300  ${showNavbar ? "right-0" : "-right-[100vw]"}`}>
                            <div className="flex flex-col  items-end child:p-8 h-full mobile-navbar" onClick={e => setShowNavbar(!showNavbar)}>
                                <div className='!pb-4 border-b  w-2/3 flex justify-end'>
                                    <IconX size={48} color='#46B8BD' />
                                </div>
                                <Link href={"/"}>Domov</Link>
                                <Link href="#sluzby">Služby</Link>
                                <Link href={"#onas"} >O nás</Link>
                                <Link href={"#foto"}>Foto</Link>
                                <Link href={"#kontakt"} >Kontakt</Link>
                                <div className="text-primary border-2 m-4 uppercase !py-3 px-6 border-primary rounded-full hover:bg-primary  hover:!text-white" data-open-modal>
                                    <Link href={"?dialog=y"} scroll={false}> objednať sa </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}