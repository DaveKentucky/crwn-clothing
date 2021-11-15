// libraries
import React from 'react';
import { useParams } from 'react-router-dom';
// components
import CollectionItem from '../../components/collection-item/collection-item.component';
// redux
import { useShopCollections } from '../../hooks/selectors/use-shop-collections.selector';
// styles
import {
    CollectionPageContainer,
    TitleContainer,
    ItemsContainer
} from './collection.styles';


const CollectionPage = () => {
    const params = useParams();
    const collectionId = params.collectionId.toLowerCase();
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