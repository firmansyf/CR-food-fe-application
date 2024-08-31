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
import { Button } from "@/components/ui/button";

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
      <main className="min-h-screen flex py-10 px-7 gap-10">
        <div className="flex-1">
          <div className="flex flex-col gap-4">
            <h1 className='text-2xl font-semibold'>Cari Produk</h1>
            <div className="flex w-full gap-3 bg-white bg-opacity-50 rounded shadow text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              <select className="pr-5 bg-transparent outline-none">
                <option>Mkn. Matang</option>
                <option>Mkn. Mentah</option>
                <option>Bahan bahan</option>
              </select>
              <input type="text" className="outline-none w-full bg-transparent" placeholder="Cari Produk ( cth. Keripik Singkong )" />
            </div>
          </div>


          <div className="mt-7 h-[90vh]">
           <Card className="h-full">
       
            </Card>
          </div>
        </div>


        <div className="w-1/3 h-[90vh]">
          <Card className="h-full">
            
          </Card>
        </div>
      </main>
    </>
  );
}
