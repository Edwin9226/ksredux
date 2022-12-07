import { useDispatch, useSelector } from "react-redux"
import { deleteTask } from "../redux/slice/task/taskSlice";

const TaskList = () => {

    const task = useSelector(state=> state.task);
    console.log(task);
    const distpatch= useDispatch();

    const handleDelete=(id)=>{
       
        distpatch(deleteTask(id));
    }
  return (
    <div>   {
        task.map((task)=>(
            <div key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <button onClick={()=>handleDelete(task.id)}> Delete</button>
            </div>

        ))
    }</div>
  )
}

export default TaskList