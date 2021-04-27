// import { Component } from "react";
import {HeaderMenu} from "./Menu"
import Footer from "./Footer"

function BaseLayout(props) {
    return (
        <div>
            <HeaderMenu />
            {props.children}
            <Footer />
        </div>
    )
}


export default BaseLayout