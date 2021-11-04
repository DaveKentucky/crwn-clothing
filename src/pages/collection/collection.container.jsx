// libraries
import { useSelector } from "react-redux";
// components
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from './collection.component';
// redux
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";


const CollectionPageContainer = () => {
    const isLoading = !useSelector(selectIsCollectionsLoaded);

    const CollectionPageWithSpinner = WithSpinner(CollectionPage, isLoading);
    return (
        <CollectionPageWithSpinner />
    );
};

export default CollectionPageContainer;