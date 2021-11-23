// libraries
import React from 'react';
import { useDispatch } from 'react-redux';
// redux
import { addItemStart } from '../../redux/cart/cart.actions';
// styles
import {
    CollectionItemContainer,
    ImageContainer,
    CollectionFooterContainer,
    NameContainer,
    PriceContainer,
    AddToCartButton
} from './collection-item.styles';


const CollectionItem = ({ item }) => {
    const dispatch = useDispatch();
    const { name, price, imageUrl } = item;

    return (
        <CollectionItemContainer>
            <ImageContainer imageUrl={ imageUrl } />
            <CollectionFooterContainer>
                <NameContainer>{ name }</NameContainer>
                <PriceContainer>{ price }</PriceContainer>
            </CollectionFooterContainer>
            <AddToCartButton 
                inverted 
                onClick={ () => dispatch(addItemStart(item)) }
            >
                Add to cart
            </AddToCartButton>
        </CollectionItemContainer>
    );
};

export default CollectionItem;