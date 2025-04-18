import React from 'react'
import back from '../../assets/imgs/back.png'
import model1 from '../../assets/imgs/model.webp'
import Shopping from '../../components/ShoppingItems/Shopping'
import { useCategories } from '../../store';
import NavProduct from '../../components/NavProduct/NavProduct';
import styles from './ShopPage.module.css'
import { useNavigate } from 'react-router-dom';
export default function ShopPage() {
    const { data: appCategories } = useCategories();
    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path)
    }
    return (
        <div className='shopPage '>
            <NavProduct></NavProduct>

            <div className='container flex flex-wrap col-12 justify-center items-center text-center '>
                {
                    appCategories.map((el) => (
                        <div onClick={()=>{handleClick(el.path)}} className='col-10 col-md-3 justify-center items-center text-center'>
                            <div className={`'p-3 ' ${styles.catCard}`}>
                                <div className='flex flex-col gap-3 justify-center items-center'>
                                    <div className='overflow-hidden'>
                                        <img src={el.imgUrl} alt="" className='transition-transform duration-500 ease-all transform hover:scale-90 hover:translate-1 cursor-pointer' />

                                    </div>
                                    <p key={el.documentId} className='font-[roboto] text-md font-bold hover:!text-[var(--brownish)] transition cursor-pointer'>{el.name}</p>
                                </div>


                            </div>
                        </div>
                    ))
                }
            </div>
            <Shopping></Shopping>
        </div>
    )
}
