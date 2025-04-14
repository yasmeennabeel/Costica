import React from 'react'
import cardImg from '../../assets/imgs/product-10.jpg'
import backImg from "../../assets/imgs/back.png"
export default function ShopHome() {
  return (
    <div className='shopHome  my-12'>
      <div className='flex justify-end'>
        <img src={backImg} className="w-max-[200px] h-auto  object-cover"></img>
      </div>
      <div className='flex flex-col justify-center align-center text-center'>
        <p>Products</p>
        <h4 className='font-bold text-8xl'>New Arrivals</h4>
      </div>

      <div className='container grid grid-cols-1 md:grid-cols-4'>
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
        <div className="card bg-base-100 border-0">
          <figure className="px-10 pt-10">
            <div className='relative overflow-hidden'>
              <div className='absolute top-0 left-0 flex gap-1'>
                <div className="badge outline-0 border-0 px-3 z-10 text-white bg-green-600 font-[roboto] m-0  font-extralight uppercase">New</div>
                <div className="badge outline-0 border-0 px-3 z-10 text-white bg-red-600 font-[roboto] m-0  font-extralight uppercase">-17% </div>
              </div>
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
            <div className='relative'>
              <div className='absolute top-0 left-0 flex gap-1'>
                <div className="badge outline-0 border-0 px-3 z-10 text-white bg-green-600 font-[roboto] m-0  font-extralight uppercase">New</div>
                <div className="badge outline-0 border-0 px-3 z-10 text-white bg-red-600 font-[roboto] m-0  font-extralight uppercase">-17% </div>
              </div>
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
  )
}
