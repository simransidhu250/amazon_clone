import React from 'react'
import "./Checkout.css"
function Checkout() {
    return (
        <div className='checkout'>
            <div className="chekcout__left">
                <img src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg" alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    {/* <BasketItem /> */}
                    {/* <BasketItem /> */}
                    {/* <BasketItem /> */}
                    {/* <BasketItem /> */}
                </div>
            </div>

            <div className="checkout__right">
                <h2>The subtotal will go here</h2>
            </div>
        </div>
    )
}

export default Checkout
