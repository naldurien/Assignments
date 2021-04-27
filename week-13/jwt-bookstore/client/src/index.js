import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import BaseLayout from './components/BaseLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { combineReducers, createStore } from 'redux'
// import reducer from './stores/reducer';
import { Provider } from 'react-redux';
import HomePage from './components/HomePage';
import RegistrationPage from './components/RegistrationPage';
import BookListDisplay from './components/BookListDisplay';
import AddBookPage from './components/AddBookPage';
import UpdateBookPage from './components/UpdateBookPage';
import Cart from './components/Cart';
import cartReducer from './stores/reducers/cartReducer'
import authReducer from './stores/reducers/authReducer'
import favReducer from './stores/reducers/favReducer'

const rootReducer = combineReducers({
  cartR: cartReducer,
  authR: authReducer,
  favR: favReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path = '/' component = {HomePage} />
            <Route exact path = '/register' component = {RegistrationPage} />
            <Route exact path = '/books' component = {BookListDisplay} />
            <Route exact path = '/add-book' component = {AddBookPage} />/add-book" component = {AddBookPage} />
            <Route exact path = '/update/:book_id' component = {UpdateBookPage} />
            <Route exact path = '/cart' component = {Cart} />
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
