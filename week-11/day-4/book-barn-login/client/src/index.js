import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BaseLayout } from './components/BaseLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BookListPage from './components/BookListPage';
import HomePage from './components/HomePage';
import AddBookPage from './components/AddBookPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path = "/" component = {HomePage} />
          <Route exact path = "/books" component = {BookListPage} />
          <Route exact path = "/add-book" component = {AddBookPage} />
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
