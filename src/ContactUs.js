import React from "react";
import makeup from './images/makeup.png'
import NavBar from "./NavBar";
import Footer from "./Footer";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




// componentDidMount(){
//     // create map
//     const map = L.map('map').setView([6.9619, 79.8977], 13);

//     // add tile layer
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; OpenStreetMap contributors'
//     }).addTo(map);
//   }

const ContactUs = () => {
    return (
        <div>
            <NavBar />
            <div className='flex flex-row w-full h-[40rem] overflow-hidden ' >

                <div className='w-1/2 h-full' id="map">
                    <img src={makeup}></img>
                </div>
                <div className='bg-black flex flex-col w-1/2 h-full' >
                    <p className="text-5xl mt-32 mb-5">Contact Us</p>
                    <p className="text-lg">Feel free to contact us if you have any doubts.</p>
                    <div class="left-side">
                        <div class="address details">
                            <i class="fas fa-map-marker-alt"></i>
                            <div className="mt-5">Address</div>
                            <div className="ml-10">BeautyBrain Ltd</div>
                            <div className="ml-10">Kelaniya.</div>
                        </div>
                        <div class="phone details">
                            <i class="fas fa-phone-alt"></i>
                            <div className="">Phone</div>
                            <div className="ml-10">+94 76 562 5184</div>
                            <div className="ml-10">+94 77 789 3784</div>
                        </div>
                        <div class="email details">
                            <i class="fas fa-envelope"></i>
                            <div class="topic">Email</div>
                            <div className="ml-10">beautybrain2023@gmail.com</div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>


    );
};

export default ContactUs;