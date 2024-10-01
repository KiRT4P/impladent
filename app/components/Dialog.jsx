'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { IconMail, IconPhone, IconX } from '@tabler/icons-react';
import { useState } from 'react';
export default function Dialog() {

    const pathname = usePathname()
    const query = useSearchParams()
    const router = useRouter()
    const removeQueryParam = () => {
        const params = new URLSearchParams(query);
        params.delete("dialog");
        let dest = pathname + "?" + params.toString();
        router.replace(
            dest,
            { scroll: false },
            { shallow: true }
        );
    };

    const [city, setCity] = useState('ke')

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center w-screen !max-w-[100vw]">
            <div onClick={removeQueryParam} className="absolute left-0 top-0 w-screen h-screen z-10" ></div>
            <div className='  bg-white z-40 rounded-3xl flex justify-between p-8 relative'>
                <div className='absolute right-7 top-7 cursor-pointer' onClick={removeQueryParam}><IconX size={"2rem"} color='#46B8Bd' /></div>
                <div className='w-[45%] '>
                    <div className='flex items-center mb-4'>
                        <IconMail color='#FFF' fill='#46B8BD' size={"3rem"} />
                        <h1 className='font-semibold text-2xl text-primary pl-3'>Objednávka e-mailom</h1>
                    </div>
                    <div className=' rounded-lg text-base  w-full mb-5 flex justify-around'>
                        <p onClick={e => setCity('ke')} className={`w-1/2 text-center cursor-pointer  p-2 rounded-l-lg ${city === 'ke' ? " bg-primary text-white underline underline-offset-2 " : " border border-gray-300 text-gray-500 "}`}>Košice</p>
                        <p onClick={e => setCity('mi')} className={`w-1/2 text-center cursor-pointer p-2 rounded-r-lg ${city === 'mi' ? " bg-primary text-white underline underline-offset-2 " : " border border-gray-300 text-gray-500 "}`}>Michalovce</p>
                    </div>
                    <input type="email" placeholder="Email" class=" outline outline-1 outline-gray-300 rounded-lg text-base p-2 pl-4 w-full mb-5" />
                    <textarea type="text" placeholder="Správa" class=" resize-none outline outline-1 outline-gray-300 rounded-lg pl-4 text-base p-2 w-full mb-5 h-24 min-h-[12rem]"></textarea>
                    <div class="border-2 border-primary rounded-3xl float-right hover:bg-primary hover:text-white duration-300 cursor-pointer px-8 py-2 text-primary w-max uppercase text-lg mb-4">Objednať sa</div>


                </div>
                <div class="w-[45%] flex items-start">
                    <div>
                        <IconPhone color='#FFF' fill='#46B8BD' size={"3rem"} />
                    </div>
                    <div className=' pl-3 pt-2'>
                        <div class="flex mb-3  items-center">
                            <h2 class="text-primary font-semibold text-2xl">Objednávka telefónom</h2>
                        </div>
                        <p class="w-2/3 text-gray-400 ">Telefonické objednávky môžete realizovať na nasledujúcich číslach:</p>
                        <p class="w-2/3 pt-5 text-gray-400 ">Košice</p>
                        <div class="pt-2 font-semibold text-2xl text-primary  child:pb-4">
                            <p>+421 55 632 5361</p>
                            <p>+421 918 973 835</p>
                            <p>+421 907 971 453</p>
                        </div>
                        <p class="w-2/3 pt-5 text-gray-400 ">Michalovce</p>
                        <div class="pt-2 font-semibold text-2xl text-primary  child:pb-4">
                            <p>+421 56 644 2929</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}