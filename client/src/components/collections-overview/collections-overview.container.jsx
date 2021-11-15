// libraries
import { useSelector } from 'react-redux';
// components
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';
// redux
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';


const CollectionsOverviewContainer = () => {
    const isLoading = useSelector(selectIsCollectionFetching);

    const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview, isLoading);
    return (
            <CollectionsOverviewWithSpinner />
    );
}

export default CollectionsOverviewContainer;