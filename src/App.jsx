import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList/TodoList'
import NewItem from './components/NewItems/NewItem'
import { nanoid } from 'nanoid'
import {toast } from 'react-toastify';8
import 'react-toastify/dist/ReactToastify.css';
import FilterItem from './components/FilterItems/FilterItem'
toast.configure()


const DEFAULT_LIST=[{
  title:'Study JavaScript',
  priority:"high",
  id:nanoid()
},
{
  title:'Study CSS',
  priority:"low",
  id:nanoid()
},
{
title:'Study MongoDB',
priority:"medium",
id:nanoid()
}]

function App() {

  const [list,setList]=useState([])
  const [after,setafter]=useState("")
  const [editState,setEditState]=useState({})
  useEffect(()=>{
    if(!after){
    fetch('http://localhost:3500/api/v2/todo').then(res=>{
      return res.json()
    }).then((res)=>{console.log(res);setList(res);}).catch=(err)=>{console.log(err)}
  }
  else{
    fetch('http://localhost:3500/api/v2/todos/priority/'+after).then(res=>{
    return res.json()
  }).then((res)=>{console.log(res);setList(res);}).catch=(err)=>{console.log(err)}
  }
  },[editState])

  const deleteItem=(id)=>{
    fetch('http://localhost:3500/api/v2/todo/' + id, {
  method: 'DELETE',
})
.then(res => res.json()) 
 .then(res => {
 setEditState({})
})
}

  const addItem=(item)=>{
    fetch('http://localhost:3500/api/v2/todo',{
      method:"POST",
      headers:{
        Accept:'application/json,text/plain,*/*',
        "Content-Type":'application/json'
      },
      body:JSON.stringify(item)
  }).then(()=>{
    //console.log(item)
   setEditState({})
    toast.success("Added successfully")
  }).catch((err)=>console.log(err))
  }
    

  const editItem=(updatedItem)=>{
    console.log(updatedItem.id)
    fetch('http://localhost:3500/api/v2/todo/' +updatedItem.id, {
      method: 'PATCH',
      headers:{
        "Accept":'application/json,text/plain,*/*',
        "Content-Type":'application/json'
      },
      body:JSON.stringify(updatedItem)
    }).then(()=>{
     
      toast.success("Added successfully")
      setEditState({})
     
    }).catch((err)=>console.log(err))

  }

 const triggerEdit=(item)=>{
  setEditState(item)
 
 }

 const filter=(val)=>{
 if(val!=="clear"){ 
  setafter(val)
  fetch('http://localhost:3500/api/v2/todos/priority/'+val).then(res=>{
    return res.json()
  }).then((res)=>{console.log(res);setList(res);}).catch=(err)=>{console.log(err)}
}
else{
  //console.log("clear"+val)
  setafter("")
  setEditState({})
}
 }

  return (
  <div className='app'>
  <h1 className="title">Todo List</h1>
  <NewItem  addItem={addItem} editState={editState} editItem={editItem}/>
  <FilterItem filter={filter}/>

  <TodoList list={list} deleteItem={deleteItem} triggerEdit={triggerEdit} />
 

  </div>
 
  )
}

export default App









      // const updatedlist=list.map((item)=>{
      //   if(item.id==updatedItem.id){
      //     return updatedItem
      //   }
      //   else{
      //     return item
      //   }
      // })

      //setList([...updatedlist])

