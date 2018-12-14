import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'

import App from '../components/app'
// import Index from '../components/index'
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
            <Route exact path="/" component={App}/>
          </Switch>
        </App>
      </BrowserRouter>
    </Provider>,
    document.getElementById('application')
  )
})
