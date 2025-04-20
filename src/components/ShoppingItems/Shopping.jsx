import React from 'react'
import cardImg from '../../assets/imgs/product-10.jpg'

import Filter from '../Filter/Filter';
import ProductCard from '../ProductCard/ProductCard';

export default function Shopping() {
    return (
        <div className='shopping container'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 my-16'>
                <Filter></Filter>

                <div className='overflow-auto sm:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>

                    <ProductCard></ProductCard>

                </div>

            </div>
            <div className='flex justify-center my-4'>
                <div className="join">
                    <button className="join-item btn btn-md hover:!bg-[var(--brownish)]">1</button>
                    <button className="join-item btn btn-md btn-active !bg-[var(--brownish)] hover:!bg-[var(--brownish)]">2</button>
                    <button className="join-item btn btn-md hover:!bg-[var(--brownish)] ">3</button>
                    <button className="join-item btn btn-md hover:!bg-[var(--brownish)]">4</button>
                </div>
            </div>
        </div>
    )
}
