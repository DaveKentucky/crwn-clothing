// libraries
import React from 'react';
import { useDispatch } from 'react-redux';
// redux
import { clearItemStart, addItemStart, removeItemStart } from '../../redux/cart/cart.actions';
// styles
import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    NameContainer,
    QuantityContainer,
    RemoveButtonContainer
} from './checkout-item.styles'


const CheckoutItem = ({ cartItem }) => {
    const dispatch = useDispatch();
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={ imageUrl } alt='item' />
            </ImageContainer>
            <NameContainer>{ name }</NameContainer>
            <QuantityContainer>
                <div
                    className='arrow'
                    onClick={ () => dispatch(removeItemStart(cartItem)) }
                >
                    &#10094;
                </div>
                    <span className='value'>
                        { quantity }
                    </span>
                <div
                    className='arrow'
                    onClick={ () => dispatch(addItemStart(cartItem)) }
                >
                    &#10095;
                </div>
            </QuantityContainer>
            <TextContainer>${ price }</TextContainer>
            <RemoveButtonContainer onClick={ () => dispatch(clearItemStart(cartItem)) }>
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;