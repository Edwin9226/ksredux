import { useState } from "react"
import { useDispatch } from "react-redux"
import { createTask } from "../redux/slice/task/taskSlice";
import {v4 as uuid} from "uuid";
import { useNavigate } from "react-router-dom";


const TaskFolder = () => {
   
    const[task, setTask]= useState({
        title: '',
        description:''
    })

    const dispatch= useDispatch();
    const navigate= useNavigate();

    const handleChange= (e)=>{
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });

    }

    const handleSubmit= (e)=>{
        e.preventDefault();
        //console.log(task);
        dispatch(createTask({...task, 
        id: uuid(),}));
        navigate('/')
    }

  return (
   <form onSubmit={handleSubmit}>
    <input name='title' type="text" placeholder="title" onChange={handleChange}/>
    <textarea name="description" placeholder="description"  onChange={handleChange}></textarea>
   <button> Save</button>
   </form>
  )
}

export default TaskFolder