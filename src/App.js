import logo from './logo.svg';
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

function Footer() {

  return (
    <footer className="footer items-center p-4 bg-[#2f2d2a] text-[#F9E5D0]">
      <div className="items-center grid-flow-col">
        <img src={mainLogo} width="36" height="36" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd" className="fill-current" />
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
        </a>
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
      </div>
    </footer>
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
