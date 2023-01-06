import React from 'react';

const ItemsCard = ({ phone, openModal, setBookingProduct }) => {
    const { name, image, location, resalePrice, originalPrice, used } = phone;
    return (
        <div className='mx-auto p-6 max-w-sm w-full rounded-xl shadow-xl'>
            <div className='max-w-sm overflow-hidden'>
                <img className='mx-auto hover:scale-110 duration-200' src={image} alt="" />
            </div>
            <div className='mb-4'>
                <h4 className="text-xl font-bold">{name}</h4>
                <p>Location: <span className='text-gray-800 font-semibold'>{location}</span></p>
                <p>Original Price: <span className='text-gray-800 font-semibold'>${originalPrice}</span></p>
                <p>Resale Price: <span className='text-gray-800 font-semibold'>${resalePrice}</span></p>
                <p>Used: <span className='text-gray-800 font-semibold'>{used}</span></p>
            </div>
            <button onClick={() => { openModal(); setBookingProduct(phone)}} className='bg-black px-8 py-3 text-white rounded cursor-pointer'>Book Now</button>
        </div>
    );
};

export default ItemsCard;