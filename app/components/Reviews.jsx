'use client'

import { useState } from "react"

import dude1 from "@/public/customer_1.png"
import dude2 from "@/public/customer_2.png"
import dude3 from "@/public/customer_3.png"

import Review from "./Review"
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
        },
        // {
        //     name: "Filip Bacskai",
        //     rating: 5,
        //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ullam rem nostrum aliquid molestiae quod alias natus explicabo repudiandae quaerat temporibus, qui sint at unde assumenda voluptas facere tenetur nam?",
        //     photo: dude3
        // },
    ]

    return (
        <div className="flex justify-between py-12">
            {ratings.map((e, i) => (
                <Review key={i} data={e} />
            ))}
        </div>
    )
}