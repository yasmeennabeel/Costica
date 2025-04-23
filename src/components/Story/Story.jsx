import React from 'react'
import serumImg from '../../assets/imgs/img-1-3.jpg'
import handImg from '../../assets/imgs/img-1-4.jpg'
import creamImg from '../../assets/imgs/img-1-5.jpg'
export default function Story() {
    return (
        <div className='storySection my-9'  data-aos="fade-up">
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='storyLeft flex flex-col justify-end  text-center items-center'>
                    <div className='storyTop '>
                        <p className='text-md font-light font-[roboto] uppercase'>Our Story</p>
                        <h3 className='text-3xl font-bold font-[roboto] mt-4'>Our Comprehensive Innovation</h3>
                        <p className='mt-4 text-sm font-[roboto] leading-relaxed'>“Cosmetics are not just about vanity, but a form of self-expression, a way to feel confident and empowered. They are a gateway to unlocking one’s inner beauty and celebrating diversity in beauty standards.”</p>
                    </div>
                    <div className='storyBottom grid grid-cols-1 md:grid-cols-2  mt-8'>
                        <div className='overflow-hidden'>
                            <img src={serumImg} className='w-full object-cover cursor-pointer transition-transform duration-500 ease-all transform hover:scale-110 hover:translate-1'></img>

                        </div>
                        <div className='overflow-hidden'>
                            <img src={handImg} className='w-full object-cover cursor-pointer transition-transform duration-500 ease-all transform hover:scale-110 hover:translate-1 '></img>

                        </div>
                    </div>
                </div>
                <div className='storyRight flex justify-center items-center overflow-hidden'>
                    <img src={creamImg} className='w-full object-cover cursor-pointer transition-transform duration-500 ease-all transform hover:scale-110 hover:translate-1 '></img>
                </div>
            </div>

        </div>
    )
}
