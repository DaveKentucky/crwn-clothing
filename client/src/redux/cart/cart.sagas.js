// libraries
import { all, call, takeLatest, takeEvery, put } from 'redux-saga/effects';
import { query, where, collection, getDocs } from 'firebase/firestore';
// redux
import UserActionTypes from '../user/user.types';
import {
    clearCart,
    addItem,
    addItemSuccess,
    addItemFailure,
    removeItem,
    removeItemSuccess,
    removeItemFailure,
    clearItem,
    clearItemSuccess,
    clearItemFailure,
    updateCart,
    updateCartFailure,
} from './cart.actions';
import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';
// firebase
import {
    firestore,
    getCurrentUser,
} from '../../firebase/firebase.utils';


// listener functions
export function* onSignOutSuccess() {
    yield takeLatest(
        UserActionTypes.SIGN_OUT_SUCCESS,
        clearCartOnSignOut,
    );
};

export function* onSignInSuccess() {
    yield takeLatest(
        UserActionTypes.SIGN_IN_SUCCESS,
        updateCartOnSignIn,
    );
};

export function* onAddItemStart() {
    yield takeEvery(
        CartActionTypes.ADD_ITEM_START,
        addItemToCartAsync,
    );
};

export function* onRemoveItemStart() {
    yield takeEvery(
        CartActionTypes.REMOVE_ITEM_START,
        removeItemFromCartAsync,
    );
};

export function* onClearItemStart() {
    yield takeLatest(
        CartActionTypes.CLEAR_ITEM_START,
        clearItemFromCartAsync,
    );
};

// saga functions
export function* clearCartOnSignOut() {
    yield put(clearCart());
};

export function* updateCartOnSignIn({ payload: { id } }) {
    try {
        const q = query(collection(firestore, 'carts'), where('userId', '==', id));
        const cartSnapshot = yield getDocs(q);

        if(cartSnapshot.docs.length > 0) {
            const cartItems = cartSnapshot.docs[0].data().cartItems;
            yield put(updateCart(cartItems));
        };
    } catch(error) {
        yield put(updateCartFailure(error));
    };
};

export function* addItemToCartAsync({ payload: item }) {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) {
            yield put(addItem(item));
        } else {
            yield addItemToCartInDatabase(userAuth.uid, item);
        };
    } catch(error) {
        yield put(addItemFailure(error));
    };
};

function* addItemToCartInDatabase(userId, item) {
    try {
        const q = query(collection(firestore, 'carts'), where('userId', '==', userId));
        const cartSnapshot = yield getDocs(q);
        
        const cartItems = cartSnapshot.docs.length > 0 ? cartSnapshot.docs[0].data().cartItems : [];
        const cartId = cartSnapshot.docs.length > 0 ? cartSnapshot.docs[0].id : null;

        const cartRef = cartId ? yield firestore.collection('carts').doc(cartId) : firestore.collection('carts').doc();
        const newCartItems = addItemToCart(cartItems, item);
        yield cartId ? cartRef.update({ cartItems: newCartItems }) : cartRef.set({ cartItems: newCartItems, userId });
        
        yield put(addItemSuccess(newCartItems));
    } catch(error) {
        yield put(addItemFailure(error));
    };
};

export function* removeItemFromCartAsync({ payload: item }) {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) {
            yield put(removeItem(item));
        } else {
            yield removeItemFromCartInDatabase(userAuth.uid, item);
        };
    } catch(error) {
        yield put(removeItemFailure(error));
    };
};

export function* removeItemFromCartInDatabase(userId, item) {
    try {
        const q = query(collection(firestore, 'carts'), where('userId', '==', userId));
        const cartSnapshot = yield getDocs(q);
        
        if(cartSnapshot.docs.length > 0) {
            const cartItems = cartSnapshot.docs[0].data().cartItems;
            const cartId = cartSnapshot.docs[0].id;
            const cartRef = yield firestore.collection('carts').doc(cartId);
            const newCartItems = removeItemFromCart(cartItems, item);
            yield cartRef.update({ cartItems: newCartItems });
            yield put(removeItemSuccess(newCartItems));
        };
    } catch(error) {
        yield put(removeItemFailure(error));
    };
};

export function* clearItemFromCartAsync({ payload: item }) {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) {
            yield put(clearItem(item));
        } else {
            yield clearItemFromCartInDatabase(userAuth.uid, item);
        };
    } catch(error) {
        yield put(removeItemFailure(error));
    };
};

export function* clearItemFromCartInDatabase(userId, item) {
    try {
        const q = query(collection(firestore, 'carts'), where('userId', '==', userId));
        const cartSnapshot = yield getDocs(q);
        
        if(cartSnapshot.docs.length > 0) {
            const cartItems = cartSnapshot.docs[0].data().cartItems;
            const cartId = cartSnapshot.docs[0].id;
            const cartRef = yield firestore.collection('carts').doc(cartId);
            const newCartItems = cartItems.filter(cartItem => (
                cartItem.id !== item.id
            ));
            yield cartRef.update({ cartItems: newCartItems });
            yield put(clearItemSuccess(newCartItems));
        };
    } catch(error) {
        yield put(clearItemFailure(error));
    };
};

export function* cartSagas() {
    yield all([
        call(onSignOutSuccess),
        call(onSignInSuccess),
        call(onAddItemStart),
        call(onRemoveItemStart),
        call(onClearItemStart),
    ]);
};