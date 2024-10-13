'use client'

import Image from "next/image";
import { useState, useRef } from "react";





export default function Gallery({ images }) {

    const [selected, setSelected] = useState(0);

    const divRef = useRef();
    const handleClick = (i) => {
        setSelected(i);
        const { current } = divRef

        if (current !== null) {
            current.children[i].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" },)
        }
    }

    return (
        <div className="md:w-[45%] w-full  md:ml-8 ">
            <div className=" relative w-full aspect-video  overflow-hidden rounded-xl ">
                <Image src={process.env.NEXT_PUBLIC_IMAGE_DOMAIN + '/' + images[selected]} alt={"ERROR"} fill className="bg-slate-200 object-cover" />
            </div>
            <div ref={divRef} className="custom-scroll flex overflow-x-scroll w-full mt-4">
                {images.map((e, i) => (
                    <div onClick={e => handleClick(i)} key={i} className={`cursor-pointer relative h-[8vh] md:h-[12vh] mr-4 aspect-video rounded-xl ${selected === i ? `outline outline-4 outline-primary outline-offset-2 ${i === 0 ? " ml-2 " : ""}   ` : " "}`}>
                        <Image src={process.env.NEXT_PUBLIC_IMAGE_DOMAIN + '/' + e} alt={"ERROR"} fill className={`bg-slate-200 object-cover rounded-xl `} />
                    </div>

                ))}
            </div>

        </div>
    )
}