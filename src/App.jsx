import './App.css'
import Checkout from './Checkout.jsx';
import Header from './Header.jsx'
import Home from './Home.jsx'
import reducer, { initialState } from './reducer'
import Login from './Login.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useStateValue } from './StateProvider.jsx';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.jsx';
import Payment from './Payment.jsx'



function App() {
  const [{ }, dispatch] = useStateValue();

  console.log("APP FUNCTION IS EXECUTED")

  useEffect(() => {
    //will only run once when the app component loads...

    onAuthStateChanged(auth, (authUser) => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
        // the user just logged in / the user was logged in
      }
      else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])

  // const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: '*',
      element: <div><Header /><Home /></div>
    },
    {
      path: '/',
      element: <div><Header /><Home /></div>
    },
    {
      path: '/checkout',
      element: <div><Header /><Checkout /></div>
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/payment',
      element: <Payment />
    }


  ]);

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