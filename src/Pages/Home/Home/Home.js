import React from 'react';
import Slider from '../../Slider/Slider';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Categories from '../Categories/Categories';
import MobileSection from '../MobileSection/MobileSection';

const Home = () => {
    return (
        <div>
            <Slider />
            <AdvertisedItems />
            <Categories />
            <MobileSection />
        </div>
    );
};

export default Home;