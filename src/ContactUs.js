import React from "react";
import makeup from './images/makeup.png'
import NavBar from "./NavBar";
import Footer from "./Footer";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';




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
                            <div class="topic">Address</div>
                            <div class="text-one">Surkhet, NP12</div>
                            <div class="text-two">Birendranagar 06</div>
                        </div>
                        <div class="phone details">
                            <i class="fas fa-phone-alt"></i>
                            <div class="topic">Phone</div>
                            <div class="text-one">+0098 9893 5647</div>
                            <div class="text-two">+0096 3434 5678</div>
                        </div>
                        <div class="email details">
                            <i class="fas fa-envelope"></i>
                            <div class="topic">Email</div>
                            <div class="text-one">codinglab@gmail.com</div>
                            <div class="text-two">info.codinglab@gmail.com</div>
                        </div>
                    </div>
                    <p className="text-2xl mt-5 italic">OUR VISION</p>
                    <p className="text-lg mt-5 mb-5"> Beauty is not about conforming to society's standards, but about celebrating diversity and individuality.</p>
                    <p className="text-2xl mt-5 italic">OUR MISSION</p>
                    <p className="text-lg mt-5 mb-10"> To provide a personalized and efficient way of shopping for makeup and skincare products by utilizing the latest technologies, including Artificial Intelligence (AI). </p>


                </div>
            </div>
            <Footer />
        </div>


    );
};

export default ContactUs;