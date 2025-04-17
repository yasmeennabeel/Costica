import React, { useState } from 'react'
import logoImg from "../../assets/imgs/logo.webp"
import { CiMenuBurger, CiSearch, CiShoppingCart, CiStar, CiUser } from 'react-icons/ci'
import styles from "./index.module.css"
import { IoIosHome } from 'react-icons/io'
import { FaShoppingBasket, FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
    const [links] = useState([
        { name: "Home", icon: <IoIosHome />, path: '/', },
        { name: "Shop", icon: <FaShoppingBasket />, path: '/shop' },
        { name: "Profile", icon: <FaUserCircle />, path: "/login" }
    ])
    return (

        <header className={styles.myHeader}>

            <div className='container col-12 d-flex justify-content-between align-items-center w-100 p-4'>
                <div className="menu-icon d-flex gap-3 hover:text-[var(--brownish)] cursor-pointer" data-bs-toggle="offcanvas" data-bs-target="#menuOffcanvas">
                    <CiMenuBurger />
                </div>
                <div className="offcanvas offcanvasLeft offcanvas-start px-3 firstCanva " tabIndex="-1" id="menuOffcanvas"
                    aria-labelledby="menuOffcanvasLabel">
                    <div className="offcanvas-header  ">
                        <p id="menuOffcanvasLabel" className="font-bold text-3xl font-[roboto]">Menu</p>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body gap-4 d-flex flex-column">
                       {
                        links.map((el,index)=>{
                            return(
                                <Link to={el.path} key={index} className={` ${styles.link} nav-link p-3 d-flex gap-2 items-center`} >
                                 {el.icon}
                                   <p className='m-0'> {el.name}</p>
                                </Link>
    
                            )
                        })
                       }

                    </div>
                </div>
                <div className='d-flex logo'>
                    <img src={logoImg} alt="" className={styles.logo} />
                </div>
                <div className='allDropdowns d-none d-md-flex gap-5'>
                    <div className="dropdown ">
                        <button className="btn btn-transparent shadow-none dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Home
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-transparent shadow-none dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Shop
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-transparent shadow-none dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Products
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-transparent shadow-none dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            About Us
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-transparent shadow-none dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                    <CiUser size={24} className={styles.icon} />
                    <CiShoppingCart size={24} className={styles.icon} />
                    <CiStar size={24} className={styles.icon} />
                </div>
            </div>
        </header>
    )
}
