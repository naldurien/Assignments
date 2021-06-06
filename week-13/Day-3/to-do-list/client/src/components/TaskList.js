import { Component } from "react";


class TaskList extends Component {
    render() {

        const tasks = this.props.tasks 

        const taskItems = tasks.map((task) => {
            return <li>Task: {task.taskName}<br/>
                    Priority: {task.taskPriority}</li>
        })

        return (
            <div>
                <h1>TaskList</h1>
                {taskItems}
            </div>
        )
    }
}

export default TaskList 