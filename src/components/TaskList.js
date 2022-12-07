import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { deleteTask } from "../redux/slice/task/taskSlice";

const TaskList = () => {

    const task = useSelector(state=> state.task);
    console.log(task);
    const distpatch= useDispatch();

    const handleDelete=(id)=>{
       
        distpatch(deleteTask(id));
    }
  return (
    <div>   
        <header>
            <h1>Tasl lists { task.length}</h1>
            <Link to='/create'>
            Cretae Task
            </Link>
        </header>
        {
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