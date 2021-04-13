import React, { Component } from 'react'

class BookList extends Component {
  render() {
    const books = this.props.books
    const bookItems = books.map((book, index) => {
        return <div key = {index} className="Book"><br/>
                        <img src={`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}?raw=true"`} alt="book cover"/><br/>
                    <b>{book.title}</b>
                    <i>Author: {book.author}</i>
                </div>
    })
    return (
      <div>
        <h1 className = "BookList-title">Our Customers' Top Picks</h1>
        <div className = "BookList">{bookItems}</div>
      </div>
    )
  }
}

export default BookList