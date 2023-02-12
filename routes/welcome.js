// packages
const express = require('express');


// views
const mainTemp = require("../views/auth/main")


const welcome = require('../views/customerPage')
const userPage = require('../views/userPage')
const homepage = require('../views/homepage')

// repo
const userRepo = require('../repositories/usersRepo')
const transactionRepo = require('../repositories/transactionRepo')
///////////////////////////////////////////////////////////////////////////////////////////////////////

const router = express.Router();

router.get('/',async (req,res)=>{
    
    return res.send(mainTemp({body:homepage.body(),
    title:"Home Page"}))


})


router.get('/allUsers',async (req,res)=>{
    
        
        const items = await userRepo.getAll()
        return res.send(mainTemp({body:welcome.body({items}),
            title:welcome.title(),
            style:welcome.style(),
            js:welcome.js()}))
    
    
})

router.post('/allUsers/search',async (req,res)=>{
    
    const {search}  = req.body  
    const items = await userRepo.getAll()
    const renderedItems = items.filter(item=>{
        return item.email.includes(search)
    })
    console.log(renderedItems)

    return res.send(mainTemp({body:welcome.body({items:renderedItems}),
        title:welcome.title(),
        style:welcome.style(),
        js:welcome.js()}))


})


router.get('/allUsers/users/:id',async (req,res)=>{
    const user = await userRepo.getOne(req.params.id)
    const Transactions = await transactionRepo.getAll()

    const items = Transactions.filter(item=>{
        if (item.sender === req.params.id){
            item.stat = "-"
            item.statColor = "red"
            item.person = item.reciever
            return item
        } else if(item.reciever === req.params.id){
            item.stat = "+"
            item.statColor = "green"
            item.person = item.sender
            return item
        }
    })


    for(i of items){
        const user = await userRepo.getOne(i.person)
        i.person = user.email
    }


    return res.send(mainTemp({body:userPage.body({user,items}),
        title:userPage.title(),
        style:userPage.style(),
        js:userPage.js()}))
})








module.exports = router;