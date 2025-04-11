import React from 'react'
import styles from "./index.module.css"
import backImg from "../../assets/imgs/back.png"

export default function Products() {
    return (
        <div className='products '>
            <div className='w-full'>
                <div className='flex justify-end'>
                    <img src={backImg} className={styles.backImg}></img>
                </div>
                <div className='flex grow flex-col justify-center align-center text-center'>
                    <p>Products</p>
                    <h4 className='font-bold text-8xl'>New Arrivals</h4>
                </div>

            </div>
        </div>
    )
}
