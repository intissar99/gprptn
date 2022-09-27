import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./scss/volt.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


console.log('zfzefzef', process.env.REACT_APP_Publishable_key)
const stripePromise = loadStripe("pk_test_51LZKnzLp8QJuE73WfzEvvgvLocqJsY5cOf5DPOx1EZ89XtDL9qcQayVNm81QoEP0KOYQvqfrCOJObqQoWKlG3t4y00TRpRPveS");


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Elements stripe={stripePromise}>
    <App />
  </Elements>


);



