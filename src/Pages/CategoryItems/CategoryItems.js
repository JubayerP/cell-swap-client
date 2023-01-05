import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';
import ItemsCard from './ItemsCard';

const CategoryItems = () => {
    const phones = useLoaderData();
    const navigation = useNavigation();

    navigation.state === 'idle' && <Loader />

    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-10'>
                {
                    phones.map(phone => <ItemsCard phone={phone} key={phone._id} />)
                }
            </div>
        </div>
    );
};

export default CategoryItems;