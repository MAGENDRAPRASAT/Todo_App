import { useEffect, useState } from "react"
import "./NewItem.css"

const PRIORITY=["low","medium","high"]

const NewItem=(props)=>{
    const {addItem,editState,editItem}=props
    const [title,setTitle]=useState('')
    const [priority,setPriority]=useState('low')
    const isEdit=Boolean(editState._id)

    useEffect(()=>{
        console.log("asas"+editState._id)
        console.log(isEdit)
        if(editState._id){
            setTitle(editState.title)
            setPriority(editState.priority)
        }
    },[editState])

    //console.log(priority)
    const handleInputChange=(e)=>{
        setTitle(e.target.value)
        }
    
    const clearState=()=>{
        setTitle("")
        setPriority("")
    }
    const handleSave=()=>{
        if(!title){
            return
        }
          const obj={
            title,
            priority
          }
          if(isEdit){
            obj.id=editState._id
            editItem(obj)
          }
          else{
          addItem(obj)
          }
          setTitle('')
          setPriority("low")
    }
    return (
        
        <div className="new-item-card">
         <div className="checkbox"></div>
         <div className="form-container">
                <input placeholder="Type here....." value={title} onChange={handleInputChange}/>
              {title && (<div>
               <div className="badge-container">
                 {PRIORITY.map((p)=><div key={p}  className={`p-badge ${p} ${p===priority && 'selected' }  `} onClick={()=>setPriority(p)}>{p}</div>)}
                </div>
                <div className="btn-container">
                    <button className="primary" onClick={handleSave}>Save</button>
                    <button className="" onClick={clearState} >Clear</button>
                </div>
                </div>)}
         </div>
        </div>
        
    )
}

export default NewItem