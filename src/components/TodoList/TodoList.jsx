import { useState } from "react"
import TodoListItem from "./TodoListItem/TodoListItem"

const TodoList=(props)=>{
  const {list,deleteItem,triggerEdit}=props
  if(list.length<=0){
    return <center>No items to display!</center>
  }
return(
    <>
      {list.map((item,index)=>{
        return <TodoListItem key={index} item={item} onDelete={deleteItem} index={index} onEdit={triggerEdit}/>
      })}
    </>
)
}

export default TodoList