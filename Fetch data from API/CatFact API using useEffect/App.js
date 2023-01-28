import styles from './App.module.css';
import { useEffect, useState} from 'react';

function App() {
  const [fact, setFact] = useState("");
  const handleChange = ()=>{
    fetch("https://catfact.ninja/fact").then(res=>res.json()).then(
      data=>{
        // console.log(data.fact);  
        setFact(data.fact)
      }
    )
  }
  useEffect(()=>{
    handleChange();
  },[])
  
 
  return <div className={styles.App}>
      <div>
        <center>
          <button onClick={handleChange}> Generate Cat Fact</button>

          <h2>{fact}</h2>

          
        </center>
      </div>
    </div>
}
export default App;
