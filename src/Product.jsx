import React from 'react'
import "./Product.css"
import StarIcon from '@mui/icons-material/Star';

function Product({ id, title, price, rating, image }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (<p><StarIcon /></p>))}
                </div>
            </div>
            <p></p>
            <img src={image} alt="" />
            <button>Add to Basket</button>
        </div>

    )
}

export default Product
