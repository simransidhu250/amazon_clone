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
    <Route path="/" element={<Home />}>
      <Route path="/checkout" element={<Checkout />} />
    </Route>
  )
);
function App() {
  // const [count, setCount] = useState(0)


  return (
    // BEM
    <div className='app'>
      <Header />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
