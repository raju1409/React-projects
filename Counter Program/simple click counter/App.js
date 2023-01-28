import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
  let [count, setCount] = useState(0);
  let [arr, setArr] = useState([])
  let [value , setValue] = useState(0)

  const handleArr = ()=>{
    setArr([...arr,count])
    setCount(count+=1)
    setValue(value+=count)
  }
 

 
  return <div className={styles.App}>
    <h1>You Clicked {count} many times</h1>
    <button onClick={()=>handleArr()}>click Here</button>
    <div>
      <h1> the sum of first {count} natural number is {value}</h1>
    </div>
        {/* {arr.map((item)=>{
            return <h1>count is {item}</h1>
        })} */}
    </div>
}
export default App;
