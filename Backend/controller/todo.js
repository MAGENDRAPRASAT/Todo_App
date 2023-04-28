const Todo=require('../model/todo')

exports.getAllTodoList=async(req,res)=>{
    try{
        const list=await Todo.find();
        res.send(list)
    }catch(error){
        return res.status(500).json({
            msg: "internal error"
        })
    }
}


exports.createTodo=async(req,res)=>{
    try{
        const newTodo=await Todo.create(req.body);
        return res.status(201).json({
            data:newTodo
        })
    }catch(err){
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}

exports.getAllTodoById=async(req,res)=>{
    try{
        const  todo=await Todo.findById(req.params.id)
        if(todo){
            return res.status(200).json({
                data:todo
            })
        }
        else{
            return res.status(404).json({
                msg:"todo not found"
            })
        }
    }
    catch(err){
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}

exports.deleteItem=async(req,res)=>{
    try{
    const todo=await Todo.findById(req.params.id)
    if(todo){
        await Todo.findByIdAndDelete(req.params.id);
        const list=await Todo.find();
        res.send(list)
    }
    else{
        return res.status(404).json({
            msg:"not found"
        })
    }
    }catch(err){
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
   
         
}

exports.updateItem=async(req,res)=>{
    try{
          const item= await Todo.findById(req.params.id);
          if(item){
            await Todo.findByIdAndUpdate(req.params.id,req.body)
            return res.status(200).send("updated")
          }
          else{
            return res.status(404).json({
                msg:"todo not found"
            })
          }
        }
        catch(err){
          
        }
}

exports.getPriority=async(req,res)=>{
    try{
       // console.log(req.params.pri)
        const pri=await Todo.find({ priority: { $eq: req.params.pri } })
        //console.log(pri)
    res.send(pri)
    }catch(error){
        return res.status(500).json({
            msg: "internal error"
        })
    }
}