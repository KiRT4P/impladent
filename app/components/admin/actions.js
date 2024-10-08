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


    console.log(monthly);


    try {
        await connection.query("INSERT INTO monthly (month, year, title, text, images) VALUES (?, ?, ?, ?, ?)", [monthly.month, monthly.year, monthly.title, monthly.text, monthly.images]);
    } catch (e) {
        console.log(e);
        return { message: 'error' };
    }
    return { message: 'success' };

}