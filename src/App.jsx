// import { useState } from 'react'
import './App.css'
import Checkout from './Checkout.jsx';
import Header from './Header.jsx'
import Home from './Home.jsx'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    )
  );

  return (
    // BEM
    <div className='app'>
      <Header />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
