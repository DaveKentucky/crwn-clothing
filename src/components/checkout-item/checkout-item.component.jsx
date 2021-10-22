// libraries
import React from "react";
import { connect } from "react-redux";
// redux
import { clearItem, addItem, removeItem } from "../../redux/cart/cart.actions";
// styles
import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
} from './checkout-item.styles'


const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={ imageUrl } alt='item' />
            </ImageContainer>
            <TextContainer>{ name }</TextContainer>
            <QuantityContainer>
                <div
                    className='arrow'
                    onClick={ () => removeItem(cartItem) }
                >
                    &#10094;
                </div>
                    <span className='value'>
                        { quantity }
                    </span>
                <div
                    className='arrow'
                    onClick={ () => addItem(cartItem) }
                >
                    &#10095;
                </div>
            </QuantityContainer>
            <TextContainer>${ price }</TextContainer>
            <RemoveButtonContainer onClick={ () => clearItem(cartItem) }>
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItem(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);