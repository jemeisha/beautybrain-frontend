import logo from './images/logo.png';
// import './App.css';
import { useState } from 'react';
import Question from "./Question";
import { Button } from 'react-daisyui';
import heroImg from './images/f1.png'
import glassImg from './images/glass_icon.jpg'
import lightImg from './images/light_icon.png'
import noMakeupImg from './images/noMakeup_icon.png'
import faceImg from './images/face_icon.png'
import mainLogo from './images/logo.png'
import { Outlet } from 'react-router-dom';
import Product from './Product';
import ProductList from './ProductList';
import Container from './Container';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import NavBar from './NavBar';
import Footer from './Footer';






function Hero() {
  return (
    <div className='flex flex-row w-full h-[40rem] overflow-hidden' >
      <div className='w-1/2 h-full'>
        <img src={heroImg} className='w-full h-full object-cover' /></div>
      <div className='bg-[#1D201F] text-[#F9E5D0] flex flex-col w-1/2'>

        <Outlet />
      </div>
    </div>
  )
}


function InstructionCard({ src, text }) {
  return (
    <div className="card w-52 h-52 bg-white shadow-xl overflow-hidden text-gray-400 flex">
      <div className="w-full h-52 bg-white">
        <figure><img src={src} className="w-full h-32 object-contain" /></figure>
      </div>
      <div className="card-body p-2 px-3">
        <h2 className="text-sm">
          {text}
        </h2>
      </div>
    </div>


  )

}


function Instructions() {
  return (
    <div className='grid grid-cols-4 mb-10'>
      <InstructionCard src={glassImg} text="Take off your glasses and make sure bangs are not covering your forehead" />
      <InstructionCard src={lightImg} text="Make sure that you're in a well-lit environment." />
      <InstructionCard src={noMakeupImg} text="Remove makeup to get more accurate results." />
      <InstructionCard src={faceImg} text="Look straight into the camera and keep your face in the circle." />
    </div>
  )

}

function App() {

  return (

      <div className="App">
        <NavBar/>

        <div className="App">
            <TawkMessengerReact
                propertyId="642a65954247f20fefe97611"
                widgetId="1gt2ppko5"/>
        </div>

        <Hero />


        <div className='w-full flex flex-col pt-10 bg-[#f8f1e9]'>
          <Container>
            <p className='font-serif text-2xl text-center mb-10' color='accent'>INSTRUCTIONS FOR BETTER AND ACCURATE RECOMMENDATIONS</p>
            <Instructions />
            <ProductList />
          </Container>
        </div>
        <Footer />
      </div>
    
  );
}

export default App;
