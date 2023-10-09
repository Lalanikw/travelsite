import React from 'react';
import ChatBot from '../components/ChatBot';
import Carousel from '../components/Carousel';

const Hero = () => {
    return (
        <div className="hero-back">
            <div className="hero-section ">
                <div className="hero-left">
                    <Carousel/>
                </div>
                <div className="hero-text">
                    {/* <h4>Aloha</h4> */}
                    <h1>Welcome To Hawaii</h1>
                    <h2>A dream destination that promises an unforgettable travel experience</h2>
                </div>
                    <ChatBot />
                
            </div>

        </div>
    );
};

export default Hero;