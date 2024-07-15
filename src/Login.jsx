import React, { useState } from 'react'
import { Link } from "react-router-dom"
import './Login.css'
import { auth } from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signIn = e => {
        e.preventDefault()

        // firebase login
        signInWithEmailAndPassword(auth, email, password)
            .then(auth => {
                navigate('/')
            })
    }
    const register = e => {
        e.preventDefault();

        // firebase register

        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                // It successfully created a new user with email and password
                if (auth) {
                    navigate('/');
                }
            })
            .catch(error => alert(error.message))


    }

    return (
        <div className='login'>
            <Link to="/">
                <img className='login__logo' src='https://assets.aboutamazon.com/88/05/0feec6ff47bab443d2c82944bb09/amazon-logo.png' />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" className='login__signInButton' onClick={signIn}>Sign in</button>

                    <p>By signing-in your agree to AMAZON FAKE CLONE's Conditions
                        of Use & Sale. Please see our Privacy Notice,
                        our Cookies Notice and our Interest-Based Ads</p>

                    <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
