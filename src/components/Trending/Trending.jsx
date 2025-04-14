import React from 'react'
import modelImg1 from '../../assets/imgs/img-1-17.jpg'
import modelImg2 from '../../assets/imgs/img-1-18.jpg'
import modelImg3 from '../../assets/imgs/img-1-10.jpg'
import prodImg1 from '../../assets/imgs/product-19.jpg'

export default function Trending() {
    return (
        <div className='trendingSection flex flex-col my-12'>
            <div className='flex  flex-col text-center my-8'>
                <p className='text-xs uppercase font-[roboto]'>Your amazing Beauty</p>
                <p className='text-3xl font-bold font-[roboto]'>Trending Now</p>
            </div>
            <div className='container flex flex-col md:grid md:grid-cols-3 gap-6 items-stretch '>

                <div className='leftCarousel  col-span-1 h-full overflow-hidden'>
                    <img src={modelImg1} className='w-full h-full object-cover rounded-xl transition-transform duration-500 ease-all transform hover:scale-110 hover:translate-1 cursor-pointer'></img>

                </div>

                <div className='rightProducts col-span-2 grid  grid-cols-2 gap-4'>
                    <div className="grid grid-cols-2 shadow-sm bg-white p-2 rounded-lg">
                        <figure>
                            <div className='overflow-hidden'>
                                <img
                                    src={prodImg1}
                                    alt="Movie" className='rounded-xl transition-transform duration-500 ease-all transform hover:scale-110 hover:translate-1 cursor-pointer' />
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="card-title text-xs font-[roboto] m-0 p-0 hover:text-[var(--brownish)]">Brightening Face Oil</p>
                            <p className='text-xs font-[roboto] m-0 p-0'>$29.00</p>

                        </div>
                    </div>
                    <div className="grid grid-cols-2 shadow-sm">
                        <figure>
                            <div className='overflow-hidden'>
                                <img
                                    src={prodImg1}
                                    alt="Movie" className='rounded-xl transition-transform duration-500 ease-all transform hover:scale-110 hover:translate-1 cursor-pointer' />
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="card-title text-xs font-[roboto] m-0 p-0 hover:text-[var(--brownish)]">Brightening Face Oil</p>
                            <p className='text-xs font-[roboto] m-0 p-0'>$29.00</p>

                        </div>
                    </div>
                    <div className="grid grid-cols-2 shadow-sm">
                        <figure>
                            <div className='overflow-hidden'>
                                <img
                                    src={prodImg1}
                                    alt="Movie" className='rounded-xl transition-transform duration-500 ease-all transform hover:scale-110 hover:translate-1 cursor-pointer' />
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="card-title text-xs font-[roboto] m-0 p-0 hover:text-[var(--brownish)]">Brightening Face Oil</p>
                            <p className='text-xs font-[roboto] m-0 p-0'>$29.00</p>

                        </div>
                    </div><div className="grid grid-cols-2 shadow-sm">
                        <figure>
                            <div className='overflow-hidden'>
                                <img
                                    src={prodImg1}
                                    alt="Movie" className='rounded-xl transition-transform duration-500 ease-all transform hover:scale-110 hover:translate-1 cursor-pointer' />
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="card-title text-xs font-[roboto] m-0 p-0 hover:text-[var(--brownish)]">Brightening Face Oil</p>
                            <p className='text-xs font-[roboto] m-0 p-0'>$29.00</p>

                        </div>
                    </div><div className="grid grid-cols-2 shadow-sm">
                        <figure>
                            <div className='overflow-hidden'>
                                <img
                                    src={prodImg1}
                                    alt="Movie" className='rounded-xl transition-transform duration-500 ease-all transform hover:scale-110 hover:translate-1 cursor-pointer' />

                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="card-title text-xs font-[roboto] m-0 p-0 hover:text-[var(--brownish)]">Brightening Face Oil</p>
                            <p className='text-xs font-[roboto] m-0 p-0'>$29.00</p>

                        </div>
                    </div><div className="grid grid-cols-2 shadow-sm">
                        <figure>
                            <div className='overflow-hidden'>
                                <img
                                    src={prodImg1}
                                    alt="Movie" className='rounded-xl transition-transform duration-500 ease-all transform hover:scale-110 hover:translate-1 cursor-pointer' />

                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="card-title text-xs font-[roboto] m-0 p-0 hover:text-[var(--brownish)]">Brightening Face Oil</p>
                            <p className='text-xs font-[roboto] m-0 p-0'>$29.00</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
