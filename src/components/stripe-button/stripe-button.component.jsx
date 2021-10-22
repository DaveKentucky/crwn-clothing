// libraries
import React from "react";
import StripeCheckout from "react-stripe-checkout";


const onToken = (token) => {
    console.log(token);
    alert('Payment successful');
};

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publicKey = 'pk_test_51JmyZVJ4EHBb36pT461WHpzQKRvaKOm2S4OrW1J14HsQdHywkmpiLfjG6eePXMWqx64PAUqwaSItORbc5S0Z4icU00cDdn7XFI';

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