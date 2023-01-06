import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardSidebar.css';

const DashboardSidebar = () => {
    return (
        <div className="relative min-h-screen md:flex" data-dev-hint="container">
            <input type="checkbox" id="menu-open" className="hidden" />

            <label for="menu-open" className="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden" data-dev-hint="floating action button">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </label>

            <header className="bg-gray-600 text-gray-100 flex justify-between md:hidden" data-dev-hint="mobile menu bar">
                {/* <a href="#" className="block p-4 text-white font-bold whitespace-nowrap truncate">
                    Your App is cool
                </a> */}

                <label for="menu-open" id="mobile-menu-button" className="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md">
                    <svg id="menu-open-icon" className="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg id="menu-close-icon" className="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </label>
            </header>

            <aside id="sidebar" className="text-gray-800 md:w-64 w-44 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
                <div className="flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">
                    <Link to='/dashboard/addproduct' className='pl-10 font-semibold hover:bg-gray-100 py-2 rounded-xl'>Add A Product</Link>
                    <Link to='/dashboard/myproducts' className='pl-10 font-semibold hover:bg-gray-100 py-2 rounded-xl'>My Products</Link>
                    <Link to='/dashboard/mybuyers' className='pl-10 font-semibold hover:bg-gray-100 py-2 rounded-xl'>My Buyers</Link>
                </div>
            </aside>

            <main id="content" className="flex-1 p-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* <!-- Replace with your content --> */}
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                    </div>
                    {/* <!-- /End replace --> */}
                </div>
            </main>
        </div>
    );
};

export default DashboardSidebar;