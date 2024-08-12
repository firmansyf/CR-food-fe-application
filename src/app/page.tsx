"use client"

import NavbarComponent from "@/components/layout/navbar";
import Sidenav from "@/components/layout/sidenav";
import { Card } from "@/components/ui/card";
import { getProduct } from "@/service/product";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useState, useEffect, useMemo } from "react";
import { Badge } from "@/components/ui/badge"
import Dummy from "@/lib/Dummy1";
import FooterComponent from "@/components/layout/footer";
import { numberFormat } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const [product, setDataProduct] = useState<any[]>([])
  
  useEffect(() => {
    getProduct().then(({data} : any) => {
      setDataProduct(data)
    }).catch((err) => console.log('Something an errors : ', err))
  }, [])
  

  return (
    <>
      <main className="min-h-screen mb-14">
      <section className="relative h-[45rem] max-sm:h-auto">
        <section className='section-navbar w-full flex justify-center relative p-2 h-[40rem] max-sm:h-[20rem]'>
          <NavbarComponent />
          <Sidenav />
          
          <div className="deskripsi mx-auto my-auto text-white font-bold w-1/2 flex flex-col gap-2 tracking-wide max-sm:w-full max-sm:pl-4">
            <p className="text-6xl my-3 tracking-wide max-sm:text-4xl">Cita Rasa</p>
            {/* Adalah platform lengkap untuk pemesanan dan pengantaran makanan, serta tempat berbagi inspirasi kuliner dengan komunitas yang aktif dan berbagi resep lezat. */}
            <p className="bg-amber-500 w-max text-6xl rounded-md px-1 max-sm:text-xl">Nikmati Hidangan,</p>
            <p className="bg-amber-500 w-max text-6xl rounded-md px-1 max-sm:text-xl">Temukan Inspirasi</p>
          </div>

          <div className="absolute w-56 h-56 top-1/3 right-1/4 backdrop-blur-sm bg-amber-500/30 rounded-full flex items-center justify-center text-center font-semibold text-6xl max-sm:w-32 max-sm:h-32 max-sm:text-3xl max-sm:right-4">100% ORI</div>
        </section>
        
        <div className="absolute flex bottom-0 w-full justify-center items-center max-sm:bottom-10 max-sm:static">
          <div className="border-2 w-1/2 z-20 p-10 rounded-md bg-white shadow-md max-sm:p-5 max-sm:w-full">
            <div className="flex border-2 flex-row-reverse px-2 rounded-md">
              <MagnifyingGlassIcon className="w-7 text-gray-400" />
              <input type="text" name="search" className="w-full bg-white rounded text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Cari Makanan yang kamu suka"/>
            </div>
          </div>
        </div>
      </section>
        
        <div className="w-full flex justify-center my-10">
          <div className="w-4/5 flex flex-wrap gap-7">
            {Array.isArray(product) && product.map((item: any, i: number) => {
              return (
                <Card
                  onClick={() => router.push(`/detail/${item.id}`)}
                  key={i}
                  className="p-2 w-full sm:w-[calc(50%-14px)] md:w-[calc(33.3333%-14px)] lg:w-[17.5rem] cursor-pointer hover:shadow-2xl transition-all hover:border-amber-500">
                  <div className="relative">
                    <img className="w-full h-52 object-cover mb-2" src="https://placehold.co/500x500" alt="Product Image" />
                    
                    <Badge className="absolute bottom-2 right-2 bg-white text-black flex items-center gap-1 hover:bg-gray-50">
                    <span className="text-yellow-500 font-semibold">&#9733;</span>{item.rating}</Badge>
                  </div>
                  <span className='mt-7 font-bold text-sm'>{numberFormat(item.price)}</span>
                  <div className='flex flex-col mt-1'>
                    <h1 className='tracking-wide text-sm'>{item.name}</h1>
                    <p></p>
                  </div>
                </Card>
              );
            })}

            <div className="w-full text-center my-5">
              <Badge className="bg-amber-500 hover:bg-amber-600 shadow-xl cursor-pointer text-sm">See more</Badge>
            </div>
          </div>
        </div>

      <div className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Kenapa harus di Cita Rasa?</h2>
          <div className="flex justify-around gap-8">
            {Dummy.map(({ title }, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-yellow-500 rounded-full w-40 h-40 shadow-lg">
                <span className="text-sm sm:text-md md:text-lg lg:text-[15px] tracking-wide text-amber-900 font-semibold">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      </main>
      <FooterComponent />
    </>
  );
}
