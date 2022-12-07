import { useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { createTask, modifyTask } from "../redux/slice/task/taskSlice";
import {v4 as uuid} from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { getAllJSDocTagsOfKind } from "typescript";


const TaskFolder = () => {
   
    const[task, setTask]= useState({
        title: '',
        description:''
    })

    const dispatch= useDispatch();
    const navigate= useNavigate();
    const params= useParams();
    const tasks=useSelector(state=>state.task);

    const handleChange= (e)=>{
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });

    }

    const handleSubmit= (e)=>{
        e.preventDefault();
        if(params.id){
            dispatch(modifyTask(task))
        }else{
            dispatch(createTask({...task, 
                id: uuid(),}));
                
        }
        //console.log(task);
        navigate('/')
    }

    useEffect(() => {
      console.log(params)
      if(params.id){
        setTask(
        tasks.find(task=> task.id===params.id) 
        );
      }
    }, [])
    

  return (
   <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
    <label htmlFor="title" className="block text-sm font-bold"> Task:</label>
    <input 
    name='taitle'
     type="text"
      placeholder="title"
       onChange={handleChange}
       value={task.title}
       className="w-full p-2 rounded-md bg-zinc-600"/>
       <label htmlFor="description" className="block text-sm font-bold"> Description:</label>
    <textarea name="description" placeholder="description"  
    onChange={handleChange} value={task.description}  className="w-full p-2 rounded-md bg-zinc-600 mb-2"></textarea>
   <button className="bg-indigo-600 px-2 py-1"> Save</button>
   </form>
  )
}

export default TaskFolder