import React from 'react'
import cardImg from '../../assets/imgs/product-10.jpg'
import { FaFilter } from 'react-icons/fa'
import { IoIosArrowDropup, IoMdArrowDropdown } from 'react-icons/io'
import Footer from '../../components/Footer';

export default function Shopping() {
    return (
        <div className='shopping'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div className='hidden md:flex md:flex-col container '>
                    <div className='flex gap-3 items-center text-center'>
                        <FaFilter className='hover:text-[var(--brownish)] hover:cursor-pointer' />
                        <p className='uppercase font-[roboto] font-semibold m-0 text-lg'>Filter by</p>
                    </div>
                    <div className='categories'>
                        <div className="dropdown dropdown-open">
                            <div className='flex  items-center '>
                                <div tabIndex={0} role="button" className="btn m-2 shadow-none !font-[roboto] !font-bold">Categories   </div>
                                <IoIosArrowDropup className='hover:text-[var(--brownish)] cursor-pointer' />
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu rounded-box z-1  shadow-sm ">
                                <div className='flex'>
                                    <input type="checkbox" defaultChecked className="checkbox-md " />
                                    <li className='font-[roboto] '><a>Body Care</a></li>
                                </div>
                                <div className='flex'>
                                    <input type="checkbox" defaultChecked className="checkbox-md " />
                                    <li className='font-[roboto] '><a>Eye Shadow</a></li>
                                </div>
                                <div className='flex'>
                                    <input type="checkbox" defaultChecked className="checkbox-md " />
                                    <li className='font-[roboto] '><a>Face Serums</a></li>
                                </div>
                                <div className='flex'>
                                    <input type="checkbox" defaultChecked className="checkbox-md " />
                                    <li className='font-[roboto] '><a>Facial Cream</a></li>
                                </div>
                            </ul>
                        </div>
                    </div>


                </div>

                <div className='sm:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                    <div className="card bg-base-100  border-0">
                        <figure className="px-10 pt-10 ">
                            <div className='relative overflow-hidden'>
                                <div className="badge outline-0 border-0 px-3 z-10 absolute top-0 left-0 text-white bg-green-600 font-[roboto] m-0  font-extralight uppercase">New</div>
                                <img
                                    src={cardImg}
                                    alt="Lipstick"
                                    className="rounded-xl transition-transform duration-500 ease-all transform hover:scale-90 hover:translate-1 cursor-pointer" />
                            </div>
                        </figure>
                        <div className="card-body justify-center items-center text-center">
                            <p className="card-title text-sm font-bold font-[roboto] ">Velvet Smooth Moisturizer</p>
                            <p className='text-black font-normal font-[roboto]'>$75.00</p>
                            <div className="rating ">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            </div>
                            <div className="card-actions w-full">
                                <button className="w-full bg-[var(--white)] hover:bg-[var(--brownish)] transition hover:text-white font-[roboto] py-2 px-2 rounded shadow font-medium text-xs">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100  border-0">
                        <figure className="px-10 pt-10">
                            <div className='relative overflow-hidden'>
                                <div className="badge outline-0 border-0 px-3 z-10 absolute top-0 left-0 text-white bg-green-600 font-[roboto] m-0  font-extralight uppercase">New</div>
                                <img
                                    src={cardImg}
                                    alt="Lipstick"
                                    className="rounded-xl transition-transform duration-500 ease-all transform hover:scale-90 hover:translate-1 cursor-pointer" />
                            </div>
                        </figure>
                        <div className="card-body justify-center items-center text-center">
                            <p className="card-title text-sm font-bold font-[roboto] ">Velvet Smooth Moisturizer</p>
                            <p className='text-black font-normal font-[roboto]'>$75.00</p>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            </div>
                            <div className="card-actions w-full">
                                <button className="w-full bg-[var(--white)] hover:bg-[var(--brownish)] transition hover:text-white font-[roboto] py-2 px-2 rounded shadow font-medium text-xs">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 border-0">
                        <figure className="px-10 pt-10">
                            <div className='relative overflow-hidden'>
                                <div className="badge outline-0 border-0 px-3 z-10 absolute top-0 left-0 text-white bg-green-600 font-[roboto] m-0  font-extralight uppercase">New</div>
                                <img
                                    src={cardImg}
                                    alt="Lipstick"
                                    className="rounded-xl transition-transform duration-500 ease-all transform hover:scale-90 hover:translate-1 cursor-pointer" />
                            </div>
                        </figure>
                        <div className="card-body justify-center items-center text-center">
                            <p className="card-title text-sm font-bold font-[roboto] ">Velvet Smooth Moisturizer</p>
                            <p className='text-black font-normal font-[roboto]'>$75.00</p>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            </div>
                            <div className="card-actions w-full">
                                <button className="w-full bg-[var(--white)] hover:bg-[var(--brownish)] transition hover:text-white font-[roboto] py-2 px-2 rounded shadow font-medium text-xs">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100  border-0">
                        <figure className="px-10 pt-10">
                            <div className='relative overflow-hidden'>
                                <div className="badge outline-0 border-0 px-3 z-10 absolute top-0 left-0 text-white bg-green-600 font-[roboto] m-0  font-extralight uppercase">New</div>
                                <img
                                    src={cardImg}
                                    alt="Lipstick"
                                    className="rounded-xl transition-transform duration-500 ease-all transform hover:scale-90 hover:translate-1 cursor-pointer" />
                            </div>
                        </figure>
                        <div className="card-body justify-center items-center text-center">
                            <p className="card-title text-sm font-bold font-[roboto] ">Velvet Smooth Moisturizer</p>
                            <p className='text-black font-normal font-[roboto]'>$75.00</p>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            </div>
                            <div className="card-actions w-full">
                                <button className="w-full bg-[var(--white)] hover:bg-[var(--brownish)] transition hover:text-white font-[roboto] py-2 px-2 rounded shadow font-medium text-xs">Add to Cart</button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <div className='flex justify-center my-4'>
                <div className="join">
                    <button className="join-item btn btn-md">1</button>
                    <button className="join-item btn btn-md btn-active !hover:bg-[var(--brownish)]">2</button>
                    <button className="join-item btn btn-md">3</button>
                    <button className="join-item btn btn-md">4</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
