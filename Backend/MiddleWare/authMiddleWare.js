const auth = (req,res, next)=>{
    let token = req.cookie?.token
   try {
    if(!token){
        return res.status(401).send({result: false, message: "user is not authantication"})
    }
    
   } catch (error) {
    return res.status(404).send({result: false, message:"server error"})
   }
}