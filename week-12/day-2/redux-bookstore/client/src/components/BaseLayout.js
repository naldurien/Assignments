import { Component } from "react";
import {HeaderMenu} from "./Menu"
import Footer from "./Footer"

class BaseLayout extends Component {

    render() {
        return (
            <div>
                <HeaderMenu />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}



export default BaseLayout