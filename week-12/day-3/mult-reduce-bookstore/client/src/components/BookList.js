import { Component } from "react"
import { connect } from 'react-redux'
import * as actionCreators from '../stores/creators/actionCreators'


class BookList extends Component {
    handleCartAdd = (book) => {
        this.props.onCartAdd(book)
    }

    handleFavAdd = (book) => {
        this.props.onFavAdd(book)
    }

    render() {
        const books = this.props.books
        const bookItems = books.map((book, index) => {
            return <div  key = {book.book_id} className="card" style={{width: "18rem"}}>
                    <div>
                        <div>
                        <img src={`${book.image_url}`} alt="book cover art"/>
                        </div>
                        <div>
                            <h2>{book.title}</h2>
                        </div>
                        <div>
                            <h5>by {book.author}</h5>
                        </div>
                        <div>
                            <button class = 'button' onClick = {() => this.handleFavAdd(book)}>Save As Favorite</button>
                        </div><br /> 
                        <div>
                            <button class = 'button' onClick = {() => this.handleCartAdd(book)}>Add to Cart</button>
                        </div><br /> 
                        <div>
                            <a href={`/update/${book.book_id}`} class = 'button'>Update This Book</a>
                        </div><br />    
                            <button class = 'button' onClick= {() => this.props.onDelete(book.book_id)}>Delete This Book</button>
                    </div><br/><br/><br/>
                </div>
        })

        return (
            <div>
                <div>
                    <h1>View All Books</h1>
                </div>
                <div className="book-items">
                    {bookItems}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCartAdd:(book) => dispatch(actionCreators.ADD_TO_CART(book)),
        onFavAdd:(book) => dispatch(actionCreators.ADD_FAVORITE(book))
    }
}


export default connect(null, mapDispatchToProps)(BookList)
