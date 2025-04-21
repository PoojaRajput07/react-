import { useState } from "react";
export const TodoForm=({onAddTodo})=>{
    const [inputvalue,setinputvalue]=useState({});

    const handleinputchange=(value)=>{
        setinputvalue({id:value,content:value,checked:false});
        };
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        onAddTodo(inputvalue);
        // setinputvalue({});
        setinputvalue({id:"",content:"",checked:""});


    }

    return(
        <section className="form">
                             <form onSubmit={handleFormSubmit}>
                                <div>
                                    <input type="text"className="todo-input" autoComplete="off" value={inputvalue.content}
                                    onChange={(event)=>handleinputchange(event.target.value)}
                                    
                                    />
                                </div>
                                    <div>
                                        <button type="submit" className="todo-btn">add task</button>
                                    </div>
                                </form>
                                </section>
        )
    }