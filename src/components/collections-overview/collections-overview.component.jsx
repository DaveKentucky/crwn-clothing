// libraries
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// styles
import './collections-overview.styles.scss';
// components
import CollectionPreview from '../collection-preview/collection-preview.component'
// redux
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

const CollecionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollecionsOverview);