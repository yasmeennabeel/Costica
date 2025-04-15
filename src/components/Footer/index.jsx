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
<>
<footer className="container footer font-[roboto] mt-12 flex flex-col md:flex-row justify-between items-center md:items-start">
      <aside className='flex flex-col items-center md:items-start gap-2.5 text-xs'>
        <img src={logo} className='mb-4 w-[120px]'></img>
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
      <div className="divider lg:divider-horizontal !w-0.25 bg-[var(--offwhite)]"></div>

      <nav className='flex flex-col gap-3 cursor-pointer text-xs'>
        <p className="font-semibold text-lg">Categories</p>
        <p className="transition hover:text-[var(--brownish)] ">Skincare Solutions</p>
        <p className="transition hover:text-[var(--brownish)]">Complexion Perfection</p>
        <p className="transition hover:text-[var(--brownish)]">Eye Enhancements</p>
        <p className="transition hover:text-[var(--brownish)]">Radiant Lips</p>
      </nav>
      <nav className='flex flex-col gap-3 cursor-pointer text-xs'>
        <p className="font-semibold text-lg">Let Us Help</p>
        <p className="transition hover:text-[var(--brownish)]">Help Center</p>
        <p className="transition hover:text-[var(--brownish)]">Track My Order</p>
        <p className="transition hover:text-[var(--brownish)]">Cancel My Order</p>
        <p className="transition hover:text-[var(--brownish)]">Return My Order</p>
      </nav>
      <nav className='flex flex-col gap-3 cursor-pointer text-xs'>
        <p className="font-semibold text-lg">Our Policies</p>
        <p className="transition hover:text-[var(--brownish)]">Shipping & Delivery</p>
        <p className="transition hover:text-[var(--brownish)]">Returns policy</p>
        <p className="transition hover:text-[var(--brownish)]">Terms & Conditions</p>
        <p className="transition hover:text-[var(--brownish)]">Privacy policy</p>
      </nav>
      <nav className='flex flex-col gap-3 cursor-pointer text-xs'>
        <p className="font-semibold text-lg">Our Social</p>
        <div className='flex gap-4'>
          <a><FaXTwitter className='hover:bg-[var(--brownish)] w-[25px] h-[25px] hover:rounded-full p-1 hover:text-white transition'/></a>
          <a><FaFacebook className='hover:bg-[var(--brownish)] w-[25px] h-[25px] hover:rounded-full p-1 hover:text-white transition' /></a>
          <a> <FaSquareInstagram className='hover:bg-[var(--brownish)] w-[25px] h-[25px] hover:rounded-full p-1 hover:text-white transition' /></a>
          <a><FaTelegramPlane className='hover:bg-[var(--brownish)] w-[25px] h-[25px] hover:rounded-full p-1 hover:text-white transition' /></a>
        </div>
        <h6>Payment Methods</h6>
        <div className='flex gap-4'>
          <a><FaCcVisa className='w-[25px] h-[25px]'/></a>
          <a><FaPaypal className='w-[25px] h-[25px]' /></a>
          <a><FaCcMastercard className='w-[25px] h-[25px]'/></a>
          <a><SiAmericanexpress className='w-[25px] h-[25px]'/></a>
        </div>
      </nav>
   
    </footer>
       <div className="text-center p-4">
       <aside>
         <p className='font-[roboto] text-sm'>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
       </aside>
     </div>
     </>
  )
}
