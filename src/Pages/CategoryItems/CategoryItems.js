import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import BookingModal from '../../Shared/BookingModal/BookingModal';
import ItemsCard from './ItemsCard';

const CategoryItems = () => {
    const phones = useLoaderData();
    let [isOpen, setIsOpen] = useState(false);
    const [bookingProduct, setBookingProduct] = useState(null)
    useTitle(`Categories`)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-10'>
                {
                    phones.map(phone => <ItemsCard phone={phone} key={phone._id} openModal={openModal} setBookingProduct={setBookingProduct} />)
                }
            </div>
            {bookingProduct && <BookingModal
                isOpen={isOpen}
                closeModal={closeModal}
                bookingProduct={bookingProduct}
                setBookingProduct={setBookingProduct}
            />}
        </div>
    );
};

export default CategoryItems;