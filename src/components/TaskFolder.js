import { useSelector } from "react-redux"

const TaskFolder = () => {

    const stateTasks= useSelector((state)=>state.tasks)
    console.log(stateTasks)
  return (
    <div>TaskFolder</div>
  )
}

export default TaskFolder