import { IconTool } from '@tabler/icons-react';
import Image from 'next/image';

export default function CoM({ cases }) {

    const months = {
        jan: 'Január',
        feb: 'Február',
        mar: 'Marec',
        apr: 'Apríl',
        may: 'Máj',
        jun: 'Jún',
        jul: 'Júl',
        aug: 'August',
        sep: 'September',
        oct: 'Október',
        nov: 'November',
        dec: 'December'
    }

    return (
        <div className="rounded-3xl shadow-2xl p-8 w-[45%] mx-8">
            <div className="flex items-center">
                <IconTool size={32} color="#46B8BD" />
                <h1 className="font-semibold text-2xl text-primary pl-4">
                    Staršie prípady mesiaca
                </h1>
            </div>
            <div className='mt-8'>
                {cases.map((c) => (
                    <div key={c.id} className='flex justify-between items-center my-4'>
                        <div className='aspect-square overflow-hidden relative size-24 bg-red-300 rounded-xl'>
                            <Image src={'http://localhost:6969/' + c.images[0]} quality={100} alt={c.title} fill className='object-cover' />
                        </div>
                        <div className='grow px-8'>
                            <h1 className='text-primary font-bold text-xl'>{months[c.month]} {c.year}</h1>
                            <h2 className='text-customGray'>{c.title}</h2>
                        </div>
                        <div className='cursor-pointer'>
                            <IconTool size={32} color="#E3E6F0" />
                        </div>
                    </div>
                ))}
            </div>

        </div>

    )
}
