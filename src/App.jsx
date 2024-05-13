// import { useState } from 'react'
import './App.css'
import Checkout from './Checkout.jsx';
import Header from './Header.jsx'
import Home from './Home.jsx'

import {
  createBrowserRouter,
  createRoutesFromElements, Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/checkout',
    element: <Checkout />
  }
]);
function App() {
  // const [count, setCount] = useState(0)


  return (
    // BEM
    <>
      <div className='app'>
        <RouterProvider router={router} />

      </div>
    </>
  )
}

export default App
