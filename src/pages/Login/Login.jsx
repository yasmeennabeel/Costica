import React, { useEffect } from 'react'
import back from '../../assets/imgs/back.png'
import { IoMail } from 'react-icons/io5'
import { FaKey, FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup";
import { AuthRepo } from '../../data/repos/AuthRepo';
import { toast } from 'react-toastify';



export default function Login() {
    const navigate = useNavigate()
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,20}$/;
    const phoneRegex = /^\+201[0125]\d{8}$/;
    const validationSchema = Yup.object({
        username: Yup.string().required('Required Field'),
        phone: Yup.string().required('Required Field').matches(phoneRegex, 'Invalid Phone Number'),
        email: Yup.string().email('Invalid Email').required('Required Field'),
        password: Yup.string().required('Required Field').matches(passwordRegex, 'Invalid Password criteria'),
    });

    const handleSubmit = (values) => {
        AuthRepo.register(values).then((res) => {
            res && toast.success(`Welcome ${res.user.username}`)
            res && sessionStorage.setItem('token', res.jwt);
            navigate('/')
        })
    }
    const handleLogin = (values) => {
        AuthRepo.login(values).then((res) => {
            if (res?.jwt && res?.user) {
                localStorage.setItem("jwt", res.jwt);
                localStorage.setItem("user", JSON.stringify(res.user));
                toast.success(`Welcome back ${res.user.username}`);
                sessionStorage.setItem('token', res.jwt);
                let redirect = sessionStorage.getItem('redirect')
                if (redirect) {
                    navigate('/checkout')
                } else {
                    navigate('/');

                }

            } else {
                toast.error('Wrong Email or Password')
            }
        });
    }
  
      
    return (
        <div className='login'>
            <div className="w-full h-64 bg-contain bg-no-repeat bg-right flex items-center justify-center"
                style={{ backgroundImage: `url(${back})` }}
            >
                <div className='flex items-center justify-center gap-2 capitalize'>
                    <div className='breadcrumbs transition text-center flex flex-col items-center justify-center'>
                        <p className=' text-center  text-xl uppercase font-semibold font-[roboto]'>My Account</p>
                        <ul className='flex gap-2 text-xs m-0 cursor-pointer text-center p-0'>
                            <li className='font-[roboto] hover:text-[var(--brownish)] hover:font-bold'>Home</li>
                            <li className='font-[roboto] hover:text-[var(--brownish)] hover:font-bold'>Shop</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <div className='loginSection '>
                    <div className="hero min-h-screen text-black">
                        <div className="hero-content flex-col lg:flex-row w-full gap-6">
                            <div className="loginSection card flex-1 flex flex-col justify-between shadow-2xl p-6 ">

                                <div className="card-body">
                                    <Formik
                                        initialValues={{ email: '', password: '' }}
                                        validationSchema={Yup.object({
                                            email: Yup.string().email('Invalid email address').required('Required Field'),
                                            password: Yup.string()
                                                .min(6, 'Password must be at least 6 characters')
                                                .required('Required Field'),
                                        })}
                                        onSubmit={handleLogin}
                                    >
                                        <Form className="bg-white flex flex-col gap-4">
                                            <p className='!text-lg font-bold font-[roboto] text-center mb-4'>Login to your Account</p>
                                            <label className="font-bold font-[roboto] text-xs !text-[var(--darkgreen)]">Enter your Email Address</label>
                                            <div className=" w-full">
                                                <label className="input validator bg-white relative">
                                                    <IoMail className='!text-[var(--darkgreen)] absolute top-3.5 left-[-8px] z-10' />
                                                    <Field type="email" name="email" placeholder="Enter your Email" className="bg-white form-control absolute top-0 w-full border-1 border-[var(--light)] p-2" />
                                                </label>
                                            </div>
                                            <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />

                                            <label className="font-bold font-[roboto] text-xs !text-[var(--darkgreen)]">Enter your Password</label>
                                            <div className="relative w-full">

                                                <label className="input validator bg-white relative">
                                                    <FaKey className='!text-[var(--darkgreen)] absolute top-3.5 left-[-8px] z-10' />
                                                    <Field type="password" name="password" placeholder="Enter your Password" className="bg-white form-control absolute top-0 w-full border-1 border-[var(--light)] p-2" />
                                                </label>
                                            </div>
                                            <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />

                                            <div className='text-right'>
                                                <a className="link link-hover !text-[var(--brownish)] hover:!text-amber-900 transition">Forgot password?</a>
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn !bg-[var(--brownish)] text-white !text-xs !font-semibold !uppercase mt-5 hover:!bg-[var(--offwhite)] hover:!text-[var(--darkgreen)] transition-all duration-300"
                                            >
                                                Login to your Account
                                            </button>
                                        </Form>

                                    </Formik>
                                </div>
                            </div>

                            <div className=" registerSection  card flex-1 flex flex-col justify-between shadow-2xl p-6">

                                <div className=''>
                                    <Formik onSubmit={handleSubmit} validationSchema={validationSchema} initialValues={{
                                        email: "",
                                        password: '',
                                        username: '',
                                        phone: ''

                                    }}>
                                        <Form className='bg-white flex flex-col gap-4'>
                                            <p className='!text-lg font-bold font-[roboto] text-center'>Register your Account</p>

                                            <label className='font-bold font-[roboto] text-xs !text-[var(--darkgreen)]'>Enter your Username</label>
                                            <label className="input validator bg-white relative">
                                                <FaUser className='!text-[var(--darkgreen)] absolute top-3.5 left-[-8px] z-10' />
                                                <Field type="text" name="username" placeholder="Username" className="bg-white form-control absolute top-0 w-full border-1 border-[var(--light)] p-2" />
                                            </label>
                                            <ErrorMessage name="username" component="div" className="text-red-500 text-xs" />

                                            <label className='font-bold font-[roboto] text-xs !text-[var(--darkgreen)]'>Enter your Phone Number</label>
                                            <label className="input validator bg-white relative">
                                                <FaUser className='!text-[var(--darkgreen)] absolute top-3.5 left-[-8px] z-10' />
                                                <Field type="text" name="phone" placeholder="Phone" className="bg-white form-control absolute top-0 w-full border-1 border-[var(--light)] p-2" />
                                            </label>
                                            <ErrorMessage name="phone" component="div" className="text-red-500 text-xs" />

                                            <label className='font-bold font-[roboto] text-xs !text-[var(--darkgreen)]'>Enter your Email Address</label>
                                            <label className="input validator bg-white relative">
                                                <IoMail className='!text-[var(--darkgreen)] absolute top-3.5 left-[-8px] z-10' />
                                                <Field type="email" name="email" placeholder="Email" className="bg-white form-control absolute top-0 w-full border-1 border-[var(--light)] p-2" />
                                            </label>
                                            <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />

                                            <label className='font-bold font-[roboto] text-xs !text-[var(--darkgreen)]'>Enter your Password</label>
                                            <label className="input validator bg-white relative">
                                                <FaKey className='!text-[var(--darkgreen)] absolute top-3.5 left-[-8px] z-10' />
                                                <Field type="password" name="password" placeholder="Password" className="bg-white form-control absolute top-0 w-full border-1 border-[var(--light)] p-2" />
                                            </label>
                                            <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />

                                            <button type="submit" className='btn !bg-[var(--brownish)] text-white !text-xs !font-semibold !uppercase mt-5 hover:!bg-[var(--offwhite)] hover:!text-[var(--darkgreen)] transition-all duration-300'>
                                                Register
                                            </button>
                                        </Form>

                                    </Formik>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}