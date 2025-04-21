import { useEffect } from "react";
import { useState } from "react";

 export const TodoDate=()=>{
    const [time,setDateTime]=useState("");
    
        useEffect(()=>{
            const interval=setInterval(()=>{
                const now=new Date();
                const formatedDate=now.toLocaleDateString();
                const formatedTime=now.toLocaleTimeString();

                setDateTime(`${formatedDate}-${formatedTime}`);
        
            },1000);
            return ()=>clearInterval(interval);
        },[]);
   
        return(
            <h2 className="date-time">{time}</h2>
        );
}