// libraries
import { all, call } from 'redux-saga/effects';
import { cartSagas } from './cart/cart.sagas';
// redux
import { fetchCollectionsStart, shopSagas } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';


export default function* rootSaga() {
    yield all([
        call(fetchCollectionsStart),
        call(userSagas),
        call(cartSagas),
        call(shopSagas),
    ]);
};