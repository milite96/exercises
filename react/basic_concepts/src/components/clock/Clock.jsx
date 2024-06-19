import { useState, useEffect } from "react"

function Clock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000);

        // podemos usar el return para hacer un cleanup del intervalo ya que en StrictMode se ejecuta 2 veces el useEffect
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <h2>the current time is {time.toLocaleTimeString()} </h2>
    )
}

export default Clock