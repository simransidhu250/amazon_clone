import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { NumericFormat } from 'react-number-format';
import { getBasketTotal } from './reducer';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const { succeeeded, setSucceeded } = useState(false);
    const { processing, setProcessing } = useState("");

    const { error, setError } = useState(null);
    const { disabled, setDisabled } = useState(true);
    const { clientSecret, setClientSecret } = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer 
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the toatl in a currencies submits
                url: `/payments/create?total=${getBaseketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
    }, [basket])

    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff...

        event.preventDefault();
        setProcessing(true);


        // const payload = await stripe
    }

    const handleChange = event => {
        // Listen for the changes in CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                    <Link to="/checkout">{basket?.length}items</Link>
                    )
                </h1>

                {/* Payment section - delivery address */}

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>


                {/* Payment section - Review Items */}

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating} />

                        ))}
                    </div>
                </div>



                {/* Payment section - Payment method */}

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe magic will go here */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <NumericFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} // part of the homework
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* Error */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment
