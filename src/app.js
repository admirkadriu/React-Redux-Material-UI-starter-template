import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';

import AppRouter from './routers/AppRouter'
import configureStore from './store/config/configureStore';
import {logout} from './store/actions/auth';
import {theme} from './theme/theme';
import './styles/styles.css';


const store = configureStore();

store.subscribe(()=>{
  console.log(store.getState());
});



const App = () => (
  <Provider store={store}>
  <MuiThemeProvider theme={theme}>
    <AppRouter />
  </MuiThemeProvider>
  </Provider>
);


store.dispatch(logout());


render(<App />, document.getElementById('app'));