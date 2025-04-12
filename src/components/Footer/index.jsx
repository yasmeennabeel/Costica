import React from 'react'
import styles from './index.module.css'
import logo from '../../assets/imgs/dark.png'
import { FaCcMastercard, FaCcVisa, FaFacebook, FaLocationDot, FaPaypal, FaSquareInstagram, FaXTwitter } from 'react-icons/fa6'
import { MdEmail, MdWifiCalling3 } from 'react-icons/md'
import { SlCalender } from 'react-icons/sl'
import { FaTelegramPlane } from 'react-icons/fa'
import { SiAmericanexpress } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="footer font-[roboto]  p-10 mt-12 flex flex-col md:flex-row justify-between items-center md:items-start">
      <aside className='flex flex-col items-center md:items-start'>
        <img src={logo} className='mb-4'></img>
        <div className='loc flex gap-2 '>
          <FaLocationDot />
          <p>2357 Gordon Street, CA</p>
        </div>
        <div className='num flex gap-2 '>
          <MdWifiCalling3 />
          <p>+(123) - 456 - 7890</p>
        </div>
        <div className='mail flex gap-2 '>
          <MdEmail />
          <p>Costica@example.com</p>
        </div>
        <div className='work flex gap-2 '>
          <SlCalender />
          <p>All Day: 9:00AM - 22:00PM</p>
        </div>
      </aside>
      <nav className='flex flex-col gap-4 cursor-pointer'>
        <p className="font-semibold text-xl">Categories</p>
        <a className="no-underline text-black hover:text-gray-500 ">Skincare Solutions</a>
        <a className="no-underline text-black hover:text-gray-500">Complexion Perfection</a>
        <a className="no-underline text-black hover:text-gray-500">Eye Enhancements</a>
        <a className="no-underline text-black hover:text-gray-500">Radiant Lips</a>
      </nav>
      <nav className='flex flex-col gap-4 cursor-pointer'>
      <p className="font-semibold text-xl">Let Us Help</p>
      <a className="no-underline text-black hover:text-gray-500">Help Center</a>
        <a className="no-underline text-black hover:text-gray-500">Track My Order</a>
        <a className="no-underline text-black hover:text-gray-500">Cancel My Order</a>
        <a className="no-underline text-black hover:text-gray-500">Return My Order</a>
      </nav>
      <nav className='flex flex-col gap-4 cursor-pointer'>
      <p className="font-semibold text-xl">Our Policies</p>
      <a className="no-underline text-black hover:text-gray-500">Shipping & Delivery</a>
        <a className="no-underline text-black hover:text-gray-500">Returns policy</a>
        <a className="no-underline text-black hover:text-gray-500">Terms & Conditions</a>
        <a className="no-underline text-black hover:text-gray-500">Privacy policy</a>
      </nav>
      <nav className='flex flex-col gap-4 cursor-pointer'>
      <p className="font-semibold text-xl">Our Social</p>
      <div className='flex gap-5'>
          <a><FaXTwitter/></a>
          <a><FaFacebook/></a>
          <a> <FaSquareInstagram/></a>
          <a><FaTelegramPlane/></a>
        </div>
        <h6>Payment Methods</h6>
        <div className='flex gap-5'>
          <a><FaCcVisa /></a>
          <a><FaPaypal /></a>
          <a><FaCcMastercard /></a>
          <a><SiAmericanexpress /></a>
        </div>
      </nav>
    </footer>
  )
}
