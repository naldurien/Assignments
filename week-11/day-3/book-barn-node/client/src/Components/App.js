import { Component } from 'react'
import AddBook from './AddBook'
import BookList from './BookList'

class App extends Component {
  constructor() {
    super()

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/books')
    .then(response => response.json())
    .then(results => {
      this.setState({
        books: results
      })
    })
    .catch((error) => {
      console.log('Unable to fetch.')
    })
  }


  render() {
    return (
      <div>
        <BookList books = {this.state.books}/>
      </div>
    )
  }
}

export default App;
