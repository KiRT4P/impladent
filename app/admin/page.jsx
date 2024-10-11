import CoM from '../components/admin/CoM';
import Monthly from '../components/admin/Monthly';

import connection from "@/app/api/DBconnection.js";

const getCases = async () => {

    const [data] = await connection.query("SELECT * FROM monthly ORDER BY sorting DESC");
    data.forEach(e => {
        e.images = JSON.parse(e.images);
    });
    return data;
}

export default async function Admin({ searchParams }) {

    const cases = await getCases();
    const querry = searchParams.edit
    const [data] = cases.filter(c => {
        return c.id == querry
    })



    return (
        <div className="py-5 w-full flex h-full  min-h-screen ">
            <Monthly startData={data} />
            <CoM cases={cases} selected={data?.id} />
        </div>
    );
}