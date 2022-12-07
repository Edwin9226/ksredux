
import { useSelector } from 'react-redux';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import './App.css';
import TaskFolder from './components/TaskFolder';
import TaskList from './components/TaskList';


function App() {

  return (
    <div className='bg-zinc-900 h-screen text-white'>
    <div className='flex items-center justify-center h-full'>
     
<Router>
<Routes>
  <Route path='/' element={<TaskList/>}/>
  <Route path='/create' element={<TaskFolder/>}/>
<Route path='/edit-task/:id' element={<TaskFolder/>}></Route>
</Routes>
</Router>
</div>
    </div>
  );
}

export default App;
 