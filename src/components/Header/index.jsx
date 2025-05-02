import React, { useEffect, useState } from 'react'
import logoImg from "../../assets/imgs/logo.webp"
import { CiMenuBurger, CiSearch, CiShoppingCart, CiStar, CiUser } from 'react-icons/ci'
import styles from "./index.module.css"
import { IoIosHome, IoIosLogOut } from 'react-icons/io'
import { FaShoppingBasket, FaUserCircle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { IoSettingsSharp } from 'react-icons/io5'
import { useCart } from '../../store'
import { toast } from 'react-toastify'

export default function Header() {
  const [activeTab, setActiveTab] = useState(0)
  const { openCart, productsInCart, resetCart } = useCart()
  const [links] = useState([
    { id: 1, name: "Home", icon: <IoIosHome />, path: '/', },
    { id: 3, name: "Shop", icon: <FaShoppingBasket />, path: '/shop' },
    { id: 3, name: "Profile", icon: <FaUserCircle />, path: "/login" },
    { id: 4, name: "Settings", icon: <IoSettingsSharp />, path: "/settings" },

  ])
  const navigate = useNavigate()
  const [token, setToken] = useState()
  useEffect(() => {
    setToken(sessionStorage.getItem('token'))
  })
  const logOut = () => {
    sessionStorage.clear();
    navigate('/');
    setToken(undefined);
    resetCart()
    toast.success("You're logged out successfully. See you soon!")
  }
  const handleHome = ()=>{
    navigate('/')
  }
  return (

    <header className={`${styles.myHeader} h-[80px] sticky top-0 z-[99] shadow flex justify-between items-center `}>

      <div className='container  px-4 py-3'>
        <div className='w-full flex items-center justify-between gap-3 flex-shrink-0'>
          <div className="menu-icon text-2xl hover:text-[var(--brownish)] cursor-pointer" data-bs-toggle="offcanvas" data-bs-target="#menuOffcanvas">
            <CiMenuBurger />
          </div>

          <div className="offcanvas z-99 offcanvasLeft offcanvas-start px-3 firstCanva " tabIndex="-1" id="menuOffcanvas"
            aria-labelledby="menuOffcanvasLabel">
            <div className="offcanvas-header  ">
              <p id="menuOffcanvasLabel" className="font-bold text-3xl font-[roboto]">Menu</p>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body gap-4 d-flex flex-column">
              {
                links.map((el, index) => {
                  return (
                    <Link onClick={() => { setActiveTab(index) }} to={el.path} key={index} className={`nav-link p-3 d-flex gap-2 items-center  ${styles.link} + " " +  ${activeTab == index && styles.activeLink} `} >
                      {el.icon}
                      <p className='m-0'> {el.name}</p>
                    </Link>

                  )
                })
              }

            </div>
          </div>
          <img src={logoImg} alt="" className={`${styles.logo} `} onClick={handleHome} />

          <div className='hidden md:flex flex-1 gap-16 justify-center'>
            <Link to={'/'} className='!no-underline text-black font-[roboto] hover:!text-[var(--brownish)] transition cursor-pointer hover:!underline hover:font-semibold'>Home</Link>
            <Link to={"/shop"} className='!no-underline text-black font-[roboto] hover:!text-[var(--brownish)] transition cursor-pointer hover:!underline hover:font-semibold'>Shop</Link>
            <Link to={'/'} className='!no-underline text-black font-[roboto] hover:!text-[var(--brownish)] transition cursor-pointer hover:!underline hover:font-semibold'>Wishlist</Link>
            <Link to={"/profile"} className='!no-underline text-black font-[roboto] hover:!text-[var(--brownish)] transition cursor-pointer hover:!underline hover:font-semibold'>Profile</Link>
          </div>


          <div className='icons flex gap-4 items-center flex-shrink-0'>
            <CiSearch size={24} className={styles.icon} />
            <Link to={'/login'}>  <CiUser size={24} className={styles.icon} /> </Link>
            <div className=' relative '>
              <CiShoppingCart onClick={openCart} size={24} className={styles.icon} />
              <span onClick={openCart} className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[var(--brownish)] text-white text-xs font-semibold flex items-center justify-center shadow-md hover:bg-[var(--offwhite)] hover:!text-[var(--darkgreen)] cursor-pointer">{
                productsInCart.reduce((acc, el) => acc + el.qty, 0)}
              </span>
            </div>
            {/* <CiStar size={24} className={styles.icon} /> */}

            {
              token &&
              <div className='relative hidden md:flex gap-2 cursor-pointer '>
                <IoIosLogOut className=' absolute top-3 left-2 text-white hover:!text-[var(--light)]' />
                <button onClick={logOut } className='btn btn-danger w-[110px] text-center !text-sm !font-[roboto] hover:!text-[var(--light)] !font-semibold '> Log Out</button>
              </div>
            }
          </div>
        </div>
      </div>
    </header>

  )



}






