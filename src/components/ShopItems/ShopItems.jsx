import React from 'react'
import cardImg from '../../assets/imgs/product-10.jpg'
import { CiStar } from 'react-icons/ci'

export default function ShopItems() {
  return (
    <div className='shopItems container my-12'>
      <div className='grid grid-cols-1 md:grid-cols-4'>
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

            <div className="card-actions w-full">
              <button className="w-full bg-[var(--white)] hover:bg-[var(--brownish)] transition hover:text-white font-[roboto] py-2 px-2 rounded shadow font-medium text-xs">Add to Cart</button>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
