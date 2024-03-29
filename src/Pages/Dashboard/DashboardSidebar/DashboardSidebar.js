// import React, { useContext } from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import { AuthContext } from '../../../contexts/AuthProvider';
// import useAdmin from '../../../hooks/useAdmin';
// import useBuyer from '../../../hooks/useBuyer';
// import useSeller from '../../../hooks/useSeller';
// import './DashboardSidebar.css';

// const DashboardSidebar = () => {
//     const { user } = useContext(AuthContext);
//     const [isSeller] = useSeller(user?.email);
//     const [isBuyer] = useBuyer(user?.email)
//     const [isAdmin] = useAdmin(user?.email);
//     return (
//         <div className="relative min-h-screen md:flex" data-dev-hint="container">
//             <input type="checkbox" id="menu-open" className="hidden" />

//             <label htmlFor="menu-open" className="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden" data-dev-hint="floating action button">
//                 <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//             </label>

//             <header className="bg-gray-600 text-gray-100 flex justify-between md:hidden" data-dev-hint="mobile menu bar">
//                 <a href="#" className="block p-4 text-white font-bold whitespace-nowrap truncate">
//                     Your App is cool
//                 </a>

//                 <label htmlFor="menu-open" id="mobile-menu-button" className="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md">
//                     <svg id="menu-open-icon" className="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                     </svg>
//                     <svg id="menu-close-icon" className="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                 </label>
//             </header>

//             <aside id="sidebar" className="text-gray-800 bg-white md:w-64 w-44 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transhtmlForm md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 htmlFor frameless; px-2 htmlFor visually inset the navigation">
//                 <div className="flex flex-col space-y-6" data-dev-hint="optional div htmlFor having an extra footer navigation">
//                     {isSeller && <>
//                         <Link to='/dashboard/addproduct' className='pl-10 font-semibold hover:bg-gray-100 py-2 rounded-xl'>Add A Product</Link>
//                         <Link to='/dashboard/myproducts' className='pl-10 font-semibold hover:bg-gray-100 py-2 rounded-xl'>My Products</Link>
//                         <Link to='/dashboard/mybuyers' className='pl-10 font-semibold hover:bg-gray-100 py-2 rounded-xl'>My Buyers</Link>
//                     </>
//                     }
//                     {isBuyer &&
//                         <>
//                         <Link to='/dashboard/myorders' className='pl-10 font-semibold hover:bg-gray-100 py-2 rounded-xl'>My Orders</Link>
//                         <Link to='/dashboard/wishlist' className='pl-10 font-semibold hover:bg-gray-100 py-2 rounded-xl'>My Wishlist</Link>
//                         </>
//                     }
//                     {isAdmin &&
//                         <>
//                         <Link to='/dashboard/allseller' className='pl-10 font-semibold hover:bg-gray-100 py-2 rounded-xl'>All Sellers</Link>
//                         <Link to='/dashboard/allbuyer' className='pl-10 font-semibold hover:bg-gray-100 py-2 rounded-xl'>All Buyers</Link>
//                         <Link to='/dashboard/myorders' className='pl-10 font-semibold hover:bg-gray-100 py-2 rounded-xl'>Reported Items</Link>
//                         </>
//                     }
//                 </div>
//             </aside>

//             <main id="content" className="flex-1 p-6 lg:px-8">
//                 <div className="max-w-7xl mx-auto">
//                     <Outlet />
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default DashboardSidebar;



import React, { useContext, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useBuyer from '../../../hooks/useBuyer';
import useSeller from '../../../hooks/useSeller';
import './DashboardSidebar.css';

const DashboardSidebar = () => {
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email)
    const [isAdmin] = useAdmin(user?.email);
    const [open, setOpen] = useState(false);
    return (
        <div className=" min-h-screen md:flex" data-dev-hint="container">
            <aside id="sidebar" className=" text-gray-800 bg-white md:w-64 w-44 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transhtmlForm md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between hidden overflow-y-auto" data-dev-hint="sidebar; px-0 htmlFor frameless; px-2 htmlFor visually inset the navigation md:block">
                <div className="flex flex-col space-y-6" data-dev-hint="optional div htmlFor having an extra footer navigation">
                    {isSeller && <>
                        <Link to='/dashboard/addproduct' className='pl-10 font-semibold hover:bg-gray-100 py-2 rounded-xl'>Add A Product</Link>
                        <Link to='/dashboard/myproducts' className='pl-10 font-semibold hover:bg-gray-100 py-2 rounded-xl'>My Products</Link>
                        <Link to='/dashboard/mybuyers' className='pl-10 font-semibold hover:bg-gray-100 py-2 rounded-xl'>My Buyers</Link>
                    </>
                    }
                    {isBuyer &&
                        <>
                            <Link to='/dashboard/myorders' className='pl-10 font-semibold hover:bg-gray-100 py-2 rounded-xl'>My Orders</Link>
                            <Link to='/dashboard/wishlist' className='pl-10 font-semibold hover:bg-gray-100 py-2 rounded-xl'>My Wishlist</Link>
                        </>
                    }
                    {isAdmin &&
                        <>
                            <Link to='/dashboard/allseller' className='pl-10 font-semibold hover:bg-gray-100 py-2 rounded-xl'>All Sellers</Link>
                            <Link to='/dashboard/allbuyer' className='pl-10 font-semibold hover:bg-gray-100 py-2 rounded-xl'>All Buyers</Link>
                            <Link to='/dashboard/myorders' className='pl-10 font-semibold hover:bg-gray-100 py-2 rounded-xl'>Reported Items</Link>
                        </>
                    }
                </div>
            </aside>



            <main id="content" className="flex-1 p-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardSidebar;