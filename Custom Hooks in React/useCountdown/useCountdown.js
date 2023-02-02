import { useState, useEffect } from "react";

export function useCountdown() {
  const [number, setNumber] = useState();
  const [isRunning, setIsRunning] = useState(false);
  let intervalId;

  useEffect(() => {
    if (isRunning) {
      intervalId = setInterval(() => {
        setNumber((prevNum) => prevNum <= 0 ? 0 : prevNum - 1);
      }, 100);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  return { number,setNumber, start: () => setIsRunning(true), stop: () => setIsRunning(false) };
}
