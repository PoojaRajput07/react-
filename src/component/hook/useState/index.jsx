import { useState } from "react"

export const Counter=()=>{
    const[count,setCount]=useState(0);
    const[num,useNum]=useState(0);
    
    const handleinput=(digit)=>{
        useNum(Number(digit));
    }
    const handleIncrement=()=>{
       if(count+num<=100){
        setCount(count+num);
       }
       else return;
    }
    const handleDecrement=()=>{
        if(count-num>=0){
         setCount(count-num);}
         else return;
    }
    const handlereset=()=>{
         setCount(0);
    }
    
    

    return(
        <div className="container state-container" style={{textAlign:"center"}}>
            <h1>useState hook</h1>
            <br/>
            <p>{count}</p>
            <input type="number" onChange={(e)=>handleinput(e.target.value)}/>
            <button onClick={handleIncrement}>increment</button>
            <button onClick={handleDecrement}>decrement</button>
            <button onClick={handlereset}>reset</button>
        </div>
    )
}