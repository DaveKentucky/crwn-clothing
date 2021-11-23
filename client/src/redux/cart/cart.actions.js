import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item,
});

export const addItemStart = (item) => ({
    type: CartActionTypes.ADD_ITEM_START,
    payload: item,
});

export const addItemSuccess = (cartItems) =>({
    type: CartActionTypes.ADD_ITEM_SUCCESS,
    payload: cartItems,
});

export const addItemFailure = (error) => ({
    type: CartActionTypes.ADD_ITEM_FAILURE,
    payload: error,
});

export const clearItem = (item) => ({
    type: CartActionTypes.CLEAR_ITEM,
    payload: item,
});

export const removeItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item,
});

export const removeItemStart = (item) => ({
    type: CartActionTypes.REMOVE_ITEM_START,
    payload: item,
});

export const removeItemSuccess = (cartItems) => ({
    type: CartActionTypes.REMOVE_ITEM_SUCCESS,
    payload: cartItems,
});

export const removeItemFailure = (error) => ({
    type: CartActionTypes.REMOVE_ITEM_FAILURE,
    payload: error,
});

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART,
});