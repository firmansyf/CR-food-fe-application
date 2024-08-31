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
import { FC, useState } from 'react'
import NavbarComponent  from '@/components/layout/navbar';
import Link from 'next/link';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';
import * as Yup from 'yup'
import { Toggle } from '@/components/ui/toggle';
import ToastMessage from '@/components/toast-message';

const validateSchema = Yup.object().shape({
    username: Yup.string().required('Username wajib di isi'),
    password: Yup.string().required('Password wajib di isi')
})

const LoginPage: FC = () => {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState<any>(false);
   
    const onSubmitEvent = (val : any) => {
        const params = {
            username: val?.username,
            password: val?.password
        }

        login(params).then(({ data }) => {
            router.push('/')
        }).catch(({response : {data}}) => {
            ToastMessage({type: 'error', message: data.message})
        })
     }
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const customStyle = {
        section: 'flex flex-col gap-1',
        field: 'w-full border-2 bg-white rounded text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out',
    }

    return (
        <main className='min-h-screen flex justify-center items-center'>
            <NavbarComponent />
            <Card className='w-1/3 p-5 bg-white border-[#00AA5B]'>
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
                                <div>
                                    <label htmlFor="">Password<span className='text-red-500'>&#42;</span></label>
                                        <div className={`flex items-center gap-1 ${customStyle.field}`}>
                                            <Field type={showPassword ? 'text' : 'password'}  name='password' placeholder='Enter password' className={`w-full outline-none`} />
                                            <Toggle onClick={togglePasswordVisibility} >
                                                {showPassword ? <EyeIcon className='w-5'  /> : <EyeSlashIcon className='w-5' />}
                                            </Toggle>
                                        </div>
                                        <span className='text-sm text-red-500'><ErrorMessage name='password' /></span>
                                    </div>

                                <div className='mt-4 w-full flex justify-between items-center'>
                                    <Button className='bg-[#00AA5B] text-white hover:bg-green-700'>Submit</Button>

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