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
    const { openCart, productsInCart } = useCart()
    const [links] = useState([
        { id: 1, name: "Home", icon: <IoIosHome />, path: '/', },
        { id: 3, name: "Shop", icon: <FaShoppingBasket />, path: '/shop' },
        { id: 3, name: "Profile", icon: <FaUserCircle />, path: "/login" },
        { id: 4, name: "Settings", icon: <IoSettingsSharp />, path: "/settings" },

    ])
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
                    <img src={logoImg} alt="" className={`${styles.logo} `} />

                    <div className='hidden md:flex flex-1 gap-16 justify-center'>
                        <Link to={'/'} className='!no-underline text-black font-[roboto] hover:!text-[var(--brownish)] transition cursor-pointer hover:!underline hover:font-semibold'>Home</Link>
                        <Link to={"/shop"} className='!no-underline text-black font-[roboto] hover:!text-[var(--brownish)] transition cursor-pointer hover:!underline hover:font-semibold'>Shop</Link>
                        <Link to={'/'} className='!no-underline text-black font-[roboto] hover:!text-[var(--brownish)] transition cursor-pointer hover:!underline hover:font-semibold'>Wishlist</Link>
                        <Link to={"/profile"} className='!no-underline text-black font-[roboto] hover:!text-[var(--brownish)] transition cursor-pointer hover:!underline hover:font-semibold'>Profile</Link>
                    </div>


                    <div className='icons flex gap-4 items-center flex-shrink-0'>
                        <CiSearch size={24} className={styles.icon} />
                        <CiUser size={24} className={styles.icon} />
                        <div className=' relative '>
                            <CiShoppingCart onClick={openCart} size={24} className={styles.icon} />
                            <span onClick={openCart} className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[var(--brownish)] text-white text-xs font-semibold flex items-center justify-center shadow-md hover:bg-[var(--offwhite)] hover:!text-[var(--darkgreen)] cursor-pointer">{
                                productsInCart.reduce((acc, el) => acc + el.qty, 0)}
                            </span>
                        </div>
                        <CiStar size={24} className={styles.icon} />
                    </div>
                </div>
            </div>
        </header>

    )

    {/* <table className="table">

<thead>
  <tr>
    <th>
      <label>
        <input type="checkbox" className="checkbox" />
      </label>
    </th>
    <th>Item Name</th>
    <th>Quantity</th>
    <th>Action</th>
   
  </tr>
</thead>
<tbody>

  <tr>
    <th>
      <label>
        <input type="checkbox" className="checkbox" />
      </label>
    </th>
    <td>
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img
              src={el.imgUrl}
              alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div className="font-bold">Hart Hagerty</div>
          <div className="text-sm opacity-50">United States</div>
        </div>
      </div>
    </td>
    <td>
      Zemlak, Daniel and Leannon
      <br />
      <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
    </td>
    <td>Purple</td>
    <th>
      <button className="btn btn-ghost btn-xs">details</button>
    </th>
  </tr>
</tbody>

<tfoot>
  <tr>
    <th></th>
    <th>Name</th>
    <th>Job</th>
    <th>Favorite Color</th>
    <th></th>
  </tr>
</tfoot>
</table>








<p className="m-0"> {index + 1} </p>
                  <div className="flex items-center gap-2">
                    <img src={el.product_img} className="w-[50px] h-[50px] object-contain"></img>
                    <p className="m-0">{el.product_name}</p>
                  </div>
                  <p className="m-0 p-0">${el.product_price}</p>
                  <div className="flex items-center justify-center gap-3">
                    <button className="btn btn-danger w-[25px] h-[25px] p-0 " onClick={() => { decrementQty(el.documentId) }}> - </button>
                    <p className="m-0 p-0">{el.qty}</p>
                    <button className="btn btn-success w-[25px] h-[25px] p-0" onClick={() => { incrementQty(el.documentId) }}> + </button>
                  </div>
                  <div>${el.qty * el.product_price} </div>
                  <br></br> */}

}






