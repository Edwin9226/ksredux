import { useSelector } from "react-redux"

const TaskList = () => {

    const task = useSelector(state=> state.task);
    console.log(task);
  return (
    <div>   {
        task.map((task)=>(
            <div key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
            </div>

        ))
    }</div>
  )
}

export default TaskList