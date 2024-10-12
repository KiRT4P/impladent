import Link from "next/link"
import Image from "next/image"

export default function UserMonth({ data }) {

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

    const thisMonth = data[0]
    return (
        <div className=" mb-16 relative">
            <div className="hidden md:block absolute size-52 rounded-full blur-3xl -z-50 top-32 -right-5 bg-primary/50"></div>
            <div className="hidden md:block absolute size-52 rounded-full blur-3xl -z-50 bottom-0 -left-5 bg-primary/50"></div>
            <h1 className="text-primary font-bold text-5xl mb-8">Prípad mesiaca</h1>
            <div className="hidden md:flex justify-between items-center">
                <div className="text-customGray">
                    <p>Každý mesiac uverejňujeme zaujímavé prípady z našej praxe.</p>
                    <p>Niekedy je lepšie vidieť čo robíme.</p>
                </div>
                <Link href={"/monthly"} className="hover:text-white hover:bg-primary duration-200 uppercase text-lg text-primary p-2 border-2 border-primary rounded-lg" >
                    Všetky prípady
                </Link>
            </div>
            <div className="md:flex justify-between mt-4">
                <Link href={"/monthly/" + thisMonth.id} className="md:w-[49%] relative flex flex-col justify-end rounded-lg overflow-hidden h-72">
                    <div className="-z-50 rounded-lg absolute h-full w-full bg-black">
                        <Image src={'http://localhost:6969/' + thisMonth.images[0]} alt="Cover" sizes="50vw" fill className="object-cover opacity-70" />
                    </div>
                    <div className="z-40 text-white p-8">
                        <h1 className="font-bold">Prípad mesiaca {months[thisMonth.month]}</h1>
                        <h2 className="text-2xl font-bold">{thisMonth.title}</h2>
                    </div>
                </Link>
                <div className="md:w-[49%] mt-4 md:mt-0">
                    {data.filter((_, i) => i > 0).map((c) => (
                        <Link key={c.id} href={"/monthly/" + c.id} className="flex mb-4 md:mb-2  w-full items-center" >
                            <div className='aspect-[3/4] w-1/3 md:w-[20%] overflow-hidden relative size-24 bg-slate-100 rounded-xl'>
                                <Image src={'http://localhost:6969/' + c.images[0]} sizes='20vw' quality={100} alt={c.title} fill className='object-cover' />
                            </div>
                            <div className='grow pl-5 w-[80%]'>
                                <h1 className='text-primary font-bold text-xl'>Prípad mesiaca {months[c.month]}</h1>
                                <h2 className='text-customGray line-clamp-3'>{c.text}</h2>
                            </div>

                        </Link>
                    ))}
                </div>
                <div className="md:hidden mt-8 w-full flex justify-center">
                    <Link href={"/monthly"} className=" hover:text-white hover:bg-primary duration-200 uppercase text-lg text-primary p-2 border-2 border-primary rounded-lg" >
                        Všetky prípady
                    </Link>
                </div>

            </div>
        </div>
    )
}

