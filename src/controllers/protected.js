import { userDb } from "./reguser.js"

const protectedCrt = (req,res) => {
    const reqUser = req.data
    const user = userDb.find((user) => user.id === reqUser.id)
    if(user && user.role === 'admin'){
       return(
        res.status(200).json({
        "message": "Authorized as admin"
        })
       ); 
    };
    if(!user){
        return res.status(400).json({
            message: "user not found"}
        )
    }
    // return res.status(200).json({
    //     message: "Authorization Successful"
    // })
}

export default protectedCrt;