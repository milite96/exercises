import './App.css'
import Container from './components/container/Container'
import Clock from './components/clock/Clock'
import { useContext } from 'react'
  
function App() {

  const language = useContext()


  return (
    <>
       <Container title={"hola"}/>
       <Clock/>
    </>
  )
}

export default App
