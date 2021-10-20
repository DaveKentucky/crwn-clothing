// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// styles
import './index.css';
// components
import App from './App';
// redux
import { store, persistor } from './redux/store';

ReactDOM.render(
  <Provider store={ store }>
    <HashRouter>
      <PersistGate persistor={ persistor }>
        <App />
      </PersistGate>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);