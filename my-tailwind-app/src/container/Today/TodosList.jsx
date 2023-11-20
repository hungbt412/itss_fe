import React from 'react'

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
                                  
                <button className="button-complete"  onClick={()=>handleComplete(todo)} >Complete</button>
                <button className="button-edit">Edit</button>                 
            </li>
        ))

        }
    </div>
  )
}

export default TodosList