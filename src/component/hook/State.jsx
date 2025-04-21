import { useState } from "react";

export const State=()=>{
    const [count,setcount]=useState(0);
    const handleIncrease=()=>{
        setcount(()=>count+1);
    }

    return(
        <div class="main-div">
        <h1>{count}</h1>
        <button onClick={handleIncrease}>increment</button>
        <ChildComponent />
        </div>
          
    );
}
const ChildComponent=()=>{
    console.log("child component is renderd");
    return (<div>child component</div>);
}