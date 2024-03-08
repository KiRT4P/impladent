import Image from "next/image";
import { IconStar } from "@tabler/icons-react";
export default function Review({ data }) {
    return (
        <div className="bg-white p-8 flex rounded-lg w-[45%] py-12">
            <div className="pr-8">
                <Image src={data.photo} className="rounded-full w-60" alt="user image" />
            </div>
            <div className=" ">
                <h3 className="text-2xl font-bold">{data.name}</h3>
                <div className="pb-6 pt-2 flex child:mr-1">
                    {[...Array(data.rating)].map((e, i) => (
                        <IconStar key={i} fill="#f2c769" color="#f2c769" className="" />
                    ))}

                </div>
                <p className="text-[#a8aebe]">{data.text}</p>
            </div>
        </div>
    )
}