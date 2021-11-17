// libraries
import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// components
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
// redux
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
// styles
import { GlobalStyle } from './global.styles';
// lazy imports
// pages
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));


const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  
  useEffect(
    () => {
      dispatch(checkUserSession());
    },
    [dispatch]
  );
  
  return (
    <div>
    <GlobalStyle />
      <Header/>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={ <Spinner /> }>
            <Route exact path='/' component={ HomePage } />
            <Route path='/shop' component={ ShopPage } />
            <Route exact path='/checkout' component={ CheckoutPage } />
            <Route exact path='/sign-in' render={ () => currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage /> } />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

export default App;