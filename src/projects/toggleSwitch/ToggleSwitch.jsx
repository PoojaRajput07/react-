import {useState} from "react";
import "./ToggleSwitch.css";
export const ToggleSwitch=()=>{
    const [ison,setIson]=useState(false);
    const handleChange=()=>{
        setIson(!ison);  
        };
    return(
    <>
    <div className="container">
      <div className="outerdiv" onClick={handleChange} style={{backgroundColor:ison?"#4caf50":"grey"}}>
        <div className={`innerdiv ${ison? "on" : "off"}`}>
            <span className="state">{ison ? "ON" : "OFF"}</span>

        </div>
        

      </div>
    </div>
    
    
    </>);
}