import React, { useEffect } from 'react'
import { useSearchStore } from '../../store'
import ProductCard from '../../components/ProductCard/ProductCard';
import NavProduct from '../../components/NavProduct/NavProduct';

export default function Search() {
    // const { query, results, searchProducts } = useSearchStore();
    const query = useSearchStore((state) => state.query)
    const results = useSearchStore((state) => state.results)
    const searchProducts = useSearchStore((state) => state.searchProducts)
    useEffect(() => {
        if (query) {
            searchProducts(query)
        }
    }, [query, searchProducts])
    return (
        <div className=''>
            <NavProduct></NavProduct>
            {Array.isArray(results) && results.length > 0 ? (
                <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
                    {
                        results.map((product) => (
                            <ProductCard key={product.id}
                                product={product}
                                name={product.product_name}
                                price={product.product_price}
                                imgUrl={`http://localhost:1337${product.product_img?.url}`}></ProductCard>
                        ))
                    }
                </div>
            ) : (
                <p>No products found</p>
            )}
        </div>
    )
}
