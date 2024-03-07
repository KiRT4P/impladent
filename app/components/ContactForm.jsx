"use client"

export default function ContactForm() {
    return (
        <div className="relative h-52">
            <div className="absolute flex justify-center  w-full">
                <div className="bg-white shadow-xl w-[70%] rounded-xl p-8">
                    <h1 className="text-primary font-semibold text-2xl pb-8 ">Zanechajte nám správu</h1>
                    < input type="text" placeholder="Meno" className=" outline outline-1 outline-gray-200 rounded-lg text-base p-3 pl-4 w-full mb-5 placeholder-gray-300" />
                    <input type="email" placeholder="Email" className=" outline outline-1 outline-gray-200 rounded-lg text-base p-3 pl-4 w-full mb-5 placeholder-gray-300" />
                    <textarea type="text" placeholder="Správa" className=" resize-none outline outline-1 outline-gray-200 rounded-lg pl-4 text-base p-3 w-full mb-5 h-48 min-h-[5rem] placeholder-gray-300"></textarea>
                    <div className="border-2 border-primary rounded-3xl float-right hover:bg-primary hover:text-white duration-300 cursor-pointer px-8 py-2 text-primary w-min uppercase text-lg">Odoslať</div>

                </div>

            </div>
        </div>
    )
}