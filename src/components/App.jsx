import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProvideAuth } from '../hooks/useAuth';
import PrivateRoute from '../routes/PrivateRoute';
import ReversedPrivateRoute from '../routes/ReversedPrivateRoute';
import HomePage from './HomePage/HomePage';
import SignInPage from './SignInPage/SignInPage';
import SignUpPage from './SignUpPage/SignUpPage';
import AdminPage from './AdminPage/AdminPage';
import CheckoutPage from './CheckoutPage/CheckoutPage';
import OrdersPage from './OrdersPage/OrdersPage';

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <ReversedPrivateRoute exact path='/login'>
            <SignInPage /> 
          </ReversedPrivateRoute>
          <Route exact path='/signup' component={SignUpPage} />
          <PrivateRoute exact path='/admin'>
            <AdminPage />
          </PrivateRoute>
          <PrivateRoute exact path='/checkout/:id'>
            <CheckoutPage />
          </PrivateRoute>
          <PrivateRoute exact path='/orders'>
            <OrdersPage />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  )
}

export default App;
