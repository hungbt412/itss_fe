import React,{useState} from 'react'
import { Button } from 'semantic-ui-react'
import PopUpFirst from './PopUpEditToday/PopUpFirst';


const TodosList = ({todos, setTodos, editTodo,setEditTodo}) => {

    const handleComplete = ({id}) =>{
        setTodos(todos.filter((todo)=> todo.id !== id))
    };
    const [popup1, setPopup1] = useState(false);


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
                <Button className="ui button" color='gray' onClick={() => {setPopup1(true);}}>Edit</Button>
                {popup1 && <PopUpFirst setPopup1={setPopup1} />} 
                           
            </li>
        ))

        }
         
    </div>
  )
}

export default TodosList