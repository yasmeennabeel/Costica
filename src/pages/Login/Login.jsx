import React from 'react'
import back from '../../assets/imgs/back.png'
import { IoMail } from 'react-icons/io5'
import { FaKey, FaUser } from 'react-icons/fa'
import Footer from '../../components/Footer';



export default function Login() {
    return (
        <div className='login'>
            <div className=''>
                <div className='relative'>
                    <div className='flex justify-end'>
                        <img src={back} className=' object-cover'></img>
                    </div>
                    <div className="md:absolute md:top-1/2 md:left-1/2 transition text-center breadcrumbs flex flex-col items-center justify-center">
                        <p className='font-[roboto] font-bold uppercase text-3xl mb-2'>My Account</p>
                        <ul className='flex gap-2 text-xs'>
                            <li className='font-[roboto] hover:text-[var(--brownish)] hover:font-bold'><a>Home</a></li>
                            <li className='font-[roboto] hover:text-[var(--brownish)] hover:font-bold'><a>Account</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <div className='loginSection '>
                    <div className="hero min-h-screen text-black">
                        <div className="hero-content flex-col lg:flex-row ">
                            <div className="loginSection card w-full max-w-sm shrink-0 shadow-2xl">
                                <div className="card-body ">
                                    <fieldset className="fieldset gap-4">
                                        <label className='font-bold font-[roboto] text-xs'>Enter your Username or E-mail address</label>
                                        <label className="input validator bg-white relative ">
                                            <IoMail className='text-black absolute top-3.5 left-[-8px] z-10' />
                                            <input type="email" placeholder="mail@site.com" required className="bg-white form-control absolute top-0 w-full border-1 border-[var(--light)] p-2" />
                                        </label>
                                        <label className='font-bold font-[roboto] text-xs'>Enter your Password</label>
                                        <label className="input validator bg-white relative">
                                            <FaKey className='text-black absolute top-3.5 left-[-8px] z-10' />
                                            <input type="password" required placeholder="Password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" className='bg-white absolute form-control top-0 w-full border-1 border-[var(--light)] p-2' />
                                        </label>
                                        <p className="validator-hint hidden">
                                            Must be more than 8 characters, including
                                            <br />At least one number
                                            <br />At least one lowercase letter
                                            <br />At least one uppercase letter
                                        </p>
                                        <div><a className="link link-hover !text-[var(--brownish)] !hover:text-amber-900 transition">Forgot password?</a></div>
                                        <button className="btn !bg-[var(--brownish)] text-white !text-xs !font-semibold !uppercase mt-4 !hover:bg-[var(--light)] ">Login to your Account</button>
                                    </fieldset>
                                </div>
                            </div>
                            <div className=" registerSection card w-full text-black max-w-sm shrink-0 shadow-2xl">
                                <div className="card-body ">
                                    <fieldset className="fieldset gap-4">
                                        <label className='font-bold font-[roboto] text-xs'>Enter your Username</label>
                                        <label className="input validator bg-white relative ">
                                            <FaUser className='text-black absolute top-3.5 left-[-8px] z-10' />
                                            <input type="email" placeholder="mail@site.com" required className="bg-white form-control absolute top-0 w-full border-1 border-[var(--light)] p-2" />
                                        </label>
                                        <label className='font-bold font-[roboto] text-xs'>Enter your E-mail address</label>
                                        <label className="input validator bg-white relative ">
                                            <IoMail className='text-black absolute top-3.5 left-[-8px] z-10' />
                                            <input type="email" placeholder="mail@site.com" required className="bg-white form-control absolute top-0 w-full border-1 border-[var(--light)] p-2" />
                                        </label>
                                        <label className='font-bold font-[roboto] text-xs'>Enter your Password</label>
                                        <label className="input validator bg-white relative">
                                            <FaKey className='text-black absolute top-3.5 left-[-8px] z-10' />
                                            <input type="password" required placeholder="Password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" className='bg-white absolute form-control top-0 w-full border-1 border-[var(--light)] p-2' />
                                        </label>
                                        <p className="validator-hint hidden">
                                            Must be more than 8 characters, including
                                            <br />At least one number
                                            <br />At least one lowercase letter
                                            <br />At least one uppercase letter
                                        </p>
                                        <div><a className="link link-hover !text-[var(--brownish)] !hover:text-amber-900 transition">Forgot password?</a></div>
                                        <button className="btn !bg-[var(--brownish)] text-white !text-xs !font-semibold !uppercase mt-4 !hover:bg-[var(--light)] ">Register new Account</button>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

<Footer></Footer>
        </div>
    )
}
