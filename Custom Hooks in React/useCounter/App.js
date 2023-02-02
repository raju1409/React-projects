import { useCounter } from "./Pages/useCounter";


function App() {
  const [Count, increment, decrement, reset, startFrom] = useCounter()
  

  return <div className="App" >

    <button onClick={increment}>Increase</button>

    <button onClick={decrement} >Decrease</button>

    <button onClick={reset}>Reset</button> 
    <input onChange={(event) => {
      startFrom(event.target.value)
    }}/>

    <h1>{Count}</h1>     
        
      
    </div>
}
export default App;
