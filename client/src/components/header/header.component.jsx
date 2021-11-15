// libraries
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
// redux
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
// styles
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';
// assets
import { ReactComponent as Logo } from '../../assets/crown.svg'


const Header = () => {
    const currentUser = useSelector(selectCurrentUser);
    const hidden = useSelector(selectCartHidden);
    const dispatch = useDispatch();

    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/shop'>
                    CONTACT
                </OptionLink>
                {
                    currentUser
                    ? (
                        <OptionLink as='div' onClick={ () => dispatch(signOutStart()) }>
                            SIGN OUT
                        </OptionLink>
                    )
                    : <OptionLink to='/sign-in'>SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ?
                null
                : <CartDropdown />
            }
        </HeaderContainer>
    );
};

export default Header;