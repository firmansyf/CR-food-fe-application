"use client"

import { Bars3Icon } from '@heroicons/react/20/solid';
import { Toggle } from "@/components/ui/toggle"
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect } from 'react'
import { useControllerContext, setOpenSidenav, CeckLogin, isLogout} from '@/context';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';


const NavbarComponent: FC = () => {
    const router = useRouter()
    const [controller, dispatch] = useControllerContext()
    const {data, error} = controller || {}
    
    useEffect(() => {
        CeckLogin(dispatch)
    }, [dispatch])
    
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
    <div className='w-4/5 z-50 flex justify-between items-center top-3 px-4 py-1 rounded-lg bg-white fixed max-sm:w-11/12 shadow-md'>
       <div className='logo flex gap-2 items-center'>
        <Toggle variant="outline" aria-label="Toggle italic" className='hidden max-sm:block' onClick={() => setOpenSidenav(dispatch, !controller.openSidenav)}>
         <Bars3Icon className="h-4 w-4" />
        </Toggle>
        <Link href='/'>
        <Image
            src="/logo-cita-rasa.png"
            width={60}
            height={60}
            alt="Picture of the author"
            className='rounded-full'
            />
        </Link>
      </div>
      <div className='nav-link flex gap-3 items-center'>
        <Link href={'/'} className={`${customStyle.navLink}`}>Home</Link>
        <Link href={'/'} className={`${customStyle.navLink}`}>Produk</Link>
        <Link href={'/'} className={`${customStyle.navLink}`}>Resep Kami</Link>
        <div className='mx-5 flex items-center' />
          <div className='flex gap-2 items-center'>
              {data?.loggin === true ? (
                <Button onClick={onLogout} className={`text-sm text-white bg-[#00AA5B] hover:bg-green-600 p-2 rounded-md w-full`}>
                    <span>Logout</span>
                </Button>
                ) : (
                   <>
                    <Link href={'/login'} className={`text-sm text-white bg-[#00AA5B] hover:bg-green-600 p-2 rounded-md w-1/2`}>
                        <span>Login</span>
                    </Link>
                    <span className='text-black'>|</span>
                    <Link href={'/register'} className={`text-sm text-[#00AA5B]`}>Daftar</Link>
                   </>       
                )}
            </div>
        </div>
      </div>
    )
}

export default NavbarComponent;