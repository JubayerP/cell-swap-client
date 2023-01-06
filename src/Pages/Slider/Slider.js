import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import slider1 from '../../assets/slider/slider-1.jpeg'
import slider2 from '../../assets/slider/slider-2.jpeg'
import slider3 from '../../assets/slider/slider-3.jpeg'

const Slider = () => {
    return (
        <div className=''>
            <AwesomeSlider>
                <div data-src={slider1}>
                    
                </div>
                <div data-src={slider2}>2</div>
                <div data-src={slider3}>3</div>
            </AwesomeSlider>
        </div>
    );
};

export default Slider;