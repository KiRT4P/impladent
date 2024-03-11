"use client"

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';


import g1 from "@/public/galery/gal_1.png"
import g2 from "@/public/galery/gal_2.png"
import g3 from "@/public/galery/gal_3.png"
import g4 from "@/public/galery/gal_4.png"
import g5 from "@/public/galery/gal_5.png"
import Image from 'next/image';


export default function Gallery() {
    const gal = [g1, g2, g3, g4, g5]
    const pathname = usePathname()
    const query = useSearchParams()
    const router = useRouter()
    const removeQueryParam = () => {
        const params = new URLSearchParams(query);
        params.delete("gallery");
        let dest = pathname + "?" + params.toString();
        router.replace(
            dest,
            { scroll: false },
            { shallow: true }
        );
    };

    const swapParam = (num) => {
        if (num > 5) num = 1;
        if (num < 1) num = 5;
        const params = new URLSearchParams(query);
        params.delete("gallery");
        params.append("gallery", num);
        let dest = pathname + "?" + params.toString();
        router.replace(
            dest,
            { scroll: false },
            { shallow: true }
        );
    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center w-screen !max-w-[100vw]">
            <div onClick={removeQueryParam} className="absolute left-0 top-0 w-screen h-screen z-10" ></div>
            <div className='z-40 rounded-3xl flex items-center justify-around w-3/4 select-none pointer-events-none'>
                <div className='cursor-pointer p-16 !pointer-events-auto'>
                    <IconChevronLeft size={"4rem"} color='#fff' onClick={() => swapParam(parseInt(query.get('gallery')) - 1)} />
                </div>
                <div className='w-2/3 '>
                    <Image src={gal[query.get('gallery') - 1]} alt="gallery" className=' mx-auto' />
                </div>
                <div className='cursor-pointer p-16 !pointer-events-auto'>
                    <IconChevronRight size={"4rem"} color='#fff' onClick={() => swapParam(parseInt(query.get('gallery')) + 1)} />
                </div>
            </div>
        </div>
    )
}