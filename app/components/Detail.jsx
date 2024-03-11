'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { IconX } from '@tabler/icons-react';

export default function Detail() {
    const pathname = usePathname()
    const query = useSearchParams()
    const router = useRouter()
    const removeQueryParam = () => {
        const params = new URLSearchParams(query);
        params.delete("detail");
        let dest = pathname + "?" + params.toString();
        router.replace(
            dest,
            { scroll: false },
            { shallow: true }
        );
    };

    const swapParam = () => {
        const params = new URLSearchParams(query);
        params.delete("detail");
        params.append("dialog", "y");
        let dest = pathname + "?" + params.toString();
        router.push(
            dest,
            { scroll: false },
            { shallow: true }
        );
    }

    let list = []

    console.log(query.get('detail'));
    switch (query.get('detail')) {
        case "Preventívna starostlivosť":
            list = ["Pravidelné prehliadky a čistenie zubov", "Röntgenové snímky", "Aplikácia fluoridu", "Ošetrenie zubného kazu", "Bielenie zubov"]
            break;
        case "Reštaurátorská starostlivosť":
            list = ["Plomby", "Koronky a mostíky", "Inlay a onlay", "Zubné implantáty", "Ortodoncia(rovnátka) "]
            break;
        case "Chirurgická starostlivosť":
            list = ["Ťahanie zubov", "Odstránenie zubov múdrosti", "Zákroky na kostiach a ďasnách", "Implantáty"]
            break
        case "Ďalšie služby":
            list = ["Dentálna hygiena", "Estetická stomatológia", "Detská stomatológia", "Geriatrická stomatológia"]
        default:
            break;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center w-screen !max-w-[100vw]">
            <div onClick={removeQueryParam} className="absolute left-0 top-0 w-screen h-screen z-10" ></div>
            <div className='  bg-white z-40 rounded-3xl  p-16 relative w-1/3'>
                <div className='absolute right-7 top-7 cursor-pointer' onClick={removeQueryParam}><IconX size={"2rem"} color='#46B8Bd' /></div>
                <h1 className='font-semibold text-4xl text-primary pb-8'>{query.get('detail')}</h1>
                <div>
                    {list.map((item, index) => (
                        <li key={index} className="text-gray-300 list-disc py-2 text-xl">{item}</li>
                    ))}
                </div>
                <div onClick={swapParam} className="text-lg rounded-full border-2 border-primary cursor-pointer text-primary px-8 py-2 w-max uppercase ml-auto hover:bg-primary hover:text-white duration-300 ">Objednať sa</div>
            </div>
        </div>
    )
}