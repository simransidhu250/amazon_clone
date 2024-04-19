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
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route path="/checkout" element={<Checkout />} />
    </Route >
  )
);
function App() {
  // const [count, setCount] = useState(0)


  return (
    // BEM
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
