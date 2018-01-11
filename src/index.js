import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes.jsx';

/* External Libs */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/* Styles */
import './style/general.css';

ReactDOM.render(
  <MuiThemeProvider>
    <Routes />
  </MuiThemeProvider>,
  document.getElementById('root')
);
