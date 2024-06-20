import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Your main app component
import { CartProvider } from './components/Cart';
import { AuthProvider } from './components/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <CartProvider>
      <App />
    </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

