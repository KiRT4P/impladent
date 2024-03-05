import Image from 'next/image'

export default function Tooth({ src, alt, t1, t2 }) {
    return (
        <div className="shadow-lg rounded-xl text-center py-16 px-4 h-[350px]">
            <div className='h-1/2'>
                <Image src={src} alt={alt} className="  mx-auto h-18 w-auto" />
            </div>
            <h3 className="my-4 font-bold text-xl text-customGray">Stomatológia</h3>
            <p className="text-customGray w-3/4 mx-auto">Profesionálna starostlivosť o zuby</p>
        </div>
    )
}