import { useEffect } from "react"
import CreditCard from "../../components/CreditCard/CreditCard";
import back from '../../assets/imgs/back.png'
import { Link, useNavigate } from "react-router-dom";


export default function CheckOut() {
  const navigate = useNavigate()
  const handleClick = ()=>{
navigate('/track')
  }
  
  useEffect(() => {
    sessionStorage.removeItem('redirect');
  })
  return (
    <div className='checkout '>
      <div className="w-full h-64 bg-contain bg-no-repeat bg-right flex items-center justify-center"
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className=' flex flex-col items-center justify-center gap-2 capitalize'>
          <p className='breadcrumbs text-center  text-xl uppercase font-semibold font-[roboto] m-0 p-0'>Checkout</p>
          <div className=' transition text-center breadcrumbs flex flex-col items-center justify-center'>
            <ul className='flex gap-2 text-xs m-0 p-0 text-center'>
              <li className='font-[roboto] hover:text-[var(--brownish)] hover:font-bold '>
                <Link to="/shop" className="!no-underline text-black font-[roboto] hover:!text-[var(--brownish)] transition cursor-pointer hover:!underline hover:font-semibold">Shop</Link>
              </li>
              <li className='font-[roboto] hover:text-[var(--brownish)] hover:font-bold'><a>Checkout</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center ">
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
          <button onClick={handleClick} className="btn !bg-[var(--brownish)] w-[300px] !text-[var(--offwhite)] hover:!bg-[var(--darkgreen)]">Place Order</button>
          <button className="btn btn-danger w-[300px] !text-[var(--offwhite)] hover:!bg-black mb-4">Unsuccessful Payment</button>
        </div>
        <CreditCard></CreditCard>
      </div>
    </div>
  )
}
