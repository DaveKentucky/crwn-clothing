// libraries
import React from "react";
import { useRouteMatch } from "react-router-dom";
// components
import CollectionItem from "../collection-item/collection-item.component";
// styles
import {
    CollectionPreviewContainer,
    TitleLinkContainer,
    TitleContainer,
    PreviewContainer
} from './collection-preview.styles';


const CollectionPreview = ( { title, items } ) => {
    const match = useRouteMatch();

    return (
    <CollectionPreviewContainer>
        <TitleLinkContainer to={ `${match.path}/${title.toLowerCase()}` }>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
        </TitleLinkContainer>
        <PreviewContainer>
            {items
                .filter((item, index) => index < 4)
                .map((item) => (
                    <CollectionItem key={ item.id } item={ item }/>
                ))
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
    );
};

export default CollectionPreview;