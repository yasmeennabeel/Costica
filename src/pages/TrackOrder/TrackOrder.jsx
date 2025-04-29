import trackImg from '../../assets/imgs/order-tracking.webp'
import back from '../../assets/imgs/back.png'

export default function TrackOrder() {
    return (
        <div className='trackorder flex flex-col items-center justify-center w-full h-auto sm:h-[100vh]'>
            <div className="w-full h-64 bg-contain bg-no-repeat bg-right flex items-center justify-center"
                style={{ backgroundImage: `url(${back})` }}
            >
                <div className='flex items-center justify-center gap-2 capitalize'>
                    <div className='breadcrumbs transition text-center flex flex-col items-center justify-center'>
                        <p className='text-center text-xl sm:text-2xl lg:text-3xl uppercase font-semibold font-[roboto]'>Track Order Status</p>
                        <ul className='flex gap-2 text-xs sm:text-sm m-0 cursor-pointer text-center p-0'>
                            <li className='font-[roboto] hover:text-[var(--brownish)] hover:font-bold'>Home</li>
                            <li className='font-[roboto] hover:text-[var(--brownish)] hover:font-bold'>Continue Shopping</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center gap-5 px-4'>
                <p className='font-[roboto] font-semibold capitalize text-3xl sm:text-4xl lg:text-5xl'>Track your order</p>
                <p className='w-full sm:w-[80%] md:w-[70%] lg:w-[60%] text-center font-[roboto] text-sm sm:text-base'>
                    To track your order please enter your Order ID in the box below and press the “Track” button. This was given to you on your receipt and in the confirmation email you should have received.
                </p>
                <img src={trackImg} className='w-[200px] sm:w-[250px] lg:w-[300px]' alt="Order Tracking" />
                
                <div className='flex flex-col gap-3 text-center font-[roboto] text-sm sm:text-base font-semibold w-full sm:w-[80%] md:w-[70%]'>
                    <label>Order ID</label>
                    <input 
                        type='text' 
                        placeholder='Found in your confirmation email' 
                        className='form-control text-center p-3 border border-gray-300 rounded-md' 
                    />
                    <label>Billing email</label>
                    <input 
                        type='text' 
                        placeholder='Email you used during checkout' 
                        className='form-control text-center p-3 border border-gray-300 rounded-md' 
                    />
                </div>
            </div>
        </div>
    )
}
