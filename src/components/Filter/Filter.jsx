import { FaFilter } from 'react-icons/fa'
import { IoIosArrowDropup, IoMdArrowDropdown } from 'react-icons/io'
export default function Filter() {
    return (
        <div>
            <div className='hidden md:flex md:flex-col container '>
                <div className='flex items-center  justify-between'>
                    <p className='uppercase font-[roboto] font-semibold m-0 text-lg'>Filter by</p>
                    <FaFilter className='hover:text-[var(--brownish)] hover:cursor-pointer' />

                </div>
                
                <div className='categories'>
                    <div className="dropdown dropdown-open">
                        <div className='flex  items-center '>
                            <div tabIndex={0} role="button" className="btn m-2 shadow-none !font-[roboto] !font-bold">Categories   </div>
                            <IoIosArrowDropup className='hover:text-[var(--brownish)] cursor-pointer' />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu rounded-box z-1  shadow-sm ">
                            <div className='flex'>
                                <input type="checkbox" defaultChecked className="checkbox-md " />
                                <li className='font-[roboto] '><a>Body Care</a></li>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" defaultChecked className="checkbox-md " />
                                <li className='font-[roboto] '><a>Eye Shadow</a></li>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" defaultChecked className="checkbox-md " />
                                <li className='font-[roboto] '><a>Face Serums</a></li>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" defaultChecked className="checkbox-md " />
                                <li className='font-[roboto] '><a>Facial Cream</a></li>
                            </div>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
}
