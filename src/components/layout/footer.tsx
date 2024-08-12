import { FC } from 'react'
import Link  from 'next/link';


const FooterComponent: FC = () => {
    const linkKategory = [
        { name: 'Makanan Matang', path: '/' },
        { name: 'Makanan Mentah', path: '/' },
        { name: 'Bahan - Bahan', path: '/' },
    ]

    const linkTentang = [
        { name: 'FAQ', path: '/' },
        { name: 'Kebijakan Privasi', path: '/' },
        { name: 'Syarat dan Ketentuan', path: '/' },
        { name: 'Tentang Kami', path: '/' },
        { name: 'Blog', path: '/' },
    ]


    return (
        <>
        <footer className="bg-yellow-900 text-white py-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className='flex flex-col gap-3'>
                        <h4 className="font-bold text-lg">Cita Rasa</h4>
                        <p>Solusi pengiriman dan resep makanan terbaik Anda.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Kategori</h4>
                            <ul className='py-3 space-y-2'>
                                {linkKategory.map(({ name, path } : any, i: number) => (
                                    <li key={i}>
                                        <Link href={path} className='hover:underline text-slate-300'>{name}</Link>
                                    </li>
                                    ))
                                }
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Tentang</h4>
                         <ul className='py-3 space-y-2'>
                         {linkTentang.map(({ name, path } : any, i: number) => (
                            <li key={i}>
                                <Link href={path} className='hover:underline text-slate-300'>{name}</Link>
                            </li>
                            ))
                         }
                        </ul>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4 className="font-bold text-lg pb-3">Kontak Kami</h4>
                        <p className='text-slate-300'>info@citarasa.com</p>
                        <p className='text-slate-300'>+62 851-5694-8098</p>
                        <div className="flex mt-4">
                            <a href="#" className="text-white mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M24 4.56v15.09c0 2.52-2.06 4.56-4.59 4.56H4.59C2.07 24 0 21.96 0 19.44V4.56C0 2.04 2.07 0 4.59 0h14.82C21.94 0 24 2.04 24 4.56zM7.19 19.44h3.5V9.32H7.19v10.12zm1.75-11.72c1.09 0 1.75-.72 1.75-1.62-.02-.92-.66-1.62-1.73-1.62-1.07 0-1.75.71-1.75 1.62 0 .9.66 1.62 1.71 1.62h.02zm7.72 11.72h3.5v-5.62c0-3.07-1.63-4.5-3.79-4.5-1.74 0-2.53.97-2.97 1.64v-1.41H9.31c.05.92 0 10.12 0 10.12h3.5v-5.66c0-.3.02-.61.11-.82.23-.62.75-1.25 1.63-1.25 1.15 0 1.61.94 1.61 2.32v5.41z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M12 2.16c3.22 0 3.6.01 4.87.07 1.27.06 2.1.28 2.6.47.63.25 1.08.55 1.55 1.02.47.47.77.92 1.02 1.55.19.5.41 1.33.47 2.6.06 1.27.07 1.65.07 4.87s-.01 3.6-.07 4.87c-.06 1.27-.28 2.1-.47 2.6-.25.63-.55 1.08-1.02 1.55-.47.47-.92.77-1.55 1.02-.5.19-1.33.41-2.6.47-1.27.06-1.65.07-4.87.07s-3.6-.01-4.87-.07c-1.27-.06-2.1-.28-2.6-.47-.63-.25-1.08-.55-1.55-1.02-.47-.47-.77-.92-1.02-1.55-.19-.5-.41-1.33-.47-2.6-.06-1.27-.07-1.65-.07-4.87s.01-3.6.07-4.87c.06-1.27.28-2.1.47-2.6.25-.63.55-1.08 1.02-1.55.47-.47.92-.77 1.55-1.02.5-.19 1.33-.41 2.6-.47 1.27-.06 1.65-.07 4.87-.07M12 0C8.74 0 8.33.01 7.05.07 5.75.13 4.59.39 3.58.88c-.99.47-1.82 1.11-2.61 1.9-.79.79-1.43 1.62-1.9 2.61-.49.98-.75 2.14-.81 3.43C.01 8.74 0 9.15 0 12c0 2.85.01 3.26.07 4.55.06 1.29.32 2.45.81 3.43.47.99 1.11 1.82 1.9 2.61.79.79 1.62 1.43 2.61 1.9.98.49 2.14.75 3.43.81 1.29.06 1.7.07 4.55.07s3.26-.01 4.55-.07c1.29-.06 2.45-.32 3.43-.81.99-.47 1.82-1.11 2.61-1.9.79-.79 1.43-1.62 1.9-2.61.49-.98.75-2.14.81-3.43.06-1.29.07-1.7.07-4.55s-.01-3.26-.07-4.55c-.06-1.29-.32-2.45-.81-3.43-.47-.99-1.11-1.82-1.9-2.61-.79-.79-1.62-1.43-2.61-1.9-.98-.49-2.14-.75-3.43-.81C15.26.01 14.85 0 12 0z"/>
                                    <path d="M12 5.84A6.16 6.16 0 0 0 5.84 12 6.16 6.16 0 0 0 12 18.16 6.16 6.16 0 0 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.08A3.92 3.92 0 1 1 15.92 12 3.92 3.92 0 0 1 12 15.92zm6.4-11.68a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="text-center w-full bg-amber-500 p-3">
            <p>&copy; 2024 Cita Rasa. All Rights Reserved.</p>
        </div>
        </>
    )
}

export default FooterComponent