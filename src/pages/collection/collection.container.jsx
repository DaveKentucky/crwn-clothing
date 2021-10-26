// libraries
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
// components
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from './collection.component';
// redux
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";


const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;