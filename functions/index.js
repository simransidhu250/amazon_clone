/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express")
const cors = require("cors")
const stripe = require("stripe")('secret key goes here')

// API

//Middlewares
const app = express();
// App config
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Received BOOM!!! for this amount >>>', total)

    console.paymentIntent = await stripe.paymentIntent.create({
        amount: total,  //subunits of the currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = onRequest(app)

// Example endpoint
// http://127.0.0.1:5001/clone-609bb/us-central1/api
