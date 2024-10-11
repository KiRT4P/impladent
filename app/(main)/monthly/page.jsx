import Image from "next/image";
import Link from "next/link";

import connection from "@/app/api/DBconnection.js";
import { redirect } from "next/navigation";

import Dialog from "@/app/components/Dialog";

const getData = async () => {
    const [data] = await connection.query("SELECT * FROM monthly ORDER BY sorting DESC");
    data.forEach(e => {
        e.images = JSON.parse(e.images);
    });
    return data;
}


export default async function MonthlyPage({ searchParams }) {


    const data = await getData();
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

    const maxPages = Math.ceil(data.length / 8)
    let arr = []
    for (let i = 0; i < maxPages; i++) {
        arr.push(i + 1)
    }

    if (searchParams.page > maxPages) {
        redirect("/monthly?page=1")
    }

    let current = searchParams.page ? +searchParams.page : 1





    return (
        <main className="w-full   ">
            {searchParams.dialog && <Dialog />}

            <div className=" mb-16 relative">
                <h1 className="text-primary font-bold text-5xl mb-8">Archív prípadov mesiaca</h1>

                <div className=" mt-4 columns-2">
                    {data.map((c, i) => (
                        <Link key={c.id} href={"/monthly/" + c.id} className={`flex mb-4   items-center ${i === 4 ? " break-before-column " : ""}`} >
                            <div className='aspect-[3/4] w-[20%] overflow-hidden relative size-24 bg-slate-100 rounded-xl'>
                                <Image src={'http://localhost:6969/' + c.images[0]} sizes='20vw' quality={100} alt={c.title} fill className='object-cover' />
                            </div>
                            <div className=' flex justify-between flex-col h-full pl-5 w-[80%]'>
                                <h1 className='text-primary font-bold text-xl'>Prípad mesiaca {months[c.month]}</h1>
                                <h2 className='text-customGray line-clamp-3 h-[72px] '>{c.text}</h2>
                            </div>

                        </Link>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    {arr.map((e, i) => (
                        <Link href={"/monthly?page=" + e} key={i} className={`text-primary mx-2 cursor-pointer hover:bg-primary hover:text-white border-2 size-12 border-primary rounded-lg flex items-center justify-center ${current === e ? " bg-primary text-white" : " text-primary "}`}>
                            {e}
                        </Link>
                    ))}
                </div>

            </div>

        </main>
    );
}
