import React from 'react'
import logoImg from "../../assets/imgs/logo.webp"
import { CiSearch, CiShoppingCart, CiStar, CiUser } from 'react-icons/ci'
import styles from "./index.module.css"

export default function Header() {
    return (
        <header className={styles.myHeader}>
            <div className='container col-12 d-flex justify-content-between align-items-center w-100 p-4'>
                <div className='d-flex logo'>
                    <img src={logoImg} alt="" className={styles.logo}/>
                </div>
                <div className='allDropdowns d-flex gap-5'>
                    <div className="dropdown">
                        <button className="btn btn-transparent dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Home
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-transparent dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Shop
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-transparent dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Products
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-transparent dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            About Us
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-transparent dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Profile
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
                <div className='icons d-flex gap-3 '>
                    <CiSearch size={24} className={styles.icon} />
                    <CiUser size={24} className={styles.icon}/>
                    <CiShoppingCart size={24} className={styles.icon} />
                    <CiStar size={24} className={styles.icon}/>
                </div>
            </div>
        </header>
    )
}
