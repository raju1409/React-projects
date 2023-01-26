import styles from './App.module.css';
import { useState } from 'react';

function App() {
  const [todoList, setTodolist] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleTask = (event)=>{
    setNewTask(event.target.value);
    console.log(newTask)
  }
  const handleTodolist = ()=>{
    const TaskList = [...todoList, newTask];
    setTodolist(TaskList)
  }
  return <div className={styles.App}>
    <input onChange={handleTask}/>
    <button onClick={handleTodolist}> Add Task</button>
    {newTask}
    <div className='todolist'>
      {todoList.map(task=>{
        return <h2>{task}</h2>
      })}
    </div>
    </div>
}
export default App;
