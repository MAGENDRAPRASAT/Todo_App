const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const {getAllTodoList,createTodo,getAllTodoById,deleteItem,updateItem,getPriority} =require('./controller/todo')
const {connectDb}=require('./config/db')
const cors=require('cors')
const app=new express()
connectDb();
app.use(cors())
app.use(bodyParser.json())

app.get('/api/v2/todo',getAllTodoList)
app.get('/api/v2/todo/:id',getAllTodoById)
app.delete('/api/v2/todo/:id',deleteItem)
app.post('/api/v2/todo',createTodo)
app.patch('/api/v2/todo/:id',updateItem)
app.get('/api/v2/todos/priority/:pri',getPriority)

app.listen(3500,()=>{console.log("Server running")})