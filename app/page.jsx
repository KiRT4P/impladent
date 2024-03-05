import Image from "next/image";
import Tooth from "./components/Tooth";

import woman from '../public/woman_doctor.png'
import zub_1 from '../public/zub_1.png'
import zub_2 from '../public/zub_2.png'
import zub_3 from '../public/zub_3.png'
import zub_4 from '../public/zub_4.png'
import onas1 from '../public/top_left.png'
import onas2 from '../public/right.png'
import onas3 from '../public/bottom_left.png'
import bg from '../public/bg.png'


export default function Home() {
  return (
    <main className="w-full  ">
      <div className="flex justify-between items-center">
        <div className="w-2/3 child:my-8">
          <h1 className="text-6xl text-primary font-extrabold w-2/3">Starostlivosť, akú si Vaše zuby zaslúžia.</h1>
          <h2 className="text-customGray w-2/3">Garantujeme vám profesionálny prístup a kvalitne odvedenú prácu. V moderne vybavenom centre sa budete cítiť príjemne.</h2>

          <div className="flex shadow-lg w-[90%] py-5 px-12 justify-between items-center rounded-lg">
            <div className="">
              <h2 className="text-2xl text-primary">Rezervujte si termín</h2>
              <h3 className="text-customGray">Dohodnite si konzultáciu alebo sa objednajte na vyšetrenie.</h3>
            </div>
            <div>
              <button className="text-lg uppercase text-primary border-2 border-primary px-4 py-2 rounded-lg hover:text-white hover:bg-primary duration-300">
                Rezervovať
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <Image src={woman} alt="logo" className="  mx-auto" />
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-5xl text-primary font-bold text-center">Naše služby</h2>
        <div className="flex justify-between items-center mt-12">
          <Tooth src={zub_1} alt="logo" t1="Stomatológia" t2="Profesionálna starostlivosť o zuby" />

          <Tooth src={zub_2} alt="logo" t1="Implantológia" t2="Dokonalé zhotovenie implantátov." />

          <Tooth src={zub_3} alt="logo" t1="Stomatochirugia" t2="Stomatochirurgické výkony aj v celkovej narkóze." />

          <Tooth src={zub_4} alt="logo" t1="Dentálna hygiena" t2="Kompletná zubná hygiena pre dokonalý úsmev." />

        </div>

      </div>
      <div className="mt-20 table custom-bg !max-w-[100vw]">

        <div className="max-w-[1600px] mx-auto py-24">
          <div className="flex">
            <div className=" flex w-[60%] items-center ">
              <div className="">
                <Image src={onas1} />
                <Image src={onas3} className="mt-4 mr-4" />
              </div>
              <div>
                <Image src={onas2} />
              </div>

            </div>
            <div className="w-[40%] child:text-white flex flex-col justify-between py-12 ">
              <h2 className="uppercase text-xl">O nás</h2>
              <h1 className="font-bold text-4xl">15 rokov skúseností v poskytovaní dentálnej starostlivosti</h1>
              <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="text-lg rounded-full border-2 border-white px-8 py-2 w-max uppercase font-light">Zisti viac!</div>
            </div>
          </div>
        </div>



      </div>
      <div className="pt-40 bg-[#F2F6FC] relative -top-20 -z-50">
        <h1 className="text-primary text-5xl font-bold text-center">Čo o nás povedali pacienti</h1>
        <h1 className="text-9xl font-bold text-customGray text-center py-40">NIČ</h1>
      </div>



      <div>
        <h1 className="text-primary text-5xl font-bold text-center">Fotogaléria</h1>
        <h1 className="text-9xl font-bold text-customGray text-center py-40">Nechce sa mi</h1>
      </div>
    </main>
  );
}
