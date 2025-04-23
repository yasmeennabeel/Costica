import React, { useEffect, useState } from 'react'
import modelImg1 from '../../assets/imgs/img-1-17.jpg'
import modelImg2 from '../../assets/imgs/img-1-18.jpg'
import modelImg3 from '../../assets/imgs/img-1-10.jpg'
import prodImg1 from '../../assets/imgs/product-19.jpg'
import { useNavigate, useParams } from 'react-router-dom'
import { useCategories } from '../../store'
import axios from 'axios'
import ProductCard from '../ProductCard/ProductCard'

export default function Trending() {
    const params = useParams();
    const { domain } = useCategories();
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        let endpoint = `/api/products`
        let url = domain + endpoint;
        axios.get(url, {
            params: {
                populate: '*',
                'pagination[limit]': 4
            }
        }).then((res) => {
            setProducts(res.data.data)
        }).catch(() => {
            navigate('/error')
        })
    })

    return (
        <div className='trendingSection flex flex-col my-12'  data-aos="fade-up">
            <div className='flex  flex-col text-center my-8'>
                <p className='text-xs uppercase font-[roboto]'>Your amazing Beauty</p>
                <p className='text-3xl font-bold font-[roboto]'>Trending Now</p>
            </div>
            <div className='container grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch justify-center '>

                <div className='leftCarousel flex col-span-1 h-full overflow-hidden'>
                    <img src={modelImg1} className='w-full h-full object-cover rounded-xl transition-transform duration-500 ease-all transform hover:scale-110 hover:translate-1 cursor-pointer'></img>

                </div>

                <div className='rightProducts col-span-2 grid grid-cols-1 gap-2 md:grid-cols-2 '>

                    {
                        products.map((el) => {
                            return <ProductCard key={el.documentId} name={el.product_name} price={el.product_price} imgUrl={domain + el.product_img.url} product={el}></ProductCard>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
