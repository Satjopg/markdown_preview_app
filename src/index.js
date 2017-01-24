import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from "./Header";
import Footer from "./Footer";
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {grey100,fullBlack} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  appBar: {
    height: 64,
    color:grey100,
    textColor:fullBlack
  },
  Subheader: {
    fontWeight: 100
  }
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Header />
      <App />
      <Footer />
    </div>
  </MuiThemeProvider>,
  document.getElementById('root')
);
