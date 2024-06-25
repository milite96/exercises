import './App.css'

import Colors from './components/Colors'
import ToDoList from './components/ToDoList'

const toDoList = [
  {
      id: "1",
      task: "ir al super",
  },
  {
      id: "2",
      task: "ir al medico",
  }
]

function App() {

  return (
    <>
    <h1>Colors</h1>
    <Colors/>

    <h1>To Do List</h1>
    <ToDoList toDos={toDoList}/>
      
      
    </>
  )
}

export default App
