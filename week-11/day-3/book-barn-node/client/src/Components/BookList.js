import { Component } from 'react'

class BookList extends Component {
    render() {
        const books = this.props.books
        const bookItems = books.map((book, index) => {
            return <div key={index}>
                        <img src={`${book.imageURL}`} alt="book cover"/><br />
                        {book.title}<br/>
                        Author: {book.author}<br/><br/>
                          </div>
        })
        return (
            <div>
                <h1>Our Customers' Top Picks</h1>
                {bookItems}
            </div>
        )
    }

}

export default BookList