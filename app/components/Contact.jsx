'use client'


import { IconPhone, IconClock } from '@tabler/icons-react'
import Image from 'next/image'
import vstup from '../../public/dom-min 1.png'
import ContactForm from './ContactForm'
import { useState } from 'react'

export default function Contact() {
    const [city, setCity] = useState(true)
    return (
        <div>
            <h1 className="text-primary text-5xl font-bold text-center">Kontakt</h1>
            <div className='flex justify-center items-center my-8'>
                <h1 onClick={e => setCity(true)} className={`text-4xl md:text-5xl font-bold text-center cursor-pointer ${city ? "text-primary" : "text-gray-300"}`}>Košice</h1>
                <div className='w-[2px] h-8 bg-gray-300 mx-4 md:mx-12'></div>
                <h1 onClick={e => setCity(false)} className={`text-4xl md:text-5xl font-bold text-center cursor-pointer ${city ? "text-gray-300 " : "text-primary"}`}>Michalovce</h1>
            </div>

            <div className="bg-primary rounded-xl my-36">
                <div className="md:flex justify-around mt-12 relative -top-24 child:my-8 child:mx-4 md:child:mb-0 md:child:mx-0">
                    <div className="flex bg-white rounded-xl shadow-lg p-6  md:w-1/4 ">
                        <div className="pr-2">
                            <IconPhone fill="#46B8BD" color="#fff" size={"40px"} />

                        </div>
                        <div className="">
                            <p className="font-bold text-2xl text-customGray py-1">Telefón</p>
                            <div className="child:text-customGray child:py-1 pt-4">
                                <p>+421 55 632 53 61 </p>
                                <p>+421 918 973 835</p>
                                <p>  +421 907 971 453</p>
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
                            <IconPhone fill="#46B8BD" color="#fff" size={"40px"} />

                        </div>
                        <div className="">
                            <p className="font-bold text-2xl text-customGray py-1">Sídlo</p>
                            <div className="child:text-customGray child:py-1 pt-4">
                                <p>Baštová 6 </p>
                                <p>040 01 Košice</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center md:justify-around items-center md:items-stretch relative -top-12">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.0261385117756!2d21.250575777483526!3d48.72409221014662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee0669717b379%3A0xeacd045b5b03d122!2zQmHFoXRvdsOhIDUyMS82LCAwNDAgMDEgS2_FoWljZQ!5e0!3m2!1sen!2ssk!4v1688142599048!5m2!1sen!2ssk"
                        loading="lazy"
                        className="md:w-2/5 rounded-2xl aspect-square w-full px-9 md:px-0 md:aspect-auto "
                    >
                    </iframe>
                    <Image src={vstup} alt="vstup do budovy" className="md:w-1/3 w-full px-9 mt-8 md:p-0 md:m-0" />
                </div>
                <ContactForm />
            </div>
        </div>
    )
}