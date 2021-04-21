import { Component } from 'react'
import '../css/AddBookPage.css'

class AddBookPage extends Component {
    constructor () {
        super()

        this.state = { 
            title: '',
            author: '',
            genre: '',
            publisher: '',
            year: '',
            image_url: ''

        }
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSave = () => {
        fetch ('http://localhost:8080/add-book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                title: this.state.title,
                author: this.state.author,
                genre: this.state.genre,
                publisher: this.state.publisher,
                year: this.state.year,
                image_url: this.state.image_url
            })
        }).then(response => response.json())
        .then(result => {
            if(result.success) {
                this.props.history.push('/books')
            }
        })
    }

    render() {
        return(
            <div class='add-book-form'>
                <br/>
                <div>
                    <h1>Add A Book To Our Database</h1>
                </div><br/>
                <div>
                    <input type = "text" onChange = {this.handleOnChange} placeholder = "Title" name = "title" />
                </div><br/>
                <div>
                    <input type = "text" onChange = {this.handleOnChange} placeholder="Author" name = "author" />
                </div><br/>
                <div>
                    <input type = "text" onChange = {this.handleOnChange} placeholder="Genre" name = "genre" />
                </div><br/>
                <div>
                    <input type = "text" onChange = {this.handleOnChange} placeholder = "Publisher" name = "publisher" />
                </div><br/>
                <div>
                    <input type = "text" onChange = {this.handleOnChange} placeholder = "Publication Year" name = "year" />
                </div><br/>
                <div>
                    <input type = "text" onChange = {this.handleOnChange} placeholder = "Image Link" name="image_url" />
                </div><br/>
                <div>
                    <button onClick = {this.handleSave}>Save</button>
                </div><br/>
            </div>
        )
    }
}

export default AddBookPage