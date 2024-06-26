import React from 'react'
import "./Home.css"
import Product from "./Product.jsx"

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className="home__image" src="https://store-images.s-microsoft.com/image/apps.24594.14606951565968665.3ee1b191-70b1-4906-a2af-cd057bdef580.c3e81551-5bc2-45ab-9892-204e5c16c034?mode=scale&q=90&h=720&w=1280" alt="" />
                <div className="home__row">
                    <Product
                        id="0"
                        title="Zero To One"
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/51zGCdRQXOL._SL1200_.jpg"
                        rating={5}
                    />

                    <Product
                        id="1"
                        title="Think and Grow Rich"
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/61CIKpN5QjL._AC_UF1000,1000_QL80_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="2"
                        title="Rich Dad Poor Dad"
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg"
                        rating={5}
                    />
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                </div>
            </div>

        </div >
    )
}

export default Home
