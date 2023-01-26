import styles from './App.module.css';
import { useState } from 'react';

function App() {
  const [todoList, setTodolist] = useState([]);
  const [newTask, setNewTask] = useState("");
  
  const handleTask = (event)=>{
    setNewTask(event.target.value);
  }
  const handleTodolist = ()=>{
    let task = {
      id : todoList.length ===0?1: todoList[todoList.length-1].id+1,
      taskName1 : newTask
    }
    const TaskList = [...todoList, task];
    setTodolist(TaskList)
    setNewTask("")
  }
  const deleteTask = (taskId)=>{
    const deleteList = todoList.filter(task => {
      // return taskId !== task.id ONELINER
      if (taskId === task.id ){
        return false
      }else{
        return true
      }
    })
    setTodolist(deleteList)
  }
// with value={newTask} the placehoder value will be ""
  return <div className={styles.App}>
    <input value={newTask} onChange={handleTask} />
    <button onClick={handleTodolist}> Add Task</button>
    <div className='todolist'>
      {todoList.map(task=>{
        return <div>
          <h2 >{task.taskName1}--{task.id}</h2>
          <button onClick={()=>deleteTask(task.id)}>X</button>
        </div>
      })}
    </div>
    </div>
}
export default App;
