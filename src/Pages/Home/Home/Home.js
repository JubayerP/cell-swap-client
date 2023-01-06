import React from 'react';
import Slider from '../../Slider/Slider';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
            <Slider />
            <AdvertisedItems />
            <Categories />
        </div>
    );
};

export default Home;