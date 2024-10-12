'use client'


import { IconPhone, IconClock, IconMapPin } from '@tabler/icons-react'
import Image from 'next/image'
import vstup from '../../public/dom-min 1.png'
import ContactForm from './ContactForm'
import { useEffect, useState } from 'react'

export default function Contact() {
    const [city, setCity] = useState('ke')

    const [phone, setPhone] = useState(["+421 55 632 53 61", "+421 918 973 835", "+421 907 971 453"])
    const [address, setAddress] = useState(["Baštová 6", "040 01 Košice"])
    const [gmap, setGMap] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.0261385117756!2d21.250575777483526!3d48.72409221014662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee0669717b379%3A0xeacd045b5b03d122!2zQmHFoXRvdsOhIDUyMS82LCAwNDAgMDEgS2_FoWljZQ!5e0!3m2!1sen!2ssk!4v1688142599048!5m2!1sen!2ssk")

    useEffect(() => {
        if (city === 'ke') {
            setPhone(["+421 55 632 5361", "+421 918 973 835", "+421 907 971 453", "kosice@impladent.sk"])
            setAddress(["Baštová 6", "040 01 Košice"])
            setGMap("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.0261385117756!2d21.250575777483526!3d48.72409221014662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee0669717b379%3A0xeacd045b5b03d122!2zQmHFoXRvdsOhIDUyMS82LCAwNDAgMDEgS2_FoWljZQ!5e0!3m2!1sen!2ssk!4v1688142599048!5m2!1sen!2ssk")
        } else {
            setPhone(["+421 56 644 2929", "michalovce@impladent.sk"])
            setAddress(["Martina Rázusa 1", "071 01 Michalovce"])
            setGMap("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.576315543422!2d21.90818676567585!3d48.753188697766475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47393240936123cb%3A0x35d1d5aa483c8d34!2sMartina%20R%C3%A1zusa%201849%2F1%2C%20071%2001%20Michalovce!5e0!3m2!1sen!2ssk!4v1727703851859!5m2!1sen!2ssk")
        }
    }, [city])

    return (
        <div>
            <h1 className="text-primary text-5xl font-bold text-center">Kontakt</h1>
            <div className='flex flex-col md:flex-row justify-center items-center my-8'>
                <h1 onClick={e => setCity('ke')} className={`w-[50%] text-center md:text-right text-4xl md:text-5xl font-bold  cursor-pointer ${city === 'ke' ? "text-primary" : "text-gray-300"}`}>Košice</h1>
                <div className='hidden md:block w-[2px] h-8 bg-gray-300 mx-4 md:mx-12'></div>
                <div className=' md:hidden h-[2px] w-8 my-3 bg-gray-300 mx-4 md:mx-12'></div>
                <h1 onClick={e => setCity('mi')} className={`w-[50%] text-4xl md:text-5xl font-bold cursor-pointer ${city === 'mi' ? " text-primary " : "text-gray-300"}`}>Michalovce</h1>
            </div>

            <div className="bg-primary rounded-xl my-36">
                <div className="md:flex justify-around mt-12 relative -top-24 child:my-8 child:mx-4 md:child:mb-0 md:child:mx-0">
                    <div className="flex bg-white rounded-xl shadow-lg p-6  md:w-1/4 ">
                        <div className="pr-2">
                            <IconPhone fill="#46B8BD" color="#fff" size={"40px"} />

                        </div>
                        <div className="">
                            <p className="font-bold text-2xl text-customGray py-1">Telefón / E-mail</p>
                            <div className="child:text-customGray child:py-1 pt-4">
                                {phone.map(e => (
                                    <p key={e}>{e}</p>
                                ))}
                            </div>

                        </div>
                    </div>
                    <div className="flex bg-white rounded-xl shadow-lg p-6  md:w-1/3 ">
                        <div className="pr-2">
                            <IconClock fill="#46B8BD" color="#fff" size={"40px"} />

                        </div>
                        <div className="">
                            <p className="font-bold text-2xl text-customGray py-1">Ordinačné hodiny</p>
                            <div className="child:text-customGray child:py-1 pt-4">
                                <p>8.00 - 15.00 </p>
                                <p>Pondelok - Piatok</p>
                                <p>a podľa dohody s pacientom</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex bg-white rounded-xl shadow-lg p-6  md:w-1/4">
                        <div className="pr-2">
                            <IconMapPin fill='#46B8BD' color='#fff' stroke={2} size={"40px"} />

                        </div>
                        <div className="">
                            <p className="font-bold text-2xl text-customGray py-1">Sídlo</p>
                            <div className="child:text-customGray child:py-1 pt-4">
                                <p>{address[0]}</p>
                                <p>{address[1]}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center md:justify-around items-center md:items-stretch relative -top-12">
                    <iframe
                        src={gmap}
                        loading="lazy"
                        className="md:w-2/5 rounded-2xl aspect-square w-full px-9 md:px-0 md:aspect-square "
                    >
                    </iframe>
                    {city === 'ke' && <Image src={vstup} alt="vstup do budovy" className="md:w-1/3 w-full px-9 mt-8 md:p-0 md:m-0" />}
                </div>
                <ContactForm city={city} />
            </div>
        </div>
    )
}