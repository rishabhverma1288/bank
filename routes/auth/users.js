// packages
const express = require('express');
const multer  = require('multer')

const upload = multer({ storage: multer.memoryStorage()})



// views
const add = require('../../views/auth/productsAdd')
// repo
const userRepo = require('../../repositories/usersRepo')

///////////////////////////////////////////////////////////////////////////////////////////////////////

const router = express.Router();



router.get('/admin/users/add',async (req,res)=>{
    res.send(add)
    
})




router.post('/admin/users/add',async (req,res)=>{
        const {username,email,gender,age,cb,address,occupation} = req.body
        const user = await userRepo.create({username,email,gender,age,cb,address,occupation})
        return res.redirect("/allUsers")

})













module.exports = router;