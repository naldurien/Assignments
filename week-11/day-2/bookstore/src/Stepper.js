import { Component } from 'react';

class Stepper extends Component {
    constructor() {
        super()

        this.state = {
            ctr:0
        }
    }
    handleIncrement = () => {
        this.setState({
            ctr: this.state.ctr + 1
        })
    }

    handleDecrement = () => {
        this.setState({
            ctr: this.state.ctr - 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleDecrement}>-</button>
                <b> {this.state.ctr} </b>
                <button onClick={this.handleIncrement}>+</button>
            </div>
        )
    }
}

export default Stepper;