"use client"

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { login } from '@/service/auth';
import { Formik, Field, Form } from 'formik';
import { useRouter } from 'next/navigation';
import { FC } from 'react'

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
            <Card className='w-1/3 p-5 bg-white border-amber-500'>
                <CardHeader>
                    <CardTitle className='text-3xl'>Cita Rasa Login Page</CardTitle>
                </CardHeader>

                <CardContent className=''> 
                    <Formik enableReinitialize onSubmit={onSubmitEvent} initialValues={{}}>{() => {
                        return (
                            <Form className='flex flex-col gap-3'>
                                <div className={customStyle.section}>
                                    <label>Username</label>
                                    <Field name='username' type='text' className={customStyle.field} placeholder='Masukan username'/>
                                </div>
                                <div className={customStyle.section}>
                                    <label>Password</label>
                                    <Field name='password' type='password' className={customStyle.field} placeholder='Masukan password'/>
                                </div>

                                <div className='mt-4'>
                                    <Button className='bg-amber-500 text-slate-700 hover:bg-amber-600'>Submit</Button>
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