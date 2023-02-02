import { useState } from "react"


export const useCounter = (initialCount = 0) => {
    const [state, setCount] = useState(initialCount)

    const increment = () =>{
        setCount(prevCount => prevCount + 1)
    }
    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    const reset = () => {
        setCount(prevCount => prevCount = 0)
    }
    const startFrom = (value) => {
        setCount(prevCount => prevCount = value)
    }
    
    return [state, increment, decrement, reset, startFrom]

}
