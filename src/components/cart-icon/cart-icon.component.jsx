// libraries
import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
// redux
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
// styles
import './cart-icon.styles.scss';
// assets
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';


const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={ toggleCartHidden }>
        <ShoppingIcon className='shppping-icon'/>
        <span className='item-count'>{ itemCount }</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);