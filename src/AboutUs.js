import React from "react";
import mainLogo from './images/logo.png'
import glassImg from './images/glass_icon.jpg'
import lightImg from './images/light_icon.png'
import noMakeupImg from './images/noMakeup_icon.png'
import faceImg from './images/face_icon.png'




const AboutUs = () => {
    return (
        <div className='flex flex-row w-full h-[40rem] overflow-hidden' >
            <div className='w-1/2 h-full'>
                <img src={mainLogo} alt="BeautyBrain Logo" className='w-full h-full object-cover' /></div>
            <div className='bg-black flex flex-col w-1/2 h-full' >
                <p className="text-5xl mt-32 mb-5">About Us</p>
                <p className="text-lg">Welcome to our Makeup and Skincare recommending website! We are excited to help you discover new makeup and skincare products that fit your preferences and needs.</p>
                <p className="text-2xl mt-5 italic">OUR VISION</p>
                <p className="text-lg mt-5 mb-5"> Beauty is not about conforming to society's standards, but about celebrating diversity and individuality.</p>
                <p className="text-2xl mt-5 italic">OUR MISSION</p>
                <p className="text-lg mt-5 mb-10"> To provide a personalized and efficient way of shopping for makeup and skincare products by utilizing the latest technologies, including Artificial Intelligence (AI). </p>
                
                
            </div>
        </div>


    );
};

export default AboutUs;