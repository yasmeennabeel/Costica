import React from 'react'
import back from '../../assets/imgs/back.png'
import model1 from '../../assets/imgs/model.webp'
import Shopping from '../../components/ShoppingItems/Shopping'

export default function ShopPage() {
    return (
        <div className='shopPage '>
            <div className='flex justify-end'>
                <img src={back} className=' object-cover'></img>
            </div>
            <div className="transition text-center breadcrumbs flex flex-col items-center justify-center">
                <p className='font-[roboto] font-bold uppercase text-3xl mb-2'>Shop</p>
                <ul className='flex gap-2 text-xs'>
                    <li className='font-[roboto] hover:text-[var(--brownish)] hover:font-bold'><a>Home</a></li>
                    <li className='font-[roboto] hover:text-[var(--brownish)] hover:font-bold'><a>Shop</a></li>
                </ul>
            </div>
            <div className=' container grid grid-cols-1 md:grid-cols-4 gap-3'>
                <div className='flex flex-col text-center gap-2 justify-center items-center'>
                    <div className='overflow-hidden '>
                        <img src={model1} className='rounded-full w-[150px] md:w-[200px] transition-transform duration-500 ease-all transform hover:scale-90 hover:translate-1 cursor-pointer'></img>
                    </div>
                    <p className='text-sm font-[roboto] m-0 font-bold hover:text-[var(--brownish)] cursor-pointer'>Face Serums</p>
                    <p className='text-xs font-[roboto]'>19 products</p>
                </div>
                <div className='flex flex-col text-center gap-2 justify-center items-center'>
                    <div className='overflow-hidden '>
                        <img src={model1} className='rounded-full w-[150px] md:w-[200px] transition-transform duration-500 ease-all transform hover:scale-90 hover:translate-1 cursor-pointer'></img>
                    </div>
                    <p className='text-sm font-[roboto] m-0 font-bold hover:text-[var(--brownish)] cursor-pointer'>Face Serums</p>
                    <p className='text-xs font-[roboto]'>19 products</p>
                </div>
                <div className='flex flex-col text-center gap-2 justify-center items-center'>
                    <div className='overflow-hidden '>
                        <img src={model1} className='rounded-full w-[150px] md:w-[200px] transition-transform duration-500 ease-all transform hover:scale-90 hover:translate-1 cursor-pointer'></img>
                    </div>
                    <p className='text-sm font-[roboto] m-0 font-bold hover:text-[var(--brownish)] cursor-pointer'>Face Serums</p>
                    <p className='text-xs font-[roboto]'>19 products</p>
                </div>
                <div className='flex flex-col text-center gap-2 justify-center items-center'>
                    <div className='overflow-hidden '>
                        <img src={model1} className='rounded-full w-[150px] md:w-[200px] transition-transform duration-500 ease-all transform hover:scale-90 hover:translate-1 cursor-pointer'></img>
                    </div>
                    <p className='text-sm font-[roboto] m-0 font-bold hover:text-[var(--brownish)] cursor-pointer'>Face Serums</p>
                    <p className='text-xs font-[roboto]'>19 products</p>
                </div>
            </div>
            <Shopping></Shopping>
        </div>
    )
}
