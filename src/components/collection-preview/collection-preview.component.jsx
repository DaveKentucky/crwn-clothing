// libraries
import React from "react";
// styles
import './collection-preview.styles.scss';
// components
import CollectionItem from "../collection-item/colelction-item.component";

const CollectionPreview = ( {title, items} ) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, index) => index < 4)
                .map((item) => (
                    <CollectionItem key={ item.id } item={ item }/>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;