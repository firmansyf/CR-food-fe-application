'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FC, useState } from 'react'
import NavbarComponent from '@/components/layout/navbar';
import { Field, Form, Formik, ErrorMessage} from 'formik';
import { Button } from '@/components/ui/button';
import { Toggle } from "@/components/ui/toggle"
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';
import { registration } from '@/service/auth';
import ToastMessage from '@/components/toast-message';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup'

const validateSchema = Yup.object().shape({
    username: Yup.string().required('Username wajib di isi'),
    email: Yup.string().required('Email wajib di isi'),
    no_telepone: Yup.string().required('No Telepone wajib di isi'),
    gender: Yup.string().required('Gender wajib di isi'),
    alamat: Yup.string().required('Alamat wajib di isi'),
    password: Yup.string().required('Password wajib di isi')
})

const RegistrationPage: FC = () => {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState<any>(false);

    const handleOnSubmit = (val : any) => {
        const params = {
            username: val?.username,
            email: val?.email,
            no_telepone: val?.no_telepone,
            password: val?.password,
            gender: val?.gender,
            alamat: val?.alamat,
            roles: ['user']
        }

        registration(params).then((res) => {
            ToastMessage({ type: 'success', message: 'Registration has been successfully' });
            setTimeout(() => {
                router.push('/login')
            }, 700)
        }).catch((err) => console.log(err))
        
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
            <Card className='w-1/2 mt-12 bg-white border-[#00AA5B]'>
                <CardHeader>
                    <CardTitle className='tracking-wide'>Form Registration</CardTitle>
                </CardHeader>
                <CardContent>
                    <Formik
                        enableReinitialize
                        validationSchema={validateSchema}
                        onSubmit={handleOnSubmit}
                        initialValues={{
                            username: '',
                            email: '',
                            no_telepone: '',
                            password: '',
                            gender: '',
                            alamat: ''
                        }}
                    >
                        {() => {
                            return (
                                <Form className='flex flex-col gap-2'>
                                    <div>
                                        <label htmlFor="">Username<span className='text-red-500'>&#42;</span></label>
                                        <Field type='text' name='username' placeholder='Enter username' className={`${customStyle.field}`} />
                                        <span className='text-sm text-red-500'><ErrorMessage name='username' /></span>
                                    </div>

                                    <div className='flex items-center gap-2'>
                                        <div className='flex-1'>
                                            <label htmlFor="">Email<span className='text-red-500'>&#42;</span></label>
                                            <Field type='email' name='email' placeholder='Enter email' className={`${customStyle.field}`} />
                                            <span className='text-sm text-red-500'><ErrorMessage name='email' /></span>
                                            </div>
                                            <div className='flex-1'>
                                            <label htmlFor="">No Telepone<span className='text-red-500'>&#42;</span></label>
                                            <Field type='number' name='no_telepone' placeholder='Enter no telepone' className={`${customStyle.field}`} />
                                            <span className='text-sm text-red-500'><ErrorMessage name='no_telepone' /></span>
                                        </div>
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

                                    <div className='w-1/3'>
                                        <label htmlFor="">Gender<span className='text-red-500'>&#42;</span></label>
                                        <Field
                                            as='select'
                                            name='gender'
                                            className={`${customStyle.field}`}
                                        >
                                            <option value=''>Pilih jenis kelamin</option>
                                            <option value='Laki laki'>Laki - laki</option>
                                            <option value='Perempuan'>Perempuan</option>
                                        </Field>
                                        <span className='text-sm text-red-500'><ErrorMessage name='gender' /></span>
                                    </div>

                                    <div className=''>
                                        <label htmlFor="">Alamat<span className='text-red-500'>&#42;</span></label>
                                        <Field as='textarea' name='alamat' placeholder='Enter alamat' className={`${customStyle.field}`} />
                                        <span className='text-sm text-red-500'><ErrorMessage name='alamat' /></span>
                                    </div>


                                    <div className='w-full'>
                                        <Button type='submit' className='bg-[#00AA5B] text-white hover:bg-green-700'>Submit</Button>
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

export default RegistrationPage