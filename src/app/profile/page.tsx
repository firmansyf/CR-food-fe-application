import FooterComponent from '@/components/layout/footer'
import NavbarComponent from '@/components/layout/navbar'
import {FC} from 'react'

const Profile: FC = () => {
    return (
        <>
        <main className='min-h-screen flex justify-center items-center'>
            <NavbarComponent />
            
        </main>
        <FooterComponent />
        </>
    )
}

export default Profile