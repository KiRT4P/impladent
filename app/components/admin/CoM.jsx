import { IconTool } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CoM({ cases, selected }) {

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
        <div className="rounded-3xl shadow-2xl p-8 w-[45%] mx-4">
            <div className="flex items-center">
                <IconTool size={32} color="#46B8BD" />
                <h1 className="font-semibold text-2xl text-primary pl-4">
                    Staršie prípady mesiaca
                </h1>
            </div>
            <div className='mt-8'>
                {cases.map((c) => (
                    <div key={c.id} className={`flex justify-between items-center my-4 rounded-xl ${selected === c.id ? " bg-gradient-to-r from-primary/20  to-transparent " : " "}`}>
                        <div className='aspect-square overflow-hidden relative size-24 bg-slate-100 rounded-xl'>
                            <Image src={'http://localhost:6969/' + c.images[0]} sizes='200px' quality={100} alt={c.title} fill className='object-cover' />
                        </div>
                        <div className='grow px-8'>
                            <h1 className='text-primary font-bold text-xl'>{months[c.month]} {c.year}</h1>
                            <h2 className='text-customGray'>{c.title}</h2>
                        </div>
                        <Link href={`/admin?edit=${c.id}`} className='cursor-pointer'>
                            <IconTool size={32} color="#E3E6F0" />
                        </Link>
                    </div>
                ))}
            </div>

        </div>

    )
}
