import "./EV.css";
export const EventHandling=()=>{
    /* function handleButtonClick(){
        alert("hey i am clicked");
    }*/
    const handleButtonClick=(event)=>{
        console.log(event);
        console.log(event.target);
        alert("hey i am fat arraow function click")
    }
    const handleuserclick=(user)=>{
        alert(`hey ${user}`);

    }
    return(
        <>
        {/* <button onClick={handleButtonClick}>click me</button> */}
        <button onClick={()=>handleuserclick("pooja")}>click </button>
        </>
    );
    
};