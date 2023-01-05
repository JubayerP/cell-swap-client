import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='my-10 px-10'>
            <h3 className="text-3xl font-bold text-center mb-8">Create an account</h3>

            <form className='lg:max-w-md md:max-w-md max-w-sm mx-auto'>
                <div className='grid grid-cols-1 gap-4'>
                    <input type="text" placeholder='Full Name' className='outline-none border border-gray-500 focus:border-black pl-4 py-3 rounded-full' />
                    <input type="email" placeholder='Email' className='outline-none border border-gray-500 focus:border-black pl-4 py-3 rounded-full' />
                    <input type="password" placeholder='Password' className='outline-none border border-gray-500 focus:border-black pl-4 py-3 rounded-full' />
                    <input type="file" placeholder='Photo' className='outline-none border border-gray-500 focus:border-black pl-4 py-3 rounded-full' />
                    <select className='outline-none border border-gray-500 focus:border-black pl-4 py-3 rounded-full' >
                        <option value="Please Select Your Role" disabled>Please Select Your Role</option>
                        <option value="Seller">Seller</option>
                        <option value="Buyer">Buyer</option>
                    </select>
                    <button className='bg-black rounded-full text-white font-semibold text-xl -tracking-tight py-3 '>Create</button>
                </div>
                <p className='text-base text-center mt-2'>Already have an account? <Link to='/login' className='underline'>Login</Link></p>
            </form>

            <div className='lg:max-w-md md:max-w-md max-w-sm mx-auto mt-2.4'>
                <button className='rounded-full text-black border border-black font-semibold text-xl -tracking-tight py-3 w-full'>Login With Google</button>
            </div>
        </div>
    );
};

export default Register;