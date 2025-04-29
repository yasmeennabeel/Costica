import React, { useEffect, useState } from 'react'
import back from '../../assets/imgs/back.png'
import ProductCard from '../ProductCard/ProductCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useCategories } from '../../store';
import axios from 'axios';
export default function ShopHome() {
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
    <div className='shopHome  my-12' data-aos="fade-up">
      <div className='bg-contain bg-no-repeat bg-right  w-full h-64' style={{ backgroundImage: `url(${back})` }}>

        <div className='flex flex-col justify-center align-center text-center gap-3'>
          <p className='m-0 uppercase text-sm'>Products</p>
          <h4 className='font-bold !text-3xl m-0'>New Arrivals</h4>
        </div>
      </div>

      <div className='container grid grid-cols-1 md:grid-cols-4'>
        {
          products.map((el) => {
            return <ProductCard key={el.documentId} name={el.product_name} price={el.product_price} imgUrl={domain + el.product_img.url} product={el}></ProductCard>
          })
        }
      </div>
    </div>
  )
}
