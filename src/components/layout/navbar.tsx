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

const coinny = Coiny({ subsets: ["latin"], weight: '400'});
const NavbarComponent: FC = () => {
    const router = useRouter()
    const [controller, dispatch] = useControllerContext()
    const { data, error } = controller || {}
    
    useEffect(() => {
        CeckLogin(dispatch)
    }, [])
    
    const customStyle = {
        navLink: 'text-[14px] text-black hover:text-black hover:underline underline-offset-4 max-sm:hidden'
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
        <nav className='bg-white flex justify-between items-center py-3 px-7 sticky top-0'>
            <h1 className={`${coinny.className} color-primary text-2xl`}>Cita Rasa</h1>
            <div className='flex items-center gap-6 font-semibold text-sm'>
                <Link href={'/'} className=''>Produk</Link>
                <Link href={'/'} className=''>Resep Makana</Link>
                <Link href={'/'} className=''>About</Link>
            </div>
            <div className='flex justify-between gap-2'>
                <Button size={'sm'} variant={'outline'} className='border border-[#2B9348]'>Daftar</Button>
                <Button size={'sm'} className=''>Masuk</Button>
            </div>
        </nav>
    )
}

export default NavbarComponent;