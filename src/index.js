import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from "./Header";
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <div>
      <Header />
      <App />
    </div>
  </MuiThemeProvider>,
  document.getElementById('root')
);
