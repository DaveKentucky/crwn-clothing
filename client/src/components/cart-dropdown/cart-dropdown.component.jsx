// libraries
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// components
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
// redux
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';
// styles
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from './cart-dropdown.styles'


const CartDropdown = () => {
    let history = useHistory();
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ? (
                        cartItems.map(cartItem =>
                        <CartItem
                            key={ cartItem.id }
                            item={ cartItem }
                        />
                    ))
                    : (
                        <EmptyMessageContainer>
                            Your cart is empty
                        </EmptyMessageContainer>
                    )
                }
            </CartItemsContainer>
            <CustomButton
                onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }}
            >
                GO TO CHECKOUT
            </CustomButton>
        </CartDropdownContainer>
    );
};

export default CartDropdown;