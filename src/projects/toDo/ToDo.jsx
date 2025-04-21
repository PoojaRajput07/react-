import {useEffect, useState} from "react"
// import { FaCheck } from "react-icons/fa";
// import { MdDeleteForever } from "react-icons/md";
import "./ToDo.css"
import { TodoForm } from "./todoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate"; 
import { getlocalstoragetododata } from "./getlocalstoragetododata";
import { setlocalstoragetododata } from "./getlocalstoragetododata";
// const todoskey="reactTodos";

export const ToDo=()=>{
    const [task,setTask]=useState(()=>getlocalstoragetododata());
    useEffect(() => {
        setlocalstoragetododata(task);
      }, [task]);

        const handleFormSubmit=(inputvalue)=>{
            const {id,content,checked}=inputvalue;
            if(!inputvalue.content) return;
            // if(task.includes(inputvalue))return
            const ifTodoContentMatched=task.find((currentTask)=>currentTask.content===content);
            if(ifTodoContentMatched)return;   
            setTask((prevTask)=>[...prevTask,{id,content,checked}]); 
            //add data to local storage
            setlocalstoragetododata(task);
           
        };    
const handleDelete=(todelete)=>{
    const updatedArray=task.filter((curTask)=>todelete!=curTask.content);
    setTask(updatedArray);
 
}
const handleAllClear=()=>{
    setTask([]);
};

const handlecheck=(tasktocheck)=>{
    const updatedtask=task.map((currentTask)=>{
        if(currentTask.content===tasktocheck){
            return{...currentTask,checked:!currentTask.checked};
        }
        else{
            return currentTask;
        }
    });
    setTask(updatedtask);
    


}
    return(
        <section className="todo-container">
            <header>
                <h1>Todo list</h1>
               < TodoDate/>
                </header>
                
                <TodoForm onAddTodo={handleFormSubmit}/>
                    <section className="myUnordList">
                        <ul>{
                            task.map((currentTask)=>{
                               return (<TodoList
                                data={currentTask.content}
                                 key={currentTask.id} 
                                 checked={currentTask.checked}
                                 ondelete={handleDelete} 
                                 onchecked={handlecheck}/>
                               );
                               

                                 
                            }) 
                        }
                        </ul>
                    </section>

                <section>
                <button className="clear-btn" onClick={handleAllClear}> Clear All</button>
        </section>
    </section>
    );
};
