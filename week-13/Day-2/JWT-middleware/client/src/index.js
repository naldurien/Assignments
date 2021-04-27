import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import BaseLayout from './components/BaseLayout'
import Login from './components/Login'
import Profile from './components/Profile'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore } from 'redux'
import reducer from './store/reducer'
import { Provider } from 'react-redux'
import { setAuthenticationHeader } from './utils/authenticate'
import requireAuth from './components/requireAuth'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const token = localStorage.getItem('jsonwebtoken')
setAuthenticationHeader(token)

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <BrowserRouter>
    <BaseLayout>
    <Switch>
    <Route exact path = '/' component = {Login} />
    <Route exact path = '/profile' component = {requireAuth(Profile)} />
    </Switch>
    </BaseLayout>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
