const express =require('express')
const router = express.Router()

/////// Router
router.get("/",(req,res)=>{
    res.send("User Page")
})


router.get("/default",(req,res)=>{
    res.send("User Default Page")
})

module.exports = router 
