import styles from './App.module.css';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(10);

  const changeCount = (val)=>{
    setCount(val === 1 ? count + 1 : val === 2 ? count - 1 : 0);

  }
  
  return <div className={styles.App}>
    <button onClick={()=>{changeCount(1)}}>Increse</button>
    <button onClick={()=>{changeCount(2)}}>decrese</button>
    <button onClick={()=>{changeCount(0)}}>Reset</button>
    {count}
    </div>
}
export default App;
