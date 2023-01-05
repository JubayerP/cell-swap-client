import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='my-10 px-10'>
            <h3 className="text-3xl font-bold text-center mb-8">Welcome Back!</h3>

            <form className='lg:max-w-md md:max-w-md max-w-sm mx-auto'>
                <div className='grid grid-cols-1 gap-4'>
                    <input type="email" placeholder='Email' className='outline-none border border-gray-500 focus:border-black pl-4 py-3 rounded-full' />
                    <input type="password" placeholder='Password' className='outline-none border border-gray-500 focus:border-black pl-4 py-3 rounded-full' />
                    <button className='bg-black rounded-full text-white font-semibold text-xl -tracking-tight py-3 '>Log In</button>
                </div>
                <p className='text-base text-center my-2'>Don't have an account? <Link to='/register' className='underline'>Create</Link></p>
            </form>

            <div className='lg:max-w-md md:max-w-md max-w-sm mx-auto mt-2.4'>
                <button className='rounded-full text-black border border-black font-semibold text-xl -tracking-tight py-3 w-full'>Login With Google</button>
            </div>
        </div>
    );
};

export default Login;