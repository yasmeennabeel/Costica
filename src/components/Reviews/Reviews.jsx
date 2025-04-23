import React from 'react'
import review1 from '../../assets/imgs/testimonial-3-181x260.jpg'

export default function Reviews() {
    return (
        <div className='reviewsSections container my-16'  data-aos="fade-up">
            <div className=' flex flex-col text-center'>
            <p className='uppercase font-[roboto] '>Testimonials</p>
            <p className='font-[roboto] font-bold text-2xl md:text-4xl capitalize'>What our customers say</p>
          
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-8 justify-center'>
                <div className='justify-center items-center flex flex-col gap-4'>
                    <img src={review1} className='w-[80px] h-[80px] rounded-full'></img>
                    <p className='text-xs font-[roboto]  '>"The sunscreen is an absolute must-have for anyone seeking reliable sun protection. It feels super light on the skin, absorbs quickly, and doesn’t leave any sticky residue."
                    </p>
                    <p className='font-[roboto] font-bold m-0 '>Laura N. Leon</p>
                </div>
                <div className='justify-center items-center flex flex-col gap-4'>
                    <img src={review1} className='w-[80px] h-[80px] rounded-full'></img>
                    <p className='text-xs font-[roboto] '>"The sunscreen is an absolute must-have for anyone seeking reliable sun protection. It feels super light on the skin, absorbs quickly, and doesn’t leave any sticky residue."
                    </p>
                    <p className='font-[roboto] font-bold m-0 '>Laura N. Leon</p>
                </div>
                <div className='justify-center items-center flex flex-col gap-4'>
                    <img src={review1} className='w-[80px] h-[80px] rounded-full'></img>
                    <p className='text-xs font-[roboto] '>"The sunscreen is an absolute must-have for anyone seeking reliable sun protection. It feels super light on the skin, absorbs quickly, and doesn’t leave any sticky residue."
                    </p>
                    <p className='font-[roboto] font-bold m-0 '>Laura N. Leon</p>
                </div>

            </div>
            </div>
        </div>
    )
}
