import { useState } from "react"
import CounterDisplay from "./CounterDisplay"

function Counter({ initialValue = 0 }) {
    const [counter, setCounter] = useState(initialValue)

    function handleIncrementCounter() {
        setCounter((c) => c + 1)
    }

    function handleDecrementCounter() {
        setCounter((c) => c - 1)
    }

    function handleReseCounter(c) {
        setCounter(initialValue)
    }

    return (
        <div>
            <CounterDisplay counter={counter} />
            <button onClick={handleIncrementCounter}>Increment</button>
            <button onClick={handleDecrementCounter}>Decrement</button>
            <button onClick={handleReseCounter}>Reset</button>
        </div>
    )
}

export default Counter
