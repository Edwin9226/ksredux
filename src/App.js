
import { useSelector } from 'react-redux';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import './App.css';
import TaskFolder from './components/TaskFolder';
import TaskList from './components/TaskList';


function App() {

  return (
    <div className="App">
<Router>
<Routes>
  <Route path='/' element={<TaskList/>}/>
  <Route path='/create' element={<TaskFolder/>}/>

</Routes>
</Router>

    </div>
  );
}

export default App;
 