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
    <div className=" w-4/6 ">   
        <header className="flex justify-between itemn-center py-4">
            <h1>Tasl lists { task.length}</h1>
            <Link to='/create' className="bg-indigo-600 px-2 py-1 riounded-sm text-sm">
            Cretae Task
            </Link>
        </header>

        <div className="grid grid-cols-3 gap-4"></div>
        {
        task.map((task)=>(
            <div key={task.id} className="bg-netral-800 p-4 rounded-md self-center">
                <header className="flex justify-between">
                <h3>{task.title}</h3>
                <div className="flex gap-x-2">
                <Link to={`/edit-task/${task.id}`}
                className="bg-zinc-600 px-2 py-1 text-xs rounded-md"> Edit</Link>
                <button onClick={()=>handleDelete(task.id)}
                className="bg-red-500 px-2 py-1 text-xs rounded-md  "> Delete</button>
               
                </div>
                
                </header>
               
                <p>{task.description}</p>
             
            </div>

        ))
    }</div>
  )
}

export default TaskList