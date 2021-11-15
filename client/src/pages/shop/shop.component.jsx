// libraries
import React, { useEffect, lazy, Suspense } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// components
import Spinner from '../../components/spinner/spinner.component';
// redux
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
// lazy imports
// components
const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));


const ShopPage = () => {
    const dispatch = useDispatch();
    const match = useRouteMatch();
    
    useEffect(
        () => {
            dispatch(fetchCollectionsStart());
        },
        [dispatch]
    );

    return(
        <div className='shop-page'>
            <Suspense fallback={ <Spinner /> }>
                <Route
                    exact path={ `${match.path}` }
                    component={ CollectionsOverviewContainer }
                />
                <Route
                    path={ `${match.path}/:collectionId` }
                    component={ CollectionPageContainer }
                />
            </Suspense>
        </div>
    );
};

export default ShopPage;