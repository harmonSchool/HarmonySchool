


const getConversations=async(req,res)=>{
    try{
        const conversations=`SELECT * FROM chat`
        res.status(200).json(conversations)
    }catch(err){
        console.log(err)
        res.send(err)
    }
}

const getRoom=async(req,res)=>{
    try{
        const sql=`SELECT * FROM chat WHERE users_iduser = ${userId} AND teachers_idteacher=${TeacherId}`
        const conversation=(sql,userId,TeachId)
        
        res.status(200).json(conversation)

    }catch(err){
        console.log(err)
        res.json(err)
    }
}
const startConversation=async(req,res)=>{
    try{
        const sql =`INSERT INTO chat SET ?`
        const created=(sql,req.body)
        res.status(200).json(created)
    }catch(err){
        console.log(err)
        res.json(err)
    }
}
const addConversation=async(req,res)=>{
    try{
        await prisma.conversation.create({
            data:{
                orgName:req.body.orgName,
                userEmail:req.body.userEmail,
                orgId:req.body.orgId,
                messages:{
                    create:[
                        {
                            sender:req.body.sender,
                            content:req.body.content
                        }
                    ]
                }
            }
        })
        res.status(200).json("created")

    }catch(err){
        console.log(err)
        res.json(err)
    }
}
const userConversation=async(req,res)=>{
    try{
        const conversation=await prisma.conversation.findMany({
            where:{
                userEmail:req.params.user
            }
        })
        res.status(200).json(conversation)

    }catch(err){
        console.log(err)
        res.json(err)
    }
}
const orgConversation=async(req,res)=>{
    try{
        const conversation=await prisma.conversation.findMany({
            where:{
                orgName:req.params.orgName
            }
        })
        res.status(200).json(conversation)

    }catch(err){
        console.log(err)
        res.json(err)
    }
}
export default {
    getConversations,
    getRoom,
    addConversation,
    startConversation,
    userConversation,
    orgConversation
}