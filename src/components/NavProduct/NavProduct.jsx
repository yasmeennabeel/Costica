import { IoIosArrowBack } from 'react-icons/io'
import back from '../../assets/imgs/back.png'
import { Link, useNavigate } from 'react-router-dom'
import { useCategories } from '../../store';

export default function NavProduct({ tabName }) {
    const navigate = useNavigate();
    const { activeCategoryID } = useCategories();

    return (
        <header className='flex justify-center items-center mt-4 ' data-aos="fade-up">
            <div className='bg-contain bg-no-repeat bg-right  w-full h-64' style={{ backgroundImage: `url(${back})` }}>
                <div className='flex items-center justify-center gap-2 capitalize '>
                    {activeCategoryID != 0 && <IoIosArrowBack onClick={() => { navigate('/shop') }} className='p-1 text-2xl cursor-pointer text-[var(--darkgreen)] hover:!text-[var(--offwhite)] hover:!bg-[var(--darkgreen)] hover:!rounded-full' />}
                    <div className=' transition text-center breadcrumbs flex flex-col items-center justify-center'>
                        <ul className='flex gap-2 text-xs m-0'>
                            <li className=''>  <Link to={'/'} className=' font-[roboto] hover:!text-[var(--brownish)] hover:font-bold !text-black !no-underline'>Home</Link></li>
                            <li>  <Link to={'/shop'} className='font-[roboto] hover:!text-[var(--brownish)] hover:font-bold !text-black !no-underline'>Shop</Link></li>
                            {tabName && <li className='font-[roboto] hover:text-[var(--brownish)] hover:font-bold cursor-pointer'>{tabName}</li>}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
