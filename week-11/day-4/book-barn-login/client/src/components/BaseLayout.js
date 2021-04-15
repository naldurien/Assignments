import { Component } from "react";
import { NavLink } from "react-router-dom";
//import App from './App'

export class BaseLayout extends Component {

    render() {
        return (
            <div>
                <Menu />
                   {this.props.children}
                <Footer />
            </div>
        )
    }
}

export class Menu extends Component {
    render() {
        return (
            <div>
                <NavLink to = "/"><div class="bootstrap-link">Home</div></NavLink>
                <NavLink to = "/books">View Our Books</NavLink>
                <NavLink to = "/add-book"><div>Add A Book</div></NavLink>
            </div>
        )
    }
}

export class Footer extends Component {
    render() {
        return (
            <h4>Made with blood, sweat, and tears by NMA for DC</h4>
        )
    }
}