"use client"

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { login } from '@/service/auth';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useRouter } from 'next/navigation';
import { FC } from 'react'
import NavbarComponent  from '@/components/layout/navbar';
import Link from 'next/link';
import * as Yup from 'yup'

const validateSchema = Yup.object().shape({
    username: Yup.string().required('Username wajib di isi'),
    password: Yup.string().required('Password wajib di isi')
})

const LoginPage: FC = () => {
    const router = useRouter()
   
    const onSubmitEvent = (val : any) => {
        const params = {
            username: val?.username,
            password: val?.password
        }

        login(params).then(({ data }) => {
            router.push('/')
        }).catch((err) => {
            console.log('err :', err)
        })
     }
    
    const customStyle = {
        section: 'flex flex-col gap-1',
        field: 'w-full border-2 bg-white rounded text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out',
    }

    return (
        <main className='min-h-screen flex justify-center items-center'>
            <NavbarComponent />
            <Card className='w-1/3 p-5 bg-white border-amber-500'>
                <CardHeader>
                    <CardTitle className='text-3xl'>Cita Rasa Login Page</CardTitle>
                </CardHeader>

                <CardContent className=''> 
                    <Formik 
                        enableReinitialize
                        onSubmit={onSubmitEvent}
                        validationSchema={validateSchema}
                        initialValues={{
                            username: '',
                            password: ''
                        }}>{() => {
                        return (
                            <Form className='flex flex-col gap-3'>
                                <div className={customStyle.section}>
                                    <label>Username<span className='text-red-500'>&#42;</span></label>
                                    <Field name='username' type='text' className={customStyle.field} placeholder='Masukan username' />
                                    <span className='text-sm text-red-500'><ErrorMessage name='username' /></span>
                                </div>
                                <div className={customStyle.section}>
                                    <label>Password<span className='text-red-500'>&#42;</span></label>
                                    <Field name='password' type='password' className={customStyle.field} placeholder='Masukan password'/>
                                    <span className='text-sm text-red-500'><ErrorMessage name='password' /></span>
                                </div>

                                <div className='mt-4 w-full flex justify-between items-center'>
                                    <Button className='bg-amber-500 text-slate-700 hover:bg-amber-600'>Submit</Button>

                                    <span className='text-sm'>
                                        Belum punya akun? 
                                        <Link href='/register' className='mx-2 underline underline-offset-4 hover:text-blue-600'>Daftar</Link>
                                    </span>
                                </div>
                            </Form>
                        )
                    }}
                    </Formik>
                </CardContent>
            </Card>
        </main>
    )
}

export default LoginPage;