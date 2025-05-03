import { IoIosLogOut } from 'react-icons/io'
import back from '../../assets/imgs/back.png'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaHouseUser } from 'react-icons/fa6';
import { FiUserX } from 'react-icons/fi';
export default function ProfilePage() {
    const navigate = useNavigate()

    const logOut = () => {
        sessionStorage.clear();
        navigate('/');
        setToken(undefined);
        resetCart()
        toast.success("You're logged out successfully. See you soon!")
    }

    const [user, setUser] = useState(null);
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [])
    if (!user) return (
        <div className='h-[100vh] flex flex-col justify-center items-center gap-3'>
            <FiUserX className='text-9xl text-[var(--darkgreen)]' />
            <p className='font-[roboto] font-bold text-[var(--darkgreen)] text-center mt-10'>Please Log In First</p>
            <Link to={'/login'} className='btn !font-[roboto]  uppercase !bg-[var(--darkgreen)] !text-[var(--offwhite)] !no-underline hover:!bg-[var(--brownish)]'>Go to Login Page</Link>
        </div>
    )

    return (
        <div className='profile'>
            <div className="w-full h-64 bg-contain bg-no-repeat bg-right flex items-center justify-center"
                style={{ backgroundImage: `url(${back})` }}
            >
                <div className='flex items-center justify-center gap-2 capitalize'>
                    <div className='breadcrumbs transition text-center flex flex-col items-center justify-center'>
                        <p className=' text-center  text-xl uppercase font-semibold font-[roboto]'>My Profile</p>
                        <ul className='flex gap-2 text-xs m-0 cursor-pointer text-center p-0'>
                            <li className='font-[roboto] hover:text-[var(--brownish)] hover:font-bold'>Home</li>
                            <li className='font-[roboto] hover:text-[var(--brownish)] hover:font-bold'>Profile</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container w-full rounded-2xl shadow border-1 border-gray-500'>
                <div className='flex  gap-4 p-3'>
                    <div className='flex justify-center'>
                        <FaHouseUser className='text-9xl' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='font-bold text-sm font-[roboto] '>Username</label>
                        <h1 className='capitalize font-[roboto] '>{user.username}</h1>
                        <label className='font-bold text-sm font-[roboto] '>Phone Number</label>
                        <p>{user.phone}</p>
                        <label className='font-bold text-sm font-[roboto] '>Email Address</label>
                        <p>{user.email}</p>
                        <div className='relative hidden md:flex gap-2 cursor-pointer '>
                            <IoIosLogOut className=' absolute top-3 left-2 text-white hover:!text-[var(--light)]' />
                            <button onClick={logOut} className='btn btn-danger w-[110px] text-center !text-sm !font-[roboto] hover:!text-[var(--light)] !font-semibold '> Log Out</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}