'use server'

import connection from '@/app/api/DBconnection'

export async function changeValue(_, data) {

    const text = data.get('text')


    try {
        await connection.execute('UPDATE banner SET content = ?', [text])


        return { message: 'success' };
    } catch (error) {
        console.log('Error occurred:', error.message);
        return { message: 'error', error: error.message };
    }

}
