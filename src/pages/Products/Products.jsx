import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import NavProduct from '../../components/NavProduct/NavProduct';
import { useCategories } from '../../store';
import axios from 'axios';
import ProductCard from '../../components/ProductCard/ProductCard';

export default function Products() {

    const params = useParams();

    const {domain, resetActiveCategory } = useCategories();
    const navigate = useNavigate();

    const [check, setCheck] = useState(true);
    const [categoryInfo, setCategoryInfo] = useState({})


    useEffect(() => {
        let documentId = params.id;
        let endpoint = `/api/categories/${documentId}`
        let url = domain + endpoint
        axios.get(url, {params: {
            populate: {
                products: {
                    populate: "*"
                }
            }
        }}).then((res) => {
            console.log(res)
            setCategoryInfo(res.data.data);
            setCheck(true);
            
        }).catch(()=>{
            navigate('/error');
        })
        
        return () => {
            // will be executed after component is unmounted
            resetActiveCategory();
        }
 
    }, [])
    return (
        check && <div className='products overflow-auto'>
            <NavProduct tabName={(categoryInfo.category_name)}></NavProduct>
          <div className='flex md:flex-row flex-col justify-center gap-5'>
            {
               categoryInfo.products && categoryInfo.products.map((el)=>{
                    return(
                        <ProductCard key={el.documentId} name={el.product_name} price={el.product_price} imgUrl={domain + el.product_img.url} product={el}></ProductCard>
                    )
                })
            }
            {
                     categoryInfo.products &&  categoryInfo.products.length == 0 && <h1>There are no products in this category</h1>
            }
</div>
        </div>
    )
}
