// libraries
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
// components
import Header from './components/header/header.component';
// redux
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
// styles
import './App.css';


const App = () => {
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(checkUserSession());
    },
    [dispatch]
  );
  const currentUser = useSelector(selectCurrentUser);
  
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/shop' component={ ShopPage } />
        <Route exact path='/checkout' component={ CheckoutPage } />
        <Route exact path='/sign-in' render={ () => currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage /> } />
      </Switch>
    </div>
  );
};

export default App;