import { Component } from "react";

class AddBookPage extends Component {

    constructor() {
        super() 
        this.state = {
            title: "", 
            author: "",
            imageURL: ""
        }
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }   

    handleSave = () => {

        fetch('http://localhost:8000/books',{
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                title: this.state.title, 
                author: this.state.author, 
                imageURL: this.state.imageURL 
            })
        }).then(response => response.json())
        .then(result => {
            if(result.success) {
                // take the user to the books page to show all the books 
                this.props.history.push('/books')
            }
        })

    }

    render() {
        return (
            <div>
                <h1>Add A Book</h1>
                <input type="text" onChange = {this.handleOnChange} placeholder="Title" name = "title" />
                <input type="text" onChange = {this.handleOnChange} placeholder="Author" name = "author" />
                <input type="text" onChange = {this.handleOnChange} placeholder="Image URL" name = "imageURL" />
                <button onClick = {this.handleSave}>Save</button>
            </div>
        )
    }
}

export default AddBookPage