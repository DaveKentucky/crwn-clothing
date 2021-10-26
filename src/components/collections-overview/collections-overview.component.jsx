// libraries
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// components
import CollectionPreview from '../collection-preview/collection-preview.component'
// redux
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
// styles
import { CollectionsOverviewContainer } from './collections-overview.styles';


const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);