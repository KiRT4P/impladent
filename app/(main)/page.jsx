import Image from "next/image";
import Tooth from "../components/Tooth";

import woman from '@/public/woman_doctor.png'
import zub_1 from '@/public/zub_1.png'
import zub_2 from '@/public/zub_2.png'
import zub_3 from '@/public/zub_3.png'
import zub_4 from '@/public/zub_4.png'
import onas1 from '@/public/top_left.png'
import onas2 from '@/public/right.png'
import onas3 from '@/public/bottom_left.png'


import g1 from "@/public/galery/gal_1.png"
import g2 from "@/public/galery/gal_2.png"
import g3 from "@/public/galery/gal_3.png"
import g4 from "@/public/galery/gal_4.png"
import g5 from "@/public/galery/gal_5.png"

import Reviews from "../components/Reviews";


import Link from "next/link";
import Dialog from "../components/Dialog";
import Detail from "../components/Detail";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";


export default function Home({ searchParams }) {
  const gal = [g1, g2, g3, g4, g5]
  const qna = [
    {
      q: "Lorem ipsum dolor sit",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio labore culpa dolore architecto repellendus quis cupiditate aperiam. Quia delectus porro labore quaerat deleniti deserunt hic, beatae rerum perferendis. Ut veniam inventore labore? Eveniet, quasi similique."
    },
    {
      q: "Lorem ipsum dolor sit",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio labore culpa dolore architecto repellendus quis cupiditate aperiam. Quia delectus porro labore quaerat deleniti deserunt hic, beatae rerum perferendis. Ut veniam inventore labore? Eveniet, quasi similique."
    },
    {
      q: "Lorem ipsum dolor sit",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio labore culpa dolore architecto repellendus quis cupiditate aperiam. Quia delectus porro labore quaerat deleniti deserunt hic, beatae rerum perferendis. Ut veniam inventore labore? Eveniet, quasi similique."
    },
    {
      q: "Lorem ipsum dolor sit",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio labore culpa dolore architecto repellendus quis cupiditate aperiam. Quia delectus porro labore quaerat deleniti deserunt hic, beatae rerum perferendis. Ut veniam inventore labore? Eveniet, quasi similique."
    },
  ]

  return (
    <main className="w-full  ">
      {searchParams.dialog && <Dialog />}
      {searchParams.detail && <Detail />}
      {searchParams.gallery && <Gallery />}
      <div className="flex justify-between items-center">
        <div className="w-2/3 child:my-8">
          <h1 className="text-6xl text-primary font-extrabold w-2/3">Starostlivosť, akú si Vaše zuby zaslúžia.</h1>
          <h2 className="text-customGray w-2/3">Garantujeme vám profesionálny prístup a kvalitne odvedenú prácu. V moderne vybavenom centre sa budete cítiť príjemne.</h2>

          <div className="flex shadow-lg w-[90%] py-5 px-12 justify-between items-center rounded-xl">
            <div className="">
              <h2 className="text-2xl text-primary">Rezervujte si termín</h2>
              <h3 className="text-customGray">Dohodnite si konzultáciu alebo sa objednajte na vyšetrenie.</h3>
            </div>
            <div>
              <Link href={"?dialog=y"} scroll={false} className="text-lg uppercase text-primary border-2 border-primary px-4 py-2 rounded-lg hover:text-white hover:bg-primary duration-300">
                Rezervovať
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <Image src={woman} alt="logo" className="  mx-auto" />
        </div>
      </div>
      <div id="sluzby" className="mt-20 scroll-mt-40">
        <h2 className="text-5xl text-primary font-bold text-center ">Naše služby</h2>
        <div className="flex justify-between items-center mt-12">
          <Tooth src={zub_1} alt="logo" t1="Preventívna starostlivosť" t2="Profesionálna starostlivosť o zuby" />

          <Tooth src={zub_2} alt="logo" t1="Reštaurátorská starostlivosť" t2="Dokonalé zhotovenie implantátov." />

          <Tooth src={zub_3} alt="logo" t1="Chirurgická starostlivosť" t2="Stomatochirurgické výkony aj v celkovej narkóze." />

          <Tooth src={zub_4} alt="logo" t1="Ďalšie služby" t2="Kompletná zubná hygiena pre dokonalý úsmev." />

        </div>

      </div>
      <div id="onas" className="mt-20  custom-bg mask-1 !max-w-[100vw] scroll-mt-40">
        <div className="max-w-[1600px]  mx-auto py-24">
          <div className="flex">
            <div className=" flex w-[60%] items-center ">
              <div className="">
                <Image src={onas1} alt="fotka 1" />
                <Image src={onas3} alt="fotka 2" className="mt-4 mr-4" />
              </div>
              <div>
                <Image src={onas2} alt="fotka 3" />
              </div>

            </div>
            <div className="w-[40%] child:text-white flex flex-col justify-between py-12 ">
              <h2 className="uppercase text-xl">O nás</h2>
              <h1 className="font-bold text-4xl">15 rokov skúseností v poskytovaní dentálnej starostlivosti</h1>
              <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <Link href={"/o-nas"} className="text-lg rounded-full border-2 border-white px-8 py-2 w-max uppercase font-light hover:bg-white hover:text-primary duration-300">Zisti viac!</Link>
            </div>
          </div>
        </div>



      </div>

      <div className="pt-40 bg-[#F2F6FC] relative -top-20 -z-50   !max-w-[100vw]">
        <h1 className="text-primary text-5xl font-bold text-center">Čo o nás povedali pacienti</h1>
        <div>
          <Reviews />
        </div>

      </div>



      <div id="foto" className="scroll-mt-40">
        <h1 className="text-primary text-5xl font-bold text-center">Fotogaléria</h1>
        <div className="flex justify-between my-20">
          {gal.map((e, i) => (
            <Link href={"?gallery=" + (i + 1)} scroll={false} key={i} className="w-1/6">
              <Image src={e} alt="logo" className="aspect-square object-cover rounded-xl hover:scale-110 duration-300 cursor-pointer" />
            </Link>
          ))}
        </div>
      </div>


      <div id="kontakt" className="scroll-mt-40">
        <Contact />

      </div>

      <div className="custom-bg mask-2 mt-96 !max-w-[100vw]">
        <div className="max-w-[1600px]  mx-auto py-24 text-white">
          <h1 className="text-center font-bold text-5xl">FAQ</h1>
          <div className="w-2/3 mx-auto">
            {qna.map((e, i) => (
              <div key={i} className="my-10">
                <h2 className="font-bold text-2xl mb-3">{i + 1}.{e.q}</h2>
                <p className="font-light">{e.a}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </main>
  );
}
