// libraries
import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publicKey = 'pk_test_51JmyZVJ4EHBb36pT461WHpzQKRvaKOm2S4OrW1J14HsQdHywkmpiLfjG6eePXMWqx64PAUqwaSItORbc5S0Z4icU00cDdn7XFI';

    const onToken = (token) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token,
            },
        }).then((response) => {
            alert('Payment succesful');
        }).catch((error) => {
            console.log('Payment error: ', JSON.parse(error));
            alert('There was an issue with your payment. Please make sure You are suing the correct testing credit card data');
        });
    };
    
    return (
        <StripeCheckout
            label='Pay now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={ `Your total is $${ price }` }
            amount={ priceForStripe }
            panelLabel='Pay now'
            token={ onToken }
            stripeKey={ publicKey }
        />
    );
};

export default StripeCheckoutButton;