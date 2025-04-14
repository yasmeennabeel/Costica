import React from 'react'
import bgImg from '../../assets/imgs/blog-7-660x434.jpg'
import styles from './Subscribe.module.css'
export default function Subscribe() {
    return (
        <div className='subSection my-12 '>
            <div className={`${styles.bgImg} w-full relative bg-cover bg-center h-[80vh]`}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-white p-8 flex justify-center items-center h-full">
                    <div className='text-center'>
                        <p className='capitalize font-bold font-[roboto] text-4xl '>Don't want to miss our <br></br>promos and new products?</p>
                        <p className='font-[roboto] text-sm'>Join now for the inside track on our latest offers!</p>
                        <div className='relative '>
                            <input placeholder='Enter Your Email' className='form-control bg-white text-gray-500 font-[roboto] p-3 rounded w-full'></input>
                            <button className='bg-[var(--brownish)] transition absolute right-1 py-2.5 px-4 rounded top-1 text-xs font-[roboto] hover:bg-amber-900 font-semibold '>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
