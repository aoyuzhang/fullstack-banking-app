import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.scss';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <HashRouter basename='/'>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </HashRouter>,
  rootElement
);
