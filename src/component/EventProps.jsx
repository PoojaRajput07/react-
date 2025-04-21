export const EventProps=()=>{
    const handleWelcomeUser=(user)=>{
        alert(`hello ${user}`);
    };
    const handleHover=()=>{
        alert(`thanks for hovering me`);
    };
    return(
        <>
        <WelcomeUser
         onClick={()=>{handleWelcomeUser('Vinod')}}
         onMouseEnter={handleHover}/>
        </>
    );
}
const WelcomeUser=(props)=>{
    const { onClick,onMouseEnter}=props;
    const Greetings=()=>{
        alert("this is the greeting");
        onClick();
            
    }
    return(
       
        <>
        <button onClick={()=>{onClick()}}>click me</button>
        <button onMouseEnter={()=>{onMouseEnter()}} >hover me</button>
        <button onClick={Greetings}>Greeting</button>
        </>

    );

}