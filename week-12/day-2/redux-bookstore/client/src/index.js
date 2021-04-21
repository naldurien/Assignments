import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import BaseLayout from './components/BaseLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux'
import reducer from './stores/reducer';
import { Provider } from 'react-redux';
import HomePage from './components/HomePage';
import BookListDisplay from './components/BookListDisplay';
import AddBookPage from './components/AddBookPage';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path = "/" component = {HomePage} />
            <Route exact path = "/books" component = {BookListDisplay} />
            <Route exact path = "/add-book" component = {AddBookPage} />
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
