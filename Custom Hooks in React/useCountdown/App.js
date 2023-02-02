import { useCountdown } from "./hooks/useCountdown";

function App() {
  const { number, setNumber,start, stop } = useCountdown(0);
  
  return (
    <div>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      <br />
      <button onClick={start}>START</button>
      <button onClick={stop}>STOP</button>
      <h1>{number}</h1>
    </div>
  );
}

export default App;
