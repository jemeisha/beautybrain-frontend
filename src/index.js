import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Product from './Product';
import HeroBanner from './HeroBanner';
import Recommender from './Recommender';
import { QueryClient, QueryClientProvider } from 'react-query';
import Result from './Result';
import { PredictContext } from './Contexts';
import AboutUs from './AboutUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <HeroBanner />
      },
      {
        path: '/quiz',
        element: <Recommender />
      }
    ]
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/result",
    element: <Result />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  }

]);

function Main({ children }) {

const[answers,setAnswers]= useState([])
const [imgData, setImgData] = useState("")
const [output, setOutput] = useState(0)
const [recommendedProducts, setRecommendedProducts] = useState([])

  return <PredictContext.Provider value={{
    answers,
    setAnswers,
    imgData,
    setImgData,
    output,
    setOutput,
    recommendedProducts,
    setRecommendedProducts
  }}>
    {children}
  </PredictContext.Provider>
}
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
