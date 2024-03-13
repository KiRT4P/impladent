import Image from "next/image"
import Dialog from "../../components/Dialog"

import onas1 from '@/public/onas1.jpg'
import onas2 from '@/public/onas2.jpg'
import onas3 from '@/public/onas3.png'

export default function page({ searchParams }) {
    return (
        <main>
            {searchParams.dialog && <Dialog />}
            <div className="md:flex mt-12 justify-center  ">
                <div className=" md:hidden px-4">
                    <h1 className="text-primary text-5xl font-bold ">Impladent</h1>
                    <div className="child:py-4 text-customGray ">
                        <p>
                            V zubnej klinike IMPLADENT pristupujeme ku každému pacientovi
                            s porozumením a úctou, ktorú si zaslúži. Sme pripravení poskytovať
                            komplexnú starostlivosť, či už je dlhodobá alebo krátkodobá.
                        </p>
                        <p>
                            Nájdete u nás komplexné ošetrenie od preventívnej prehliadky,
                            dentálnej hygieny, zhotovenía detailných a panoramatických RTG,
                            cez zhotovenie bielych kompozitných výplní, pečatenie zubov,
                            celo-keramických koruniek, zirkonových a emaxových mostíkov,
                            celkových aj čiastočných protéz, ošetrení koreňového kanálika,
                            až po komplikované chirurgické zákroky.
                        </p>
                        <p>
                            Špecializujeme sa na rozsiahle implantologické práce - Allon4 a Allon6
                            a kostné rekonštrukcie pri nedostatku kosti pre implantát.
                            U nás je možnosť ošetrenia v celkovej anestéze.
                        </p>
                    </div>
                </div>
                <Image src={onas1} className="rounded-xl md:w-1/3" />
                <div className="hidden md:block px-16">
                    <h1 className="text-primary text-5xl font-bold mb-12">Impladent</h1>
                    <div className="child:py-4 text-customGray w-2/3">
                        <p>
                            V zubnej klinike IMPLADENT pristupujeme ku každému pacientovi
                            s porozumením a úctou, ktorú si zaslúži. Sme pripravení poskytovať
                            komplexnú starostlivosť, či už je dlhodobá alebo krátkodobá.
                        </p>
                        <p>
                            Nájdete u nás komplexné ošetrenie od preventívnej prehliadky,
                            dentálnej hygieny, zhotovenía detailných a panoramatických RTG,
                            cez zhotovenie bielych kompozitných výplní, pečatenie zubov,
                            celo-keramických koruniek, zirkonových a emaxových mostíkov,
                            celkových aj čiastočných protéz, ošetrení koreňového kanálika,
                            až po komplikované chirurgické zákroky.
                        </p>
                        <p>
                            Špecializujeme sa na rozsiahle implantologické práce - Allon4 a Allon6
                            a kostné rekonštrukcie pri nedostatku kosti pre implantát.
                            U nás je možnosť ošetrenia v celkovej anestéze.
                        </p>
                    </div>
                </div>
            </div>
            <div className="my-24">
                <div className="bg-[#F5F5F5] rounded-l-3xl mt-12 p-4 md:p-16 relative  ml-auto">
                    <h1 className="text-primary text-2xl md:text-4xl font-bold mb-12">MUDr. Michal Orenčák, PhD.</h1>
                    <div className=" md:flex items-start">
                        <div className="overflow-hidden rounded-xl md:w-[45%] md:max-h-[280px]">
                            <Image src={onas2} className="" />
                        </div>
                        <div className="child:pb-8 text-customGray md:w-2/3 md:px-16 pt-8 md:pt-0">
                            <p>
                                Vysokoškolské štúdium ukončil v roku 2003 na LF UPJŠ v Košiciach.
                                Po promócii pracoval vo funkcii odborného asistenta na chirurgickom
                                oddelení Kliniky stomatológie a maxilofaciálnej chirurgie v Košiciach.
                                V roku 2007 vykonal atestáciu I. stupňa v odbore stomatológia a bol
                                zaradený do špecializácie v odbore maxilofaciálna chirurgia.
                                V roku 2007 získal certifikát z dentoalveolárnej chirurgie a certifikát
                                z dentálnej implantológie. V roku 2010 získal vedecký titul PhD.
                                V roku 2012 sa stal členom komisie pre skúšanie lekárov pri získaní
                                certifikátu z dentoalveolárnej chirurgie a implantológie. Je držiteľom
                                medzinárodne uznávaného certifikátu Curriculum of oral implantology.
                            </p>
                            <p>
                                Venuje sa chirurgickej liečbe stomatologických ochorení
                                a dentálnej implantológii..
                            </p>
                        </div>
                    </div>
                    <div className="absolute bg-[#F5F5F5] w-screen h-full top-0 -z-50"></div>
                </div>
            </div>
            <div className="mb-12">
                <div className="bg-[#F5F5F5] rounded-r-3xl mt-12 p-4 md:p-16 relative  mr-auto">
                    <h1 className="text-primary text-2xl md:text-4xl font-bold mb-12">MUDr. Želmíra Orenčaková</h1>
                    <div className=" md:flex items-start">
                        <div className="overflow-hidden rounded-xl md:w-[40%] md:max-h-[280px]">
                            <Image src={onas3} className="" />
                        </div>

                        <div className="child:pb-8 text-customGray md:w-2/3 md:px-16 pt-8 md:pt-0">
                            <p>
                                Vysokoškolské štúdium ukončila promóciou na LF UPJŠ v Košiciach
                                v roku 2003. Po promócii pracovala vo funkcii sekundárneho lekára
                                na Klinike stomatológie a maxilofaciálnej chirurgie v Košiciach.
                            </p>
                            <p>
                                V roku 2006 vykonala atestáciu I. stupňa v odbore stomatológia.
                                Následne si otvorila súkromnúprax kde sa venuje estetickej,
                                konzervačnej a protetickej stomatológii ako rodinný stomatológ.
                            </p>
                        </div>
                    </div>
                    <div className="absolute bg-[#F5F5F5] w-screen h-full top-0 -left-[100vw] -z-50"></div>
                </div>
            </div>

        </main>
    )
}