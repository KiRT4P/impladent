'use client'

import { useState } from "react"

import dude1 from "@/public/customer_1.png"
import dude2 from "@/public/customer_2.png"
import dude3 from "@/public/customer_3.png"

import Image from "next/image";
import { IconStar } from "@tabler/icons-react";

export default function Reviews() {
    const [current, setCurrent] = useState(0);
    const ratings = [
        {
            name: "Ján Novák",
            rating: 5,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ullam rem nostrum aliquid molestiae quod alias natus explicabo repudiandae quaerat temporibus, qui sint at unde assumenda voluptas facere tenetur nam? ",
            photo: dude1
        }, {
            name: "Mária Novotná",
            rating: 5,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ullam rem nostrum aliquid molestiae quod alias natus explicabo repudiandae quaerat temporibus, qui sint at unde assumenda voluptas facere tenetur nam?",
            photo: dude2
        }
    ]

    return (
        <div className="flex justify-center   md:justify-between py-12 flex-wrap">
            {ratings.map((e, i) => (
                <div key={i} className="bg-white p-4 md:p-8 md:grid grid-rows-2 grid-cols-5 rounded-xl md:w-[45%] w-[90%] my-4 md:my-0  ">
                    <div className="  flex  items-center ">
                        <Image src={e.photo} className="rounded-full md:w-[80%] pr-4 md:pr-0" alt="user image" />
                        <div className=" md:hidden col-span-4 flex  flex-col justify-center">
                            <h3 className="text-2xl font-bold">{e.name}</h3>
                            <div className=" flex child:mr-1">
                                {[...Array(e.rating)].map((e, i) => (
                                    <IconStar key={i} fill="#f2c769" color="#f2c769" className="" />
                                ))}

                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex  col-span-4   flex-col justify-center">
                        <h3 className="text-2xl font-bold">{e.name}</h3>
                        <div className=" flex child:mr-1">
                            {[...Array(e.rating)].map((e, i) => (
                                <IconStar key={i} fill="#f2c769" color="#f2c769" className="" />
                            ))}

                        </div>
                    </div>
                    <div className="hidden md:block"></div>

                    <div className="col-span-4 pt-4 md:pt-0 ">

                        <p className="text-[#a8aebe]">{e.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}