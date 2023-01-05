import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import MenuOptions from './MenuOptions';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user } = useContext(AuthContext);

    const menuItems = <>
        <Link className='md:p-4 py-2 block' to='/home'>Home</Link>
        {user?.uid ?
            <MenuOptions />
            :
            <Link className='md:p-4 py-2 block' to='/login'>Login</Link>
        }
    </>
    return (
        <div className={`flex flex-wrap w-full justify-between items-center px-10 py-3`}>
            <div>
                <Link to='/'><h3 className='text-3xl font-bold'>Cell Swap</h3></Link>
            </div>
            <svg
                onClick={() => setOpen(!open)}
                xmlns="http://www.w3.org/2000/svg"
                id="menu-button"
                className="h-6 w-6 cursor-pointer md:hidden flex"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
            <div className={`${open ? 'flex' : 'hidden'}  w-full md:flex md:items-center md:w-auto text-lg`}>
                <ul className='md:flex md:justify-between md:items-center md:pt-0'>
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;