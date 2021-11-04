// libraries
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// redux
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { selectCollection } from '../../redux/shop/shop.selectors';


export const useShopCollections = () => {
    const dispatch = useDispatch();
  
    const useShopCollections = (collectionId) => useSelector(
        state => selectCollection(collectionId)(state)
    );
  
    const fetchShopCollections = useCallback(
        () => {
            dispatch(fetchCollectionsStart())
        },
        [dispatch]
    );
  
    return {
        fetchShopCollections: fetchShopCollections,
        shopCollection: useShopCollections
    };
};