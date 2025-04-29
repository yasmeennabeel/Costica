import { useEffect } from "react"
import CreditCard from "../../components/CreditCard/CreditCard";
import back from '../../assets/imgs/back.png'
import { Link } from "react-router-dom";


export default function CheckOut() {
  useEffect(() => {
    sessionStorage.removeItem('redirect');
  })
  return (
    <div className='checkout '>
      <div className="w-full h-64 bg-contain bg-no-repeat bg-right flex items-center justify-center"
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className='breadcrumbs flex items-center justify-center gap-2 capitalize'>
          <div className='breadcrumbs transition text-center flex flex-col items-center justify-center'>
            <p className=' text-center  text-xl uppercase font-semibold font-[roboto]'>Checkout</p>
            <ul className=' flex gap-2 text-xs m-0 cursor-pointer text-center p-0'>
              <Link to='/shop' className="!no-underline text-black font-[roboto] hover:!text-[var(--brownish)] transition cursor-pointer hover:!underline hover:font-semibold">  <li className='font-[roboto] hover:text-[var(--brownish)] hover:font-bold'>Shop</li></Link>
              <li className='font-[roboto] hover:text-[var(--brownish)] hover:font-bold'>Checkout</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 justify-center items-center ">
        <div className="flex flex-col gap-4 justify-center  items-center border-r-1 border-[var(--brownish)]">
          <p className="font-[roboto] font-semibold uppercase text-center">Billing Details</p>
          <label>First Name</label>
          <input type="text" placeholder="Enter your first name"></input>
          <label>Last Name</label>
          <input type="text" placeholder="Enter your last name"></input>
          <label>Street Name</label>
          <input type="text" placeholder="Enter your detailed address"></input>
          <label>Phone Number</label>
          <input type="text" placeholder="Enter your phone number"></input>
          <button className="btn !bg-[var(--brownish)] w-[300px] !text-[var(--offwhite)] hover:!bg-[var(--darkgreen)]">Place Order</button>
          <button className="btn btn-danger w-[300px] !text-[var(--offwhite)] hover:!bg-black">Unsuccessful Payment</button>
        </div>
        <CreditCard></CreditCard>
      </div>
    </div>
  )
}
