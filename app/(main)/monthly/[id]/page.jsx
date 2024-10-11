
import connection from "@/app/api/DBconnection.js";
import Gallery from "./Gallery";

import Dialog from "@/app/components/Dialog";

const getCase = async (id) => {
    const [data] = await connection.query("SELECT * FROM Monthly WHERE id = ?", [id]);
    data.forEach(e => {
        e.images = JSON.parse(e.images);
    });
    if (data.length > 0) {
        return data[0];
    }

    return undefined

}

export default async function page({ params, searchParams }) {

    const c = await getCase(params.id)
    const months = {
        jan: "Január",
        feb: "Február",
        mar: "Marec",
        apr: "Apríl",
        may: "Máj",
        jun: "Jún",
        jul: "Júl",
        aug: "August",
        sep: "September",
        oct: "Október",
        nov: "November",
        dec: "December"
    }


    return (
        <main className="pt-12">
            {searchParams.dialog && <Dialog />}
            <div className="flex ">
                <div className="w-[50%] mb-12">
                    <h1 className="uppercase text-xl text-[#c4cadc]">Prípad mesiaca</h1>
                    <h2 className="py-8 text-primary text-5xl font-extrabold">{c.title}</h2>
                    <h3 className="text-[#c4cadc]"> {months[c.month]} {c.year} </h3>
                    <p className="py-8">
                        {c.text}
                    </p>
                </div>
                <Gallery images={c.images} />
            </div>

        </main>
    )
}
