import { useState } from "react"
import "./TodoListItem.css"


const TodoListItem=(props)=>{
    const {item,onDelete,index,onEdit}=props
    const {title,priority,_id} = item
    const [isChecked,setchecked]=useState(false)
     
    return (
        <>
         <div className={`item-card ${priority}`}>
            {isChecked ? (<span className="material-symbols-outlined pointer " onClick={()=>setchecked(false)}>select_check_box
</span>):( <span className="checkbox pointer" onClick={()=>setchecked(true)}/>)}
           
           <div className={`card-title ${isChecked && "strike"}`}>{title}</div>

           <div className="badge">{priority}</div>
           <span className="material-symbols-outlined pointer edit-btn" onClick={()=>{onEdit(item)}}>edit</span>
           <span className="material-symbols-outlined pointer " onClick={()=>{console.log("id"+item);onDelete(_id)}}>delete</span>
         </div>
        </>
    )
}

export default TodoListItem