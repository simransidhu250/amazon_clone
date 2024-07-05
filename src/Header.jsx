import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider"

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to={!user && '/login'}>
                <img src='https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png' className='header__logo' />
            </Link >
            <div className="header__search">
                <input className='header__searchInput' type='text'></input>
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className="header__nav">
                <Link to={'/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="optionLineOne">Hello Guest</span>
                        <span className="optionLineTwo">{user ? 'Sign out' : 'Sign in'}</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="optionLineOne">Returns</span>
                    <span className="optionLineTwo">&Orders</span>
                </div>
                <div className="header__option">
                    <span className="optionLineOne">Your</span>
                    <span className="optionLineTwo">Prime</span>
                </div>
                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <Link to='/checkout'><span className="header__basketCount optionLineTwo">{basket?.length}</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Header


