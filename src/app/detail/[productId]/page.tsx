'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { getProductById } from '@/service/product';
import NavbarComponent from './../../../components/layout/navbar';
import { numberFormat } from "@/lib/utils";
import { Separator } from "@/components/ui/separator"
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import FooterComponent from './../../../components/layout/footer';
import { Toggle } from '@/components/ui/toggle';





function DetailProduct() {
    const params = useParams()
    const [detail, setDetail] = useState<any>({})

    const fetchDataDetail = async () => {
        try {
            const res = await getProductById(params?.productId) 
            return setDetail(res.data)
        } catch (err : any) {
            throw Error('Something error!')
        }
    }


    useEffect(() => {
        fetchDataDetail()
    }, [])

    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    return (
        <>
        <div className='min-h-screen w-full flex justify-center'>
            <NavbarComponent />
            <section className='my-40 flex w-4/5 p-2 h-[40rem] gap-3'>
                <div className='flex-1'>
                    <img
                        className="w-full h-3/4 object-cover mb-2 rounded-md"
                        src="https://placehold.co/600x400"
                        alt="Product Image"
                    />
                </div>

                <div className='flex-1'>
                  <div className='px-10 flex flex-col gap-3'>
                    <h1 className='text-xl'>{detail.name}</h1>
                    <span className='text-lg font-bold'>{numberFormat(detail.price)}</span>
                        <Separator />
                        <div className='flex items-center justify-end gap-2'>
                            {/* <Badge className='bg-gray-300 text-black'>Tersedia {detail.stock} stok lagi</Badge> */}
                            <span className='text-sm'>Kategori : <strong>Makanan Matang</strong></span>
                        </div>
                        <p className='text-[14px] mt-5'>{detail.description}</p>
                   </div>
                </div>

                <Card className='w-1/4 border-2 h-max'>
                    <CardHeader className='border-b-2 p-3 bg-amber-500 rounded-t-md'>
                        <CardTitle className='text-slate-700'>Box Pesanan</CardTitle>
                    </CardHeader>
                    <CardContent className='p-3'>
                        <form className='mb-2' onSubmit={handleSubmit}>
                            <div className='flex flex-col gap-1'>
                                <label className='text-sm'>Tambah Catatan (optional)</label>
                                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 h-14 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                            
                        <Separator className='my-2' />
                        
                         <div className='count flex items-center mt-2 justify-between'>
                            <div className='flex items-center gap-2'>
                                <Toggle>-</Toggle>
                                {1}
                                <Toggle>+</Toggle>
                            </div>

                            <span className='text-sm'>Stok: {detail?.stock}</span>
                        </div>
                        <div className='mt-2 w-full flex items-center justify-between'>
                            <span>Subtotal: </span>
                            <span className='font-bold'>{numberFormat(detail.price)}</span>
                        </div>
                        

                        <div className='w-full mt-10'>
                            <Button className='w-full bg-amber-500 text-slate-700 hover:bg-amber-600 tracking-wide'>Pesan</Button>
                        </div>
                                
                    </form>
                    </CardContent>
                </Card>
            </section>
       </div>
        <FooterComponent />
    </>
   )
}

export default DetailProduct;