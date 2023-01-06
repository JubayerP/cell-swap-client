import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import BookingModal from '../../../Shared/BookingModal/BookingModal';
import Loader from '../../../Shared/Loader/Loader';
import ItemsCard from '../../CategoryItems/ItemsCard';

const AdvertisedItems = () => {
    let [isOpen, setIsOpen] = useState(false);
    const [adsProduct, setAdsProduct] = useState(null)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const { data: ads, isLoading } = useQuery({
        queryKey: ['ads'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/ads')
            const data = await res.data;
            return data;
        }
    })

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className='my-20 px-10'>
            <h3 className="text-4xl font-bold text-gray-800 text-center">Phones For Advertising</h3>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                {
                    ads.map(phone => <ItemsCard phone={phone} key={phone._id} openModal={openModal} setBookingProduct={setAdsProduct}/>)
                }
            </div>

            {adsProduct &&
                <BookingModal
                isOpen={isOpen}
                closeModal={closeModal}
                bookingProduct={adsProduct}
                setBookingProduct={setAdsProduct}
            />}
        </div>
    );
};

export default AdvertisedItems;