import React, { useEffect, useState } from 'react'
import cardImg from '../../assets/imgs/product-10.jpg'

import Filter from '../Filter/Filter';
import ProductCard from '../ProductCard/ProductCard';
import { useCart, useCategories } from '../../store';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function Shopping() {
    const params = useParams();
    const { domain } = useCategories();
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        let endpoint = `/api/products`
        let url = domain + endpoint;
        axios.get(url, {
            params: {
                populate: '*'
            }
        }).then((res)=>{
            setProducts(res.data.data)
        }).catch(()=>{
            navigate('/error')
        })
    })


    return (
        <div className='shopping container' data-aos="fade-up">
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 my-16'>
                <Filter></Filter>

                <div className='overflow-auto sm:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>

                    {
                     products.map((el)=>{
                        return   <ProductCard key={el.documentId} name={el.product_name} price={el.product_price} 
                        imgUrl={  el.product_img.url &&  (domain + el.product_img.url)} product = {el}></ProductCard>
                     })
                    }
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
            <br></br>

        </div>
    )
}
