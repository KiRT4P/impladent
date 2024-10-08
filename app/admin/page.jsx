import CoM from '../components/admin/CoM';
import Monthly from '../components/admin/Monthly';

import connection from "@/app/api/DBconnection.js";

const getCases = async () => {

    const [data] = await connection.query("SELECT * FROM Monthly");
    data.forEach(e => {
        e.images = JSON.parse(e.images);
    });
    return data;
}

export default async function Admin() {

    const cases = await getCases();

    return (
        <div className="py-10   w-full flex h-full  min-h-screen ">
            <Monthly />
            <CoM cases={cases} />
        </div>
    );
}