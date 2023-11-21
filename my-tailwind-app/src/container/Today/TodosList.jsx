import React from 'react'
import { Button } from 'semantic-ui-react'

const TodosList = ({todos, setTodos, editTodo,setEditTodo}) => {

    const handleComplete = ({id}) =>{
        setTodos(todos.filter((todo)=> todo.id !== id))
    }
   
  return (
    <div>
        {todos.map((todo)=>(
            <li className="list-item" key={todo.id}>
                <input 
                    type="text" 
                    value={todo.title} 
                    className="list"
                    onChange={(event)=>event.preventDefault()}
                />
                                  
                <Button className="ui button" color='green' onClick={()=>handleComplete(todo)} >Complete</Button>
                <Button className="ui button" color='gray'>Edit</Button>                 
            </li>
        ))

        }
    </div>
  )
}

export default TodosList