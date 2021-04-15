import { Component } from 'react';
import BookList from './BookList';

class BookListPage extends Component {
  constructor() {
    super()

    this.state = {
        books: []
    }
  }

  componentDidMount() {
    this.getAllBooks()
  }   

  getAllBooks = () => {
    fetch('http://localhost:8000/books')
    .then(response => response.json())
    .then(books => {
      this.setState({
        books: books
      })
    })
  }
    
    render() {
        return(
            <BookList books = {this.state.books} />
        )
    }
}

export default BookListPage