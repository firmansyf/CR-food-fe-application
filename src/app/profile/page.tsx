/* eslint-disable @next/next/no-img-element */
'use client'

import FooterComponent from '@/components/layout/footer'
import NavbarComponent from '@/components/layout/navbar'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { meUser, useControllerContext } from "@/context"
import { Form, Formik } from 'formik'
import { FC, useState, useEffect } from 'react'
import Image from 'next/image';

const Profile: FC = () => {
    const [imageProfile, setImageProfile] = useState<any>()
    const [controller, dispatch] = useControllerContext()
    const { me, meError } = controller || {}

    useEffect(() => {
        meUser(dispatch)
    },[dispatch])

    const handleSumbit = (val) => {

    }
    
    return (
        <>
        <main className='min-h-screen flex justify-center'>
            <NavbarComponent />
            

            <section className='my-10 py-20 w-full flex justify-center'>
                <Card className='w-3/4'>
                    <CardHeader className='bg-gray-100'>Profile anda</CardHeader>
                    <CardContent>
                        <Formik enableReinitialize onSubmit={handleSumbit} initialValues={{}}>
                            {({ }) => {
                                return (
                                    <Form className='flex'>
                                       <div className='flex'>
                                        <img
                                            src={`http://localhost:8000/${me?.image}`}
                                            width={125}
                                            height={125}
                                            alt={`${me?.username}`}
                                         />

                                            <input type='file' name='image' />
                                        </div>

                                        <div></div>
                                    </Form>
                                )
                          }}
                        </Formik>
                    </CardContent>
                </Card> 
             </section>
         </main>
            
        <FooterComponent />
        </>
    )
}

export default Profile