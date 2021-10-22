// libraries
import React from "react";
import { connect } from "react-redux";
// components
import CollectionItem from "../../components/collection-item/collection-item.component";
// redux
import { selectCollection } from "../../redux/shop/shop.selectors";
// styles
import {
    CollectionPageContainer,
    TitleContainer,
    ItemsContainer
} from './collection.styles';


const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <TitleContainer>{ title }</TitleContainer>
            <ItemsContainer>
                {
                    items.map(item => 
                        <CollectionItem key={ item.id } item={ item }/>)
                }
            </ItemsContainer>
        </CollectionPageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId.toLowerCase())(state)
});

export default connect(mapStateToProps)(CollectionPage);