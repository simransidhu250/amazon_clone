
// contains secret key
import { onRequest } from "firebase-functions/v2/https";
import logger from "firebase-functions/logger";

import express, { json } from "express";
import cors from "cors";
const stripe = require("stripe")('')

// API

//Middlewares
const app = express();
// App config
app.use(cors({ origin: true }));
app.use(json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Received BOOM!!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  //subunits of the currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

export const api = onRequest(app)

// Example endpoint
// http://127.0.0.1:5001/clone-609bb/us-central1/api
