import React, { useState } from 'react'
import logoImg from "../../assets/imgs/logo.webp"
import { CiMenuBurger, CiSearch, CiShoppingCart, CiStar, CiUser } from 'react-icons/ci'
import styles from "./index.module.css"
import { IoIosHome } from 'react-icons/io'
import { FaShoppingBasket, FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IoSettingsSharp } from 'react-icons/io5'
import { useCart } from '../../store'

export default function Header() {
    const [activeTab, setActiveTab] = useState(0)
const {openCart, productsInCart } = useCart()
    const [links] = useState([
        {id:1, name: "Home", icon: <IoIosHome />, path: '/', },
        {id:3, name: "Shop", icon: <FaShoppingBasket />, path: '/shop' },
        {id:3, name: "Profile", icon: <FaUserCircle />, path: "/login" },
        {id:4, name: "Settings", icon: <IoSettingsSharp />, path: "/settings" },

    ])
    return (

        <header className={styles.myHeader}>

            <div className='container col-12 d-flex justify-content-between align-items-center w-100 p-4'>
                <div className="menu-icon text-2xl d-flex gap-3 hover:text-[var(--brownish)] cursor-pointer" data-bs-toggle="offcanvas" data-bs-target="#menuOffcanvas">
                    <CiMenuBurger />
                </div>
                <div className="offcanvas z-999 offcanvasLeft offcanvas-start px-3 firstCanva " tabIndex="-1" id="menuOffcanvas"
                    aria-labelledby="menuOffcanvasLabel">
                    <div className="offcanvas-header  ">
                        <p id="menuOffcanvasLabel" className="font-bold text-3xl font-[roboto]">Menu</p>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body gap-4 d-flex flex-column">
                       {
                        links.map((el,index)=>{
                            return(
                                <Link onClick={()=>{setActiveTab(index)}} to={el.path} key={index} className={`nav-link p-3 d-flex gap-2 items-center  ${styles.link} + " " +  ${activeTab == index && styles.activeLink } `} >
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
                   <div className='flex items-center gap-2 relative '>
                   <CiShoppingCart onClick={openCart} size={24} className={styles.icon} />
                   <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[var(--brownish)] text-white text-xs font-semibold flex items-center justify-center shadow-md hover:bg-[var(--offwhite)] hover:!text-[var(--darkgreen)] cursor-pointer">{productsInCart.length}</span>
                   </div>
                    <CiStar size={24} className={styles.icon} />
                </div>
            </div>
        </header>
    )
}
