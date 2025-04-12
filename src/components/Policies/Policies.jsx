import React from 'react'
import shipImg1 from '../../assets/imgs/p-1-1.png'
import shipImg2 from '../../assets/imgs/p-1-2.png'
import shipImg3 from '../../assets/imgs/p-1-3.png'
import shipImg4 from '../../assets/imgs/p-1-4.png'

export default function Policies() {
    return (
        <div className='policies container my-14'>
            <div className=' flex flex-col md:flex-row justify-center'>
                <div className=' grid grid-cols-1 md:grid-cols-4 gap-8'>
                    <div className='justify-center items-center flex flex-col gap-2'>
                        <img src={shipImg1} className='w-[70px]'></img>
                        <p className='font-[roboto] font-semibold text-lg m-0'>Free shipping</p>
                        <p className='font-[roboto] text-sm m-0'>Free Shipping for orders over $130.</p>
                    </div>
                    <div className=' justify-center items-center flex flex-col gap-2'>
                        <img src={shipImg2} className='w-[70px]'></img>
                        <p className='font-[roboto] font-semibold text-lg m-0'>Return Policy</p>
                        <p className='font-[roboto] text-sm m-0'>Within 30 days for an exchange.</p>
                    </div>
                    <div className='justify-center items-center flex flex-col gap-2'>
                        <img src={shipImg3} className='w-[70px]'></img>
                        <p className='font-[roboto] font-semibold text-lg m-0'>Save Money</p>
                        <p className='font-[roboto] text-sm m-0'>Shop smart and save bigger.</p>
                    </div>
                    <div className='justify-center items-center flex flex-col gap-2'>
                        <img src={shipImg4} className='w-[70px]'></img>
                        <p className='font-[roboto] font-semibold text-lg m-0'>Support 24/7</p>
                        <p className='font-[roboto] text-sm m-0'>Support 24 hours a day, 7 days a week.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
