import { Component } from "react";
import TaskList from "./TaskList";


class GetTasks extends Component {

    constructor() {
        super()

        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        this.getAllTasks()
    }

    getAllTasks = () => {
        fetch('http://localhost:8080/all-tasks')
        .then(response => response.json())
        .then(tasks => {
            this.setState({
                tasks: tasks
            })
        })
    }

    render() {
        return (
           <TaskList tasks = {this.state.tasks} />
        )
    }
}

export default GetTasks
