import {useState} from "react"
export const DerivedState=()=>{
    const [user,setuser]=useState([
        {name:"alice",age:25},
        {name:"bob",age:28},
        {name:"charlie",age:35},
        {name:"angle",age:21},
        {name:"james",age:65},
    ]);
    const usercount=user.length;
    const average=user.reduce((accum,curElem)=>accum + curElem.age, 0)/usercount;
    return (
        
        <div className="main-div">
            <h1>user list</h1>
            <ul>
               {
                user.map((curElem,index)=>{
                    return (
                    <li key={index}>
                        {curElem.name}-{curElem.age}
                        </li>
                    );

                })
               }

            </ul>
            <p>{usercount}</p>
            <p>{average}</p>
        </div>);
       
       
};