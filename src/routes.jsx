import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

/* Screens */
import InitialScreen from './screens/Initial.jsx';
import LoginScreen from './screens/Login.jsx';

const Routes = () => (
  <Router>
    <div>
      <Route exact path='/' component={InitialScreen} />
      <Route path='/login' component={LoginScreen} />
    </div>
  </Router>
);

export default Routes;
