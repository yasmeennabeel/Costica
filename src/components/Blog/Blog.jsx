import React from 'react'
import blogImg1 from '../../assets/imgs/blog-5-660x434.jpg'

export default function Blog() {
    return (
        <div className='blog container my-16'  data-aos="fade-up">
            <div className='text-center'>
                <p className='uppercase font-[roboto]'>blog</p>
                <p className='capitalize font-[roboto] font-bold text-4xl'>Our latest News updates</p>
                <div className='blogSections grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className='update flex flex-col justify-center  gap-4'>
                        <div className='overflow-hidden rounded '>
                            <img src={blogImg1} className=' object-cover cursor-pointer transition-transform duration-500 ease-all transform hover:scale-110 hover:translate-1'></img>
                        </div>
                        <div className=' flex  flex-col items-start gap-2 '>
                        <p className='font-[roboto] font-bold hover:text-[var(--brownish)] cursor-pointer m-0'>Cosmetics secrets to elevate your glow</p>
                        <p className='text-start font-[roboto] text-sm text-gray-500 m-0'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa unde rem ipsa asperiores illo nihil </p>
                        <button className='m-0 font-[roboto] hover:text-[var(--brownish)] font-bold rounded transition cursor-pointer'>Read More</button>
                        </div>
                    </div>
                    <div className='update flex flex-col justify-center  gap-4'>
                        <div className='overflow-hidden rounded '>
                            <img src={blogImg1} className=' object-cover cursor-pointer transition-transform duration-500 ease-all transform hover:scale-110 hover:translate-1'></img>
                        </div>
                        <div className=' flex  flex-col items-start gap-2'>
                        <p className='font-[roboto] font-bold hover:text-[var(--brownish)] cursor-pointer m-0'>Cosmetics secrets to elevate your glow</p>
                        <p className='text-start font-[roboto] text-sm text-gray-500 m-0'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa unde rem ipsa asperiores illo nihil </p>
                        <button className='m-0 font-[roboto] hover:text-[var(--brownish)] font-bold rounded transition cursor-pointer'>Read More</button>
                        </div>
                    </div>  <div className='update flex flex-col justify-center  gap-4'>
                        <div className='overflow-hidden rounded '>
                            <img src={blogImg1} className=' object-cover cursor-pointer transition-transform duration-500 ease-all transform hover:scale-110 hover:translate-1'></img>
                        </div>
                        <div className=' flex  flex-col items-start gap-2'>
                        <p className='font-[roboto] font-bold hover:text-[var(--brownish)] cursor-pointer m-0'>Cosmetics secrets to elevate your glow</p>
                        <p className='text-start font-[roboto] text-sm text-gray-500 m-0'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa unde rem ipsa asperiores illo nihil </p>
                        <button className='m-0 font-[roboto] hover:text-[var(--brownish)] font-bold rounded transition cursor-pointer'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
