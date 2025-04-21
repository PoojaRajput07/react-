const todoskey="reactTodo";
export const getlocalstoragetododata=()=>{
    const rawtodos=localStorage.getItem(todoskey);
        return rawtodos?JSON.parse(rawtodos):[];

}
export const setlocalstoragetododata=(task)=>{
   return localStorage.setItem(todoskey,JSON.stringify(task));

}