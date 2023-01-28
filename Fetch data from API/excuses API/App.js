import styles from './App.module.css';
import {  useState} from 'react';

function App() {
  const [reason, setreason] = useState("");
  
  
  const handleExcuse = (excuse)=>{
    fetch(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then(res=>res.json()).then(
      (data)=>{
        setreason(data[0].excuse);
      }
    )
  }

 
  return <div className={styles.App}>
      <div>
        <center>
          <h1>Generate Reasons</h1>
          <button onClick={()=>handleExcuse("family")} >Family</button>
          <button onClick={()=>handleExcuse("party")}>Party</button>
          <button onClick={()=>handleExcuse("funny")}>Funny</button>

          <p>Reson : {reason}</p>
        </center>
      </div>
    </div>
}
export default App;
