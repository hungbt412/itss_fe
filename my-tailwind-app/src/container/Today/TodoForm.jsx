import React from "react";
import {v4 as uuidv4} from "uuid";
import { Form,Button,Dropdown } from 'semantic-ui-react'

const TodoForm = ({input,setInput,todos,setTodos}) => {

    const onInputChange =(event) =>{setInput(event.target.value);};
    const onFormSubmit = (event) =>{
        event.preventDefault();
            setTodos([...todos,{id:uuidv4(), title:input , completed:false }]);
            setInput("");      
    };


    const lvOptions = [
        { key: 'Important',
        text: 'Important',
        value: 'Important',
        label: { color: 'red', empty: true, circular: true},},
        { key: 'Less Important',
        text: 'Less Important',
        value: 'Less Important',
        label: { color: 'yellow', empty: true, circular: true },},
        { key: 'Normal',
        text: 'Normal',
        value: 'Normal',
        label: { color: 'blue', empty: true, circular: true },},
        { key: 'UnImportant',
        text: 'UnImportant',
        value: 'UnImportant',
        label: { color: '', empty: true, circular: true },},
      ];
    
    
      return (
    
        <Form onSubmit={onFormSubmit}>
            <Form.Input 
                type="text" 
                placeholder="Task name" 
                className="task-input"
                value={input}
                required
                onChange={onInputChange}
            />
            <div class="flex flex-row-reverse ">
                <Button className="ui button" color="gray" >Cancel</Button>
                <Button className="ui button" color="red" type="submit" >Add</Button>
                <Dropdown 
                    clearable 
                    options={lvOptions} 
                    defaultValue={lvOptions[0].value} 
                    selection   
                />
            </div>
        </Form>
    )
}

export default TodoForm