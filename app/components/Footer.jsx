import Image from 'next/image'
import fb from '../../public/fb_logo.png'
import ig from '../../public/ig_logo.png'
import navLogo from '../../public/logo_nav.png'

export default function Footer() {
    return (
        <div className=" bg-[#F2F6FC]  -z-50   !max-w-[100vw] flex justify-between py-16 px-28 mx-auto ">
            <div>
                <Image src={navLogo} alt="impladent logo" />
                <p className="text-gray-400 text-sm py-12 w-2/3">
                    Neváhajte nás kontaktovať
                    cez naše sociálne siete
                </p>
                <div className="flex child:mr-8 ">
                    <a href="https://www.facebook.com/impladentkosice" target="_blank">
                        <Image src={fb} className="" alt="fb logo" />
                    </a>
                    <a href="https://www.instagram.com/impladent_kosice/" target="_blank">
                        <Image src={ig} className="" alt="ig logo" />
                    </a>
                </div>
            </div>
            <div >
                <h3 className="text-primary font-bold text-lg mb-3">Kontakt</h3>
                <div className="text-gray-400 text-xs md:text-base whitespace-nowrap [&>*]:py-1">
                    <p>+421 55 632 53 61</p>
                    <p>+421 918 973 835</p>
                    <p>+421 907 971 453</p>
                    <p className="mt-3">Baštová 6</p>
                    <p>040 01 Košice</p>
                </div>
            </div>

        </div>
    )
}