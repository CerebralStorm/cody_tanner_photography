import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import '../stylesheets/bootstrap-theme';

import '../stylesheets/main';
import '../js/main';
import '../vendor/owl-carousel/owl.carousel.js';
import '../vendor/owl-carousel/owl.carousel.css';
import '../vendor/owl-carousel/owl.theme.css';
import '../vendor/owl-carousel/owl.transitions.css';

import App from '../components/app';
import Index from '../components/index';
// import Shop from '../components/shop'
// import Product from '../components/products/product'
// import Cart from '../components/cart'
// import Gallery from '../components/gallery'
// import Contact from '../components/contact'
// import Account from '../components/account'
// import Order from '../components/order'
// import Checkout from '../components/cart/checkout'
// import CheckoutConfirmation from '../components/cart/checkout_confirmation'
// import NotFound from '../components/not_found'
// import Unauthorized from '../components/unauthorized'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Switch>
            <Route exact path="/" component={Index}/>
          </Switch>
        </App>
      </BrowserRouter>
    </Provider>,
    document.getElementById('application')
  )
})
