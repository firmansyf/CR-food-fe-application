"use client"

import { Bars3Icon } from '@heroicons/react/20/solid';
import { Toggle } from "@/components/ui/toggle"
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect } from 'react'
import { useControllerContext, setOpenSidenav, CeckLogin, isLogout} from '@/context';
import { useRouter } from 'next/navigation';
import ProfileDropdown from './../elements/profile-dropdown/index';
import { UserIcon } from '@heroicons/react/16/solid';
import { Coiny } from 'next/font/google';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation'

const coinny = Coiny({ subsets: ["latin"], weight: '400'});
const NavbarComponent: FC = () => {
    const router = useRouter()
    const pathname = usePathname()
    const [controller, dispatch] = useControllerContext()
    const { data, error } = controller || {}
    
    useEffect(() => {
        CeckLogin(dispatch)
    }, [])
    
    const customStyle = {
        navLink: 'transition-all duration-300 ease-in-out',
        active: 'bg-[#2B9348] py-1 px-2 text-white rounded-md'
    }

    const onLogout = async (e : any) => {
        try {
            await isLogout(dispatch)
            setTimeout(() => {
                router.push('/login')
            }, 500)
        } catch (err) {
            console.log(`Logout Error`)
        }
    }
    
    return (
        <nav className='bg-white flex justify-between items-center py-3 px-7 sticky top-0 shadow-sm'>
            <h1 className={`${coinny.className} color-primary text-2xl`}>Cita Rasa</h1>
            <div className='flex items-center gap-6 font-semibold text-sm '>
                <Link href={'/'} className={`link ${customStyle.navLink} ${pathname === '/' ? customStyle.active : ''}`}>Produk</Link>
                <Link href={'/resep-makanan'} className={`link ${customStyle.navLink} ${pathname === '/resep-makanan' ? customStyle.active : ''}`}>Resep Makana</Link>
                <Link href={'/tentang-kami'} className={`link ${customStyle.navLink} ${pathname === '/tentang-kami' ? customStyle.active : ''}`}>Tentang Kami</Link>
            </div>
            <div className='flex justify-between gap-2'>
                <Button size={'sm'} variant={'outline'} className='border border-[#2B9348]'>Daftar</Button>
                <Button size={'sm'} onClick={() => router.push('/login')} className=''>Masuk</Button>
            </div>
        </nav>
    )
}

export default NavbarComponent;