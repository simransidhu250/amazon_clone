import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();
    return (

        <div className='checkout'>

            <div className="checkout__left">
                <img src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg" alt="" className="checkout__ad" />
                <div>
                    <h3>{user.email}</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    <h2>{basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating} />

                    ))}</h2>
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
