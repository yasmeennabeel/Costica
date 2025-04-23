import React, { useEffect, useState } from 'react'
import back from '../../assets/imgs/back.png'
import model1 from '../../assets/imgs/model.webp'
import Shopping from '../../components/ShoppingItems/Shopping'
import { useCategories } from '../../store';
import NavProduct from '../../components/NavProduct/NavProduct';
import styles from './ShopPage.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'aos/dist/aos.css'
import Aos from 'aos';
export default function ShopPage() {
      useEffect(() => {
        Aos.init({
          duration: 900,
          once: false
        });
      }, []);

    // const { data: appCategories,
    const {domain, setData, setActiveCategory } = useCategories();
    const navigate = useNavigate();
    const handleClick = (documentId) => {
        navigate(documentId)
        setActiveCategory(documentId)
    }

    const [appCategories, setAppCategories] = useState([]);


    const getData = () => {
        let endpoint = "/api/categories"
        let url = domain + endpoint;

        axios.get(url, {
            params: {
                populate: '*'
            }
        }).then((res) => {
            setAppCategories(res.data.data)
        })
    }

    useEffect(() => {
        getData();
    })

    return (
        <div className='shopPage ' data-aos="fade-up">
            <NavProduct></NavProduct>

            <div className='container flex flex-wrap col-12 justify-center items-center text-center '>
                {
                    appCategories.map((el) => (
                        <div key={el.documentId} onClick={() => { handleClick(el.documentId) }} className='col-10 col-md-3 justify-center items-center text-center'>
                            <div className={`'p-3 ' ${styles.catCard}`}>
                                <div className='flex flex-col gap-3 justify-center items-center'>
                                    <div className='overflow-hidden'>
                                        <img src={domain + el.category_img.url} alt="" className='transition-transform duration-500 ease-all transform hover:scale-90 hover:translate-1 cursor-pointer' />

                                    </div>
                                    <p className='font-[roboto] text-md font-bold hover:!text-[var(--brownish)] transition cursor-pointer'>{el.category_name}</p>
                                </div>


                            </div>
                        </div>
                    ))
                }
            </div>
            <Shopping></Shopping>
            <br></br>
        </div>
    )
}
