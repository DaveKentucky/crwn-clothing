// libraries
import React from "react";
import { Link, withRouter } from "react-router-dom";
// components
import CollectionItem from "../collection-item/colelction-item.component";
// styles
import './collection-preview.styles.scss';


const CollectionPreview = ( { title, items, match } ) => (
    <div className='collection-preview'>
        <Link className='title-link' to={ `${match.path}/${title.toLowerCase()}` }>
            <h1 className='title'>{title.toUpperCase()}</h1>
        </Link>
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

export default withRouter(CollectionPreview);