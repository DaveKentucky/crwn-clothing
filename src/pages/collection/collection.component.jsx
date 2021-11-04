// libraries
import React from "react";
import { useRouteMatch } from "react-router";
// components
import CollectionItem from "../../components/collection-item/collection-item.component";
// redux
import { useShopCollections } from '../../hooks/selectors/use-shop-collections.selector';
// styles
import {
    CollectionPageContainer,
    TitleContainer,
    ItemsContainer
} from './collection.styles';


const CollectionPage = () => {
    const match = useRouteMatch();
    const collectionId = match.params.collectionId.toLowerCase();
    const { shopCollection } = useShopCollections();
    const { title, items } = shopCollection(collectionId);
    
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

export default CollectionPage;