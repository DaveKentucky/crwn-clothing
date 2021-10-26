// libraries
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
// components
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";
// redux
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;