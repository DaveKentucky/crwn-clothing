// libraries
import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
// components
import CollectionItem from "../../components/collection-item/collection-item.component";
// redux
import { selectCollection, selectCollections } from "../../redux/shop/shop.selectors";
// styles
import {
    CollectionPageContainer,
    TitleContainer,
    ItemsContainer
} from './collection.styles';


const CollectionPage = () => {
    const match = useRouteMatch();
    const collectionId = match.params.collectionId.toLowerCase();
    const { title, items } = useSelector((state) => selectCollection(state, collectionId));
    
    return (
        <CollectionPageContainer>
            <TitleContainer>{ title }</TitleContainer>
            <ItemsContainer>
                {
                    items.map(item => 
                        <CollectionItem key={ item.id } item={ item }/>
                    )
                }
            </ItemsContainer>
        </CollectionPageContainer>
    );
};

// const mapStateToProps = (state, ownProps) => ({
//     collection: selectCollection(ownProps.match.params.collectionId.toLowerCase())(state)
// });

export default CollectionPage;