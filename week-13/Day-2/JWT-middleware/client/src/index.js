import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import BaseLayout from './components/BaseLayout'
import Login from './components/Login'
import Profile from './components/Profile'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <BaseLayout>
    <Switch>
    <Route exact path = '/' component = {Login} />
    <Route exact path = '/profile' component = {Profile} />
    </Switch>
    </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
