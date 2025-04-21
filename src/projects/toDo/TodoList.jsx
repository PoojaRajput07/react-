import { FaCheck } from "react-icons/fa";          // ✅ Add this line
import { MdDeleteForever } from "react-icons/md";

export const TodoList=({ondelete ,data,checked,onchecked})=>{
    
    return(
        <li className="todo-item">
                                <span className={checked?"checkList":"nochecklist"}>{data}</span>
                                <button className="check-btn"onClick={()=>{
                                    onchecked(data);
                                }}><FaCheck /></button>
                                <button className="delete-btn" onClick={()=>ondelete(data)}><MdDeleteForever />-</button>
                               </li>
    )
}   