import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styled/style.css';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import AppRouter from './routers/AppRouter'

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
