import { Component } from "react"


class UpdateBookPage extends Component {

    constructor (props) {
        super(props)
        const { book_id } = props.match.params
        this.state ={
            book_id : book_id,
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

    handleSave =() => {

       const book_id = this.state.book_id
       console.log(book_id)
        fetch (`http://localhost:8080/update/${book_id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                book_id: this.state.book_id,
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
            <div>
                <div>
                    <h1> Update Book </h1>
                </div><br></br>
                <div>
                    <input type="text" onChange = {this.handleOnChange} placeholder="Title" name="title" />
                </div><br></br>
                <div>
                    <input type="text" onChange = {this.handleOnChange} placeholder="Author" name="author" />
                </div><br></br>
                <div>
                    <input type="text" onChange = {this.handleOnChange} placeholder="Genre" name="genre" />
                </div><br></br>
                <div>
                    <input type="text" onChange = {this.handleOnChange} placeholder="Publisher" name="publisher" />
                </div><br></br>
                <div>
                    <input type="text" onChange = {this.handleOnChange} placeholder="Publication Year" name="year" />
                </div><br></br>
                <div>
                    <input type="text" onChange = {this.handleOnChange} placeholder="Image Link" name="image_url" />
                </div><br></br>
                <div>
                    <button onClick = {this.handleSave}>Update</button>
                </div><br></br>
            </div>
            
        )
    }
}

export default UpdateBookPage