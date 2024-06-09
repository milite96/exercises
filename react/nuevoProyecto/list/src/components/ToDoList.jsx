import { useState } from "react"

function ToDoList() {
    const [toDoState, setToDoState] = useState([
    {
        id: "1",
        task: "ir al super",
    },
    {
        id: "2",
        task: "ir al medico",
    }
])

const [newToDo, setNewToDo] = useState({})

function handleNewToDo(event){
    setNewToDo({
    id: "x",
    task: event.target.value
    })

    console.log(newToDo);
}
    
const ToDoNew = {id:"5", task: "nap"}

function handleAddItems(){
    setToDoState((currentItems) => [
        ...currentItems,  newToDo
    ])
}

function removeToDo(i){
    const toDoListExceptClicked = toDoState.filter((item, arrayIndex)=> arrayIndex !== i)
    setToDoState(toDoListExceptClicked)
}

    return (
        <>
            <ul className="noTextDecoration">
                {toDoState.map((toDo, index) => {
                return(
                    <div key={index}>
                    <li>{toDo.task}</li>
                    <button onClick={() => removeToDo(index)}>Remove</button>
                    </div>
                )
                })}
            </ul>
            <input type="text" value={newToDo.task} onChange={handleNewToDo}/>
            <button onClick={handleAddItems}>Change to Dos</button>
        </>
    )
}

export default ToDoList
