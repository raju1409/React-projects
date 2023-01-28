import styles from './App.module.css';
import { useState} from 'react';

function App() {
  const [input , setInput] = useState("");

  const handleInput = (event)=>{
    setInput(event.target.value)
  }
  
 
  return <div className={styles.App}>
      <div>
        <center>
          <input text='text' value={input} name='input'
           onChange={handleInput} style={{height:"25px"}} /> 
          <button onClick={()=>{setInput(input.substring(0,input.length-1))}}>Undo</button><br/>
           <button onClick={()=>{setInput(eval(input))}}>Calculate</button><br/>

           <button onClick={()=>{setInput(input+"1")}}>1</button>
           <button onClick={()=>{setInput(input+"2")}}>2</button>
           <button onClick={()=>{setInput(input+"3")}}>3</button>
           <button onClick={()=>{setInput(input+"4")}}>4</button>
           <button onClick={()=>{setInput(input+"5")}}>5</button>
            <br/>

           <button onClick={()=>{setInput(input+"6")}}>6</button>
           <button onClick={()=>{setInput(input+"7")}}>7</button>
           <button onClick={()=>{setInput(input+"8")}}>8</button>
           <button onClick={()=>{setInput(input+"9")}}>9</button>
           <button onClick={()=>{setInput(input+"0")}}>0</button><br/>

           <button onClick={()=>{setInput(input+"+")}}>+</button>
           <button onClick={()=>{setInput(input+"-")}}>-</button>
           <button onClick={()=>{setInput(input+"*")}}>*</button>
           <button onClick={()=>{setInput(input+"/")}}>/</button>
           <button onClick={()=>{setInput('')}}>C</button>



          
        </center>
      </div>
    </div>
}
export default App;
