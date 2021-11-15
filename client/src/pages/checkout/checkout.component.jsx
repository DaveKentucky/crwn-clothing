// libraries
import React from 'react';
import { useSelector } from 'react-redux';
// components
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
// redux
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
// styles
import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalPriceContainer,
    TestWarningContainer
} from './checkout.styles';


const CheckoutPage = () => {
    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);
    
    return(
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer>
                    <span>PRODUCT</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>DESCRIPTION</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>QUANTITY</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>PRICE</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>REMOVE</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={ cartItem.id } cartItem={ cartItem }/>
                ))
            }
            <TotalPriceContainer>
                <span>TOTAL: ${ total }</span>
            </TotalPriceContainer>
            <TestWarningContainer>
                Please use the following test card number for the payments
                <br />
                4242 4242 4242 4242 - exp.: 01/24 - CVV: 123
            </TestWarningContainer>
            <StripeCheckoutButton price={ total }/>
        </CheckoutPageContainer>
    );
};

export default CheckoutPage;