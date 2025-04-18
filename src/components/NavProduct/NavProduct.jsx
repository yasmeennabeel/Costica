import { IoIosArrowBack } from 'react-icons/io'
import back from '../../assets/imgs/back.png'

export default function NavProduct({ tabName }) {
    return (
        <header className='p-6 flex justify-center items-center mt-4 '>
            <div className='bg-contain bg-no-repeat bg-right  w-full h-64' style={{backgroundImage: `url(${back})`}}>
             <div className='flex items-center justify-center gap-2 capitalize '>
                <IoIosArrowBack className='p-1 text-2xl cursor-pointer text-[var(--darkgreen)] hover:!text-[var(--offwhite)] hover:!bg-[var(--darkgreen)] hover:!rounded-full' />
                <div className=' transition text-center breadcrumbs flex flex-col items-center justify-center'>
                    <ul className='flex gap-2 text-xs m-0'>
                        <li className=' font-[roboto] hover:text-[var(--brownish)] hover:font-bold'><a>Home</a></li>
                        <li className='font-[roboto] hover:text-[var(--brownish)] hover:font-bold'><a>Shop</a></li>
                        <li className='font-[roboto] hover:text-[var(--brownish)] hover:font-bold cursor-pointer'>{tabName}</li>
                    </ul>
                </div>
                </div>
            </div>
        </header>
    )
}
