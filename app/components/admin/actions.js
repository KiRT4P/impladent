'use server'

import connection from "@/app/api/DBconnection.js";

export async function addMonthly(_, data) {

    console.log(data.get('images'));


    const monthly = {
        month: data.get('month'),
        year: data.get('year'),
        title: data.get('title'),
        text: data.get('text'),
        images: data.get('images'),
    }

    const MtoD = {
        jan: '01',
        feb: '02',
        mar: '03',
        apr: '04',
        may: '05',
        jun: '06',
        jul: '07',
        aug: '08',
        sep: '09',
        oct: '10',
        nov: '11',
        dec: '12'
    }

    let sorting = monthly.year + MtoD[monthly.month]



    try {
        await connection.query("INSERT INTO monthly (month, year, title, text, images,sorting) VALUES (?, ?, ?, ?, ?,?)", [monthly.month, monthly.year, monthly.title, monthly.text, monthly.images, sorting]);
    } catch (e) {
        console.log(e);
        return { message: 'error' };
    }
    return { message: 'success' };

}

export async function editMonthly(_, data) {
    const monthly = {
        month: data.get('month'),
        year: data.get('year'),
        title: data.get('title'),
        text: data.get('text'),
        images: data.get('images'),
    }

    const MtoD = {
        jan: '01',
        feb: '02',
        mar: '03',
        apr: '04',
        may: '05',
        jun: '06',
        jul: '07',
        aug: '08',
        sep: '09',
        oct: '10',
        nov: '11',
        dec: '12'
    }

    let sorting = monthly.year + MtoD[monthly.month]

    try {
        await connection.query("UPDATE monthly SET month = ?, year = ?, title = ?, text = ?, images = ?, sorting = ? WHERE id = ?", [monthly.month, monthly.year, monthly.title, monthly.text, monthly.images, sorting, data.get('id')]);
    } catch (e) {
        console.log(e);
        return { message: 'error' };
    }
    return { message: 'success' };
}


export async function deleteMonthly(_, data) {
    try {
        await connection.query("DELETE FROM monthly WHERE id = ?", [data.get('id')]);
    } catch (e) {
        console.log(e);
        return { message: 'error' };
    }
    return { message: 'success' };
}