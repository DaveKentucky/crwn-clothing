// libraries
import React from "react";
import { useDispatch } from 'react-redux';
// components
import CustomButton from "../custom-button/custom-button.component";
// redux
import { addItem } from "../../redux/cart/cart.actions";
// styles
import {
    CollectionItemContainer,
    ImageContainer,
    CollectionFooterContainer,
    NameContainer,
    PriceContainer
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
            <CustomButton inverted onClick={ () => dispatch(addItem(item)) }>Add to cart</CustomButton>
        </CollectionItemContainer>
    );
};

export default CollectionItem;