import AdminNavbar from '../components/AdminNavbar'
export default async function MainLayout({ children }) {


    return (
        <div className='relative'>
            <div className='flex'>
                <AdminNavbar />
                {children}
            </div>


        </div>
    )
}

