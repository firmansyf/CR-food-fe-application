"use client"

import NavbarComponent from "@/components/layout/navbar";
import Sidenav from "@/components/layout/sidenav";
import { Card, CardContent } from "@/components/ui/card";
import { getProduct } from "@/service/product";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import CardProduk from "@/components/elements/card-produk";
import DetailProduk from "@/components/elements/detail-produk";


export default function Home() {
  const router = useRouter()
  const [product, setDataProduct] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [loadingSpinner, setLoadingSpinner] = useState<boolean>(false)
  const [detail, setDetail] = useState(null)
  
  useEffect(() => {
    setLoading(true); // Set loading to true when starting the data fetch
    const fetchData = async () => {
      try {
        const { data } = await getProduct();
        setDataProduct(data);
      } catch (err) {
        console.log('Something went wrong: ', err);
      } finally {
        setLoading(false); // Set loading to false when data is fetched or an error occurs
      }
    };
  
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  const onDetail = (val : any) => {
    setLoadingSpinner(true)
    setTimeout(() => { 
      setLoadingSpinner(false)
      setDetail(val) 
    }, 700)
  }

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
              <input type="text" className="outline-none w-full bg-transparent" placeholder="Cari makanan ( cth. Keripik Singkong )" />
              <MagnifyingGlassIcon className='w-7 text-[#AEADAD]'/>
            </div>
          </div>

          <div className="mt-7">
            <Card className={`${loading ? 'h-[90vh]' : 'h-full'} p-1 overflow-y-auto`}>
              <CardProduk data={product} loading={loading} onClick={onDetail} />
            </Card>
          </div>
        </div>


        <div className="w-1/3 h-[90vh] sticky top-16 -z-50">
          <div className={`h-full flex w-full ${detail !== null ? '' : 'justify-center items-center border-2 bg-white rounded-xl'}`}>
            <DetailProduk detail={detail} loading={loadingSpinner} />
          </div>
        </div>
      </main>
    </>
  );
}
