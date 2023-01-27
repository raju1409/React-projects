import styles from './App.module.css';


export const Todo = (props)=>{
    return <div className={styles.todoList}
            style={{backgroundColor: props.completeTask ? 'green' : "rgb(144, 238, 144)"}}
            >
          <h1 >  {props.Name} </h1>
          <button onClick={()=>{props.handlecompleteTask(props.id)}} >Completed</button>
          <button onClick={()=>{props.deleteTask(props.id)}} type='submit'>X</button>
        </div>
}
