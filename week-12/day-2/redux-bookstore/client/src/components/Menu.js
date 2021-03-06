import { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import '../css/Menu.css'


export class Menu extends Component {
    render() {
        return (
            <div>
                <div id="nav-logo">
                    <h1>Once Upon A Book</h1>
                </div>
                <div class="nav-links">
                <div>
                    <button><NavLink to= "/">Home</NavLink></button>
                </div>
                {this.props.isLoggedIn ?<div>
                    <button><NavLink to= "/books">View Books</NavLink></button>
                </div>:null}
                {this.props.isLoggedIn ?<div>
                    <button><NavLink to= "/add-book">Add A Book</NavLink></button>
                </div>:null}
                {this.props.isLoggedIn ?<div>
                    <button><NavLink to= "/my-cart">Cart</NavLink></button>
                </div>:null}
                {!this.props.isLoggedIn ?<div>
                    <button onClick = {() => this.props.onLogin()}>Log In</button>
                </div>:null}
                {this.props.isLoggedIn ?<div>
                    <button onClick = {() => this.props.onLogout()}><NavLink to= "/">Log Out</NavLink></button>
                </div>:null}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: () => dispatch({type: 'LOGIN'}),
        onLogout: () => dispatch({type: 'LOGOUT'})
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isAuthenticated
    }
}

export const HeaderMenu = connect(mapStateToProps, mapDispatchToProps)(Menu);
