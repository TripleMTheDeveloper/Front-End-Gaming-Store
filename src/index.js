import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './components/Cart';
import { Provider } from 'react-redux';
import store from './store/Store';

ReactDOM.render(
  <Provider store={store}>
    <CartProvider>
      <App />
    </CartProvider>
  </Provider>,
  document.getElementById('root')
);



