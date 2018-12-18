import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxStore from './state/store/ReduxStore';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={ReduxStore.store}>
    <App /> 
  </Provider>,
  document.getElementById('root')
);