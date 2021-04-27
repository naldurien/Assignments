import { Component } from "react"
import BookList from './BookList'
import '../css/BookListDisplay.css'


class BookListDisplay extends Component {
    constructor() {
        super()

        this.state = {
            books: []
        }
    } 

    componentDidMount() {
        this.getAllBooks()
    }

    getAllBooks = () =>{
        fetch('http://localhost:8080/books')
        .then(response => response.json())
        .then (books => {
            this.setState({
                books: books
            })
        })
    }

    handleOnDelete = (bookId) => {
        fetch(`http://localhost:8080/delete/${bookId}`,{
            method:'DELETE'
        }).then(response => response.json())
        .then(result => {
            if(result.success) {
                this.props.history.push('/')
                this.props.history.push('/books')

            }
        })
        
    }


    render() {
        return (
            <div class='book-list-display'>
                <BookList books= {this.state.books} onDelete = {this.handleOnDelete}/>
            </div>
        )
    }
}


export default BookListDisplay










