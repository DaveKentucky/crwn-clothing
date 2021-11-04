// libraries
import React from "react";
import { useSelector } from "react-redux";
// components
import CollectionPreview from '../collection-preview/collection-preview.component'
// redux
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
// styles
import { CollectionsOverviewContainer } from './collections-overview.styles';


const CollectionsOverview = () => {
    const collections = useSelector(selectCollectionsForPreview);

    return (
        <CollectionsOverviewContainer>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </CollectionsOverviewContainer>
    );
};

export default CollectionsOverview;