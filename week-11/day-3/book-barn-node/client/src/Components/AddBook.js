import { Component } from 'react'

class AddBook extends Component {
    constructor() {
        super()
        this.state = {
            title: "",
            author: "",
            isbn: "",
            genre: "",
            publisher: "",
            year: "",
            imageURL:""
        }
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSave = () => {
        fetch('http://localhost:8080/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                author: this.state.author,
                isbn: this.state.isbn,
                genre: this.state.genre,
                publisher: this.state.publisher,
                year: this.state.year,
                imageURL: this.state.imageURL
            })
        }).then(response => response.json())
        .then(result=> {
            if(result.success) {
                console.log(this.props)
                this.props.history.push('/books')
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Add Movie</h1>
                <input type="text" onChange={this.handleOnChange} placeholder="Title" name="title" />
                <input type="text" onChange={this.handleOnChange} placeholder="Author" name="author" />
                <input type="text" onChange={this.handleOnChange} placeholder="ISBN" name="isbn" />
                <input type="text" placeholder="Genre" onChange={this.handleOnChange} name="genre" /><br/>
                <input type="text" placeholder="Publisher" onChange={this.handleOnChange} name="publisher" />
                <input type="text" placeholder="Year" onChange={this.handleOnChange} name="year" />
                <input type="text" placeholder="Image URL" onChange={this.handleOnChange} name="imageURL" /><br/>
                <button onClick = {this.handleSave}>Save</button>
            </div>
        )
    }
}

export default AddBook;