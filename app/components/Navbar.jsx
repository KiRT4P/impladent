"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
export default function Navbar() {
    const path = usePathname()
    return (
        <div className='flex justify-center h-24 w-full'>
            <nav className=" w-full h-24 fixed bg-white z-40" >
                <div className='max-w-[1600px] flex w-full  px-28 justify-between items-center h-24 mx-auto'>
                    <div className="">
                        <Image src="/logo_nav.png" alt="logo" width={360} height={360} className=' w-20' />
                    </div>
                    {path === "/" && <div className=" uppercase text-lg flex justify-around  items-center text-gray-400 child:mx-4 [&>p:hover]:text-primary child:duration-300 child:cursor-pointer">
                        <Link href="#sluzby">služby</Link>
                        <Link href={"#onas"}>o nás</Link>
                        <Link href={"#foto"}>foto</Link>
                        <Link href={"#kontakt"}>kontakt</Link>
                        <div className="text-primary border-2 py-2 px-4 border-primary rounded-full hover:bg-primary  hover:text-white" data-open-modal>
                            <Link href={"?dialog=y"} scroll={false}> objednať sa </Link>
                        </div>
                    </div>}
                    {path !== "/" && <div className=" uppercase text-lg flex justify-around  items-center text-gray-400 child:mx-4 [&>p:hover]:text-primary child:duration-300 child:cursor-pointer">
                        <Link href="/#sluzby">služby</Link>
                        <Link href={"/#onas"}>o nás</Link>
                        <Link href={"/#foto"}>foto</Link>
                        <Link href={"/#kontakt"}>kontakt</Link>
                        <div className="text-primary border-2 py-2 px-4 border-primary rounded-full hover:bg-primary  hover:text-white" data-open-modal>
                            <Link href={"?dialog=y"} scroll={false}> objednať sa </Link>
                        </div>
                    </div>}
                </div>

            </nav>
        </div>
    )
}