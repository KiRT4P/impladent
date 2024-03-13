import Image from 'next/image'
import Link from 'next/link'
export default function Tooth({ src, alt, t1, t2 }) {
    return (
        <Link href={"?detail=" + t1} scroll={false} className="shadow-lg rounded-xl text-center py-8 md:py-16 px-2 md:px-4 h-[280px] md:h-[350px] w-1/5 min-w-[42vw] md:min-w-0">
            <div className='md:h-1/2 h-[45%] flex justify-center items-center'>
                <Image src={src} alt={alt} className="  mx-auto h-18 w-auto" />
            </div>
            <h3 className="my-2 md:my-4 font-bold text-xl text-customGray">{t1}</h3>
            <p className="text-customGray md:w-3/4 mx-auto">{t2}</p>
        </Link>
    )
}