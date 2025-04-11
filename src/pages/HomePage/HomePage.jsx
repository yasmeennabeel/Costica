import React from 'react'
import mainModel from '../../assets/imgs/mainModel.webp';
import mainPagePhoto from '../../assets/imgs/mainPagePhoto.webp';
import styles from './HomePage.module.css'
import Products from '../../components/Products';
import ShopItems from '../../components/ShopItems/ShopItems';
import Story from '../../components/Story/Story';


export default function HomePage() {
  return (
    <>
        <div className="w-full min-h-screen  flex flex-col md:flex-row justify-between items-center md:items-stretch gap-6">
         <div className=' grid grid-cols-1 md:grid-cols-3'>
         <div className=" items-center flex justify-center">
            <img src={mainPagePhoto} alt="Left Image" className="max-w-full h-full"/>
          </div>
          <div className=" flex flex-col text-center px-4 md:text-left justify-center items-center ">
            <p className="text-2xl font-light uppercase mt-2">For the beauty of youth</p>
            <h1 className="text-4xl md:text-5xl font-bold capitalize mt-3">Discover the secrets of luminous skin</h1>
            <p className="text-lg md:text-xl my-3 px-2 md:px-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolore, tenetur tempora et id quia distinctio magnam nesciunt laboriosam.
            </p>
            <button className='bg-[var(--offwhite)] hover:bg-[var(--brownish)] transition hover:text-white text-xl py-3 mb-2 px-8 border-0 rounded  shadow-2xl cursor-pointer'>Shop Now</button>
          </div>
          <div className=" items-start flex justify-center">
            <img src={mainModel} alt="Right Image" className="max-w-full h-full"  />
          </div>
         </div>
        </div>
        <div className='hidden md:flex'>
          <marquee behavior="scroll" direction="left" width="100%">Save Money | Free Shipping | Return Policy | Support 24/7</marquee>

        </div>

        <Products></Products>
        <ShopItems></ShopItems>
        <Story></Story>


    </>
  )
}
