import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-[70vh]'>
            <div className='text-center'>
                <p className='text-indigo-600 font-semibold'>404</p>
                <h1 className='text-gray-800 font-bold text-5xl my-2'>Page not found</h1>
                <p className='text-indigo-600 font-semibold mb-5'>Sorry, we couldn't find the page you're looking for.</p>

                <Link to='/' className='text-indigo-700 font-semibold flex justify-center items-center space-x-2'><span>Go back home</span> <BsArrowRight /> </Link>
            </div>
        </div>
    );
};

export default ErrorPage;