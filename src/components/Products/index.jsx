import React from 'react'
import styles from "./index.module.css"
import backImg from "../../assets/imgs/back.png"

export default function Products() {
    return (
        <div className='products col-12'>
            <div className={`${styles.back}  col-12`}>
                <div className='d-flex justify-content-end '>
                    <img src={backImg} className={styles.backImg}></img>
                </div>
                <div className='d-flex flex-grow-1 flex-column justify-content-center align-items-center text-center'>
                    <p>Products</p>
                    <h4 className='fw-bold fs-2'>New Arrivals</h4>
                </div>

            </div>
        </div>
    )
}
