import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import Question from "./Question";
import { Button } from 'react-daisyui';
import heroImg from './images/f1.png'
import { Outlet } from 'react-router-dom';
import Product from './Product';
import ProductList from './ProductList';
import { QueryClient, QueryClientProvider } from 'react-query';






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

const queryClient= new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
 

    <div className="App">
      
      <Hero />

      <div className='w-full flex pt-10 bg-[#f8f1e9]'>

      <ProductList/>
      </div>

    </div>
    </QueryClientProvider>
  );
}

export default App;
