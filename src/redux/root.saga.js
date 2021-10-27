// libraries
import { all, call } from 'redux-saga/effects';
// redux
import { fetchCollectionsStart } from './shop/shop.sagas';


export default function* rootSaga() {
    yield all([
        call(fetchCollectionsStart),
    ]);
};