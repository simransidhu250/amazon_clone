// import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Home from './Home.jsx'
import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    // BEM
    <Router>
      <div>
        <Header />

        <Home />
      </div>
    </Router>
  )
}

export default App
