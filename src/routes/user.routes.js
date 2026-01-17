import express from "express"

const router = express.Router()

// only accessible ot admin
router.get("/admin",(req,res)=>{
    res.send("Welcome Admin")
})
// only accessible ot admin and manager
router.get("/admin",(req,res)=>{
    res.send("Welcome Admin and manager")
})
//  accessible to all
router.get("/admin",(req,res)=>{
    res.send("Welcome user")
})

export default router