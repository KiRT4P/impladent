
import { IconInfoCircle } from '@tabler/icons-react';

export default function page() {

    return (
        <div className="p-16 px-24 w-full">
            <div className="w-full  flex ">
                <div className="bg-primary rounded-3xl py-2 px-4 flex text-white w-full">
                    <h1 className="text-white font-bold">Aktuálny banner:</h1>
                    <p className="pl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quia.</p>
                </div>
                <div className="border-primary border-2 rounded-full py-2 px-6 ml-8 flex text-primary w-max cursor-pointer">
                    Vymazať
                </div>
            </div>
            <div className="mt-20 shadow rounded-2xl p-16">
                <div className='flex'>
                    <IconInfoCircle size={32} color="#46B8BD" />
                    <h1 className="font-semibold text-3xl text-primary pl-4">Banner </h1>
                </div>
                <div className="mt-4">
                    <input
                        type="text"
                        placeholder="Text oznamu"
                        className="outline outline-1 outline-gray-300 rounded-lg text-base p-6 pl-4 w-full my-8 placeholder-gray-300"
                    />
                    <div className="border-2 border-primary text-primary py-3 px-10 rounded-full text-lg ml-auto w-max cursor-pointer">Pridať</div>
                </div>
            </div>
            <div className='flex pt-8 pl-4'>
                <IconInfoCircle size={24} color="#d1d5db" />
                <p className='text-gray-400 pl-4'>Banner slúži na príležitostné oznamy, ktoré je možné ľubovoľne nastavovať. Banner sa zobrazí navrchu vždy pri otvorení stránky.</p>
            </div>
        </div>
    )
}