import React from 'react'
import CurrencyFormat from 'react-currency-format'
import "./Subtotal.css"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom'


function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    const navigate = useNavigate();
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        {/* Part of homework*/}
                        <p>
                            Subtotal({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} // part of the homework
                displayType={'text'}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={() => navigate('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
