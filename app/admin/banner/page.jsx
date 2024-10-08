
import { IconInfoCircle } from '@tabler/icons-react';
import connection from '@/app/api/DBconnection'
import BannerForm from './BannerForm';
import Show from './Show';

const getValues = async () => {
    let [data] = await connection.execute('SELECT * FROM banner')

    return { value: data[0].content, display: data[0].display }
}

const handleDisplay = async () => {
    'use server'
    let { display } = await getValues()

    let newDisplay = display ? 0 : 1
    await connection.execute('UPDATE banner SET display = ?', [newDisplay])
}


export default async function page() {
    const { value, display } = await getValues()

    return (
        <div className="p-16 px-24 w-full">
            <Show display={display} value={value} handleDisplay={handleDisplay} />
            <div className="mt-20 shadow rounded-2xl p-16">
                <div className='flex'>
                    <IconInfoCircle size={32} color="#46B8BD" />
                    <h1 className="font-semibold text-3xl text-primary pl-4">Banner </h1>
                </div>
                <BannerForm value={value} />
            </div>
            <div className='flex pt-8 pl-4'>
                <IconInfoCircle size={24} color="#d1d5db" />
                <p className='text-gray-400 pl-4'>Banner slúži na príležitostné oznamy, ktoré je možné ľubovoľne nastavovať. Banner sa zobrazí navrchu vždy pri otvorení stránky.</p>
            </div>
        </div>
    )
}