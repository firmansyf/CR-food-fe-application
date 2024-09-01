import { FolderOpenIcon } from "@heroicons/react/20/solid"
import { Fragment } from "react"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { numberFormat } from '@/lib/utils';
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface Props {
    detail: any
}

export default function DetailProduk({ detail }: Props) {
    const customStyle = {
        label: 'text-[#AEADAD]'
    }

    return (
        <Fragment>
            {detail !== null ? (
                <Card className='w-full'>
                    <CardHeader className="bg-[#EEE] p-5">
                        <CardTitle className='tracking-wide'>{detail.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="py-3 px-4 flex flex-col">
                        <div className="flex items-center gap-2">
                            <div className="w-1/3">
                                <img
                                    src="https://placehold.co/600x400"
                                    className="rounded"
                                    alt=""
                                />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <span className={``}>Harga : <strong>{numberFormat(detail.price)}</strong></span>
                                <span className="">Apakah tersedia : <strong>{Number(detail.stock) > 1 ? 'Ya' : 'Tidak'}</strong></span>
                                <span className=''>Stok : <strong>{detail.stock}</strong></span>
                                <span className=''>Kategori : <strong className='capitalize'>{ detail?.categories?.map((item) => item.name) }</strong></span>
                            </div>
                        </div>

                         <Separator className='my-5' />

                        <div className="flex flex-col gap-1">
                            <span className={`${customStyle.label}`}>Deskripsi</span>
                            <p className='text-sm tracking-wide'>{detail.description}</p>
                        </div>

                        <div className='mt-4'>
                            <Button variant='outline' className='border-2 border-[#2B9348]'>Link Resep</Button>
                        </div>

                        <div></div>
                    </CardContent>
                </Card>
            ): (        
            <section className="flex flex-col items-center justify-center gap-3">
                <div>
                    <h1 className="text-[#AEADAD]">Detail Produk</h1>
                </div>
                <div>
                    <FolderOpenIcon className="w-20 text-[#AEADAD]" />
                </div>
                <div className="w-2/3 text-center text-[#AEADAD]">
                    <span>
                        Mohon maaf tidak ada produk
                        yang anda pilih
                    </span>
                </div>
            </section>
            )}
        </Fragment>
    )
}