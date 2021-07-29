import React, {useContext} from "react"
import { TaskContext } from "./TasksProvider";
import { useHistory} from "react-router-dom"
import "./TaskMeNot.css"

export const TaskCard = ({ task }) => {

    const { editTask } = useContext(TaskContext)
    const {deleteTask} = useContext(TaskContext)

    const history = useHistory();

    const handleEdit = () => {
        editTask(task.id)
        .then(() => {
          history.push("/tasks")
        })
        alert("Task has been edited!")
      };

    const handleDelete = () => {
      deleteTask(task.id)
      .then(() => {
        history.push("/tasks")
      })
      alert("Task has been deleted!")
    };

    return (

        <div className="task__wrapper">
            <section className="task">
                <div className="task__buttons">
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </section>
        </div>
    )
};