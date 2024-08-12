"use client"

import { useControllerContext, setOpenSidenav } from '@/context'
import { XMarkIcon } from '@heroicons/react/16/solid'
import { Toggle } from "@/components/ui/toggle"
import { FC } from 'react'

const Sidenav: FC = () => {
    const [controller, dispatch] = useControllerContext()
    const {openSidenav } = controller
    
    return (
        <aside
          className={`${
            openSidenav ? 'fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100 backdrop-blur-md bg-amber-300/30' : 'hidden'
          } `}
        >
        <div className={`relative`}>
          <section className='py-6 px-8 text-center flex justify-start items-center gap-5'>
            <section className='flex flex-col'>
             
              <div className='border border-green-400 rounded-full p-0.5'>
                Testing
              </div>
            </section>
          </section>
  
          <Toggle onClick={() => setOpenSidenav(dispatch, false)} className='absolute top-3 right-2'>
            <XMarkIcon className='w-10' />
        </Toggle>
        </div>
        <div className='m-4'>
          
        </div>
      </aside>
    )
}

export default Sidenav;