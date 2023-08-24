import { useState } from "react";

function Todo({todo,removeTodo}) {
const [todos,setTodos] = useState([])

    const removeTodo = (index) =>{
        let x = todos.filter((i)=> i!== index )
        setTodos(x)
        
    }


  return (
    <div>
        <p>{todo}</p>
        <button onClick={removeTodo}>Remove</button>
    </div>
  )
}

export default Todo