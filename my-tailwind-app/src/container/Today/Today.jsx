import React, { useState } from "react";
import { CiCircleList } from "react-icons/ci";
import { Header} from "semantic-ui-react";
import Form from "./Form";
import TodosList from "./TodosList";


interface ReturnDate {
  date: string;
}

export const useDate = (): ReturnDate => {
  const locale = 'en';
  const today = new Date();

  const day = today.toLocaleDateString(locale, { weekday: 'long' });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

  return {date};
};




const Today = () => {
  // const[setTab] =useState("");
  const {date} = useDate();

  const[input, setInput]=useState("");
  const[todos, setTodos]=useState([]);
  


  return (
  <div>
    <Header className="flex flex-col w-[80vw] h-[10vh] bg-ct-sidebar-bg rounded p-10" >
      <div className="flex justify-between">
        <div class="">
          <strong className="font-lagre text-[30px] "> Today </strong> 
          <span style={{color: '#6F6F6F'}}> {date} </span>
        </div>

        <div>
        </div>

        <div
          className="flex items-center text-center gap-2"
          // onClick={() => {
          //   setTab("view");
          // }}
        >
          <CiCircleList className="font-light text-xl "  color="#6F6F6F" />
          <p className=" font-light text-xl " style={{color: '#6F6F6F'}}>View</p>
        </div>
      </div>
    </Header>
    
    <body className="today-body">
      
      <div className="flex flex-col w-[80vw] h-fit bg-ct-sidebar-bg rounded pl-10 p-2">
        <div>
          <h2>Todolist Today</h2>
          <TodosList 
            todos={todos}
            setTodos={setTodos}
          />
        </div>
      </div>
      
      <div className="flex flex-col w-[80vw] h-fit bg-ct-sidebar-bg rounded pl-10 p-2">  
        <div>
          <h2>Add New Task </h2>
          <Form 
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        
      </div>

    </body>
  </div>
  );
};

export default Today;
