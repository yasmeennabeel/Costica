import React from 'react'
import cardImg from '../../assets/imgs/product-10.jpg'

export default function Shopping() {
    return (
        <div className='shopping'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div className='hidden md:block'>
                    Filter
                </div>
                <div className='sm:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                    <div className="card bg-base-100  border-0">
                        <figure className="px-10 pt-10 ">
                            <div className='relative'>
                                <div className="badge outline-0 border-0 px-3 absolute top-0 left-0 text-white bg-green-600 font-[roboto] m-0  font-extralight uppercase">New</div>
                                <img
                                    src={cardImg}
                                    alt="Lipstick"
                                    className="rounded-xl " />
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
                            <div className='relative'>
                                <div className="badge outline-0 border-0 px-3 absolute top-0 left-0 text-white bg-green-600 font-[roboto] m-0  font-extralight uppercase">New</div>
                                <img
                                    src={cardImg}
                                    alt="Lipstick"
                                    className="rounded-xl " />
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
                            <div className='relative'>
                                <div className='absolute top-0 left-0 flex gap-1'>
                                    <div className="badge outline-0 border-0 px-3  text-white bg-green-600 font-[roboto] m-0  font-extralight uppercase">New</div>
                                    <div className="badge outline-0 border-0 px-3 text-white bg-red-600 font-[roboto] m-0  font-extralight uppercase">-17% </div>
                                </div>
                                <img
                                    src={cardImg}
                                    alt="Lipstick"
                                    className="rounded-xl " />
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
                            <div className='relative'>
                                <div className='absolute top-0 left-0 flex gap-1'>
                                    <div className="badge outline-0 border-0 px-3  text-white bg-green-600 font-[roboto] m-0  font-extralight uppercase">New</div>
                                    <div className="badge outline-0 border-0 px-3 text-white bg-red-600 font-[roboto] m-0  font-extralight uppercase">-17% </div>
                                </div>
                                <img
                                    src={cardImg}
                                    alt="Lipstick"
                                    className="rounded-xl " />
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
        </div>
    )
}
