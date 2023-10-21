

const getAllMessage=async(req,res)=>{
    try{
        const messages=`SELECT * FROM messages`;
        res.status(200).json(messages)
    }catch(err){
        console.log(err)
        res.send(err)
    }
}
const addMessage=async(req,res)=>{
    try{
        const sql=`INSERT INTO messages SET ?`
        const created=(sql,req.body)

        res.json(created)
    }catch(err){
        res.json(err)
    }
}

const getConversation=async(req,res)=>{
    idchat=req.params.id
    try{
        const conversation=`SELECT * FROM messages WHERE chat_idchat =${idchat}`
        res.status(200).json(conversation)
    }catch(err){
        console.log(err)
        res.json(err)
    }
}
export default {
    getAllMessage,
    addMessage,
    getConversation
}