import './App.css';
import './Menu.css';
import './Footer.css';
import './BookList.css';
import React, {Component} from 'react'
import Menu from './Menu';
import Footer from './Footer';
import BookList from './BookList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: []
    }
  }
  
  componentDidMount() {
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    .then(response => response.json())
    .then(results => {
      this.setState({
        books: results
      })
    })
  }
  
  
  render() {
    return (
      <div>
        <Menu/>
        <BookList books = {this.state.books}/>
        <Footer/>
      </div>
    )
  }
}

export default App;
