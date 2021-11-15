// libraries
import React from 'react';
import { useDispatch } from 'react-redux';
// redux
import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions';
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
                    onClick={ () => dispatch(removeItem(cartItem)) }
                >
                    &#10094;
                </div>
                    <span className='value'>
                        { quantity }
                    </span>
                <div
                    className='arrow'
                    onClick={ () => dispatch(addItem(cartItem)) }
                >
                    &#10095;
                </div>
            </QuantityContainer>
            <TextContainer>${ price }</TextContainer>
            <RemoveButtonContainer onClick={ () => dispatch(clearItem(cartItem)) }>
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;