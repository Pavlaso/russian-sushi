import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import sushi from "./redux/sushi";
import filter  from "./redux/filters";
import cart from "./redux/cart";
import {BrowserRouter} from 'react-router-dom'

const store = configureStore({ reducer: { sushi, filter, cart } })

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
