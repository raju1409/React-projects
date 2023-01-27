import styles from './App.module.css';
import { useState } from 'react';
import {Todo} from "./Todolist"

function App() {
  const [TodoList, setTodoList] = useState([]);
  const [newTask, setnewTask] = useState("");

  const handleNewTask = (event)=>{
    setnewTask(event.target.value)
  }
  const handleTodoList = ()=>{
    const Task = {
      id : TodoList.length===0 ? 1 : TodoList[TodoList.length-1].id+1,
      Name : newTask,
      completeTask : false
    }
    setTodoList([...TodoList, Task])
    setnewTask("")

  }
  const deleteTask = (id)=>{
    setTodoList(TodoList.filter((task)=>task.id!==id))
  }
  const handlecompleteTask = (id)=>{
    setTodoList(TodoList.map((task)=>{return task.id === id ? {...task, completeTask:true}:task
      // if (task.id === id){
      //   return {...task, completeTask : true};
      // }else{
      //   return task;
      // }
    }))
    

  }
 
  return <div className={styles.App}>
    <div className={styles.nav}>
    <h1>Todo List</h1>
    <input value={newTask} onChange={handleNewTask} className={styles.input}/>
    <button onClick={()=>{handleTodoList()}}> Add Task </button>
    </div>
      {TodoList.map(task =>{
        return <Todo
        completeTask={task.completeTask} 
        Name={task.Name} id={task.id} 
        deleteTask={deleteTask} 
        handlecompleteTask={handlecompleteTask}/>
      })}
    </div>
}
export default App;
