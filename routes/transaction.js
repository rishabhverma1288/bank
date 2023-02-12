// packages
const express = require('express');

const { check, validationResult } = require('express-validator')
const {inputNumber,searchUser} = require("../validators/validators")
// views
const mainTemp = require("../views/auth/main")
const transactionTemp = require("../views/transfer")
const transactionTableTemp = require("../views/transactiontable")
const successpage = require("../views/success")


// repo
const userRepo = require('../repositories/usersRepo')
const transactionRepo = require('../repositories/transactionRepo')

///////////////////////////////////////////////////////////////////////////////////////////////////////

const router = express.Router();



router.get('/allUsers/users/:id/transfer',async (req,res)=>{
    const user1 = await userRepo.getOne(req.params.id)
    const alluser = await userRepo.getAll()
    const renderedItems = alluser.filter(item=>{
        return item.id !== req.params.id
    })
    const user2 = renderedItems[0]

    return res.send(mainTemp({body:transactionTemp.body({items1:user1,items2:user2}),
        title:transactionTemp.title(),
        style:transactionTemp.style(),
        js:transactionTemp.js()}))
})

router.post('/allUsers/users/:id/transfer/transferto',[searchUser],async (req,res)=>{
    const {search,userFirst,userSecond}  = req.body

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const user1 = await userRepo.getOne(userFirst)
        const user2 = await userRepo.getOne(userSecond)

        return res.send(mainTemp({body:transactionTemp.body({items1:user1,items2:user2,errors}),
            title:transactionTemp.title(),
            style:transactionTemp.style(),
            js:transactionTemp.js()}))
    }
    





    
    const user1 = await userRepo.getOne(userFirst)
    const items = await userRepo.getAll()
    const renderedItems1 = items.filter(item=>{
        return item.email.includes(search)
    })



    const renderedItems = renderedItems1.filter(item=>{
        return item.id !== userFirst
    })


    const user2 = renderedItems[0]

    return res.send(mainTemp({body:transactionTemp.body({items1:user1,items2:user2}),
        title:transactionTemp.title(),
        style:transactionTemp.style(),
        js:transactionTemp.js()}))
})


router.get('/allUsers/users/:id/transfer/transferto',async (req,res)=>{
    const user1 = await userRepo.getOne(req.params.id)
    const alluser = await userRepo.getAll()
    const renderedItems = alluser.filter(item=>{
        return item.id !== req.params.id
    })
    const user2 = renderedItems[0]

    return res.send(mainTemp({body:transactionTemp.body({items1:user1,items2:user2}),
        title:transactionTemp.title(),
        style:transactionTemp.style(),
        js:transactionTemp.js()}))
})


router.post('/done',[inputNumber],async (req,res)=>{
    let {sender,reciever,amount,fromto} = req.body





    

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const user1 = await userRepo.getOne(sender)
        const user2 = await userRepo.getOne(reciever)

        return res.send(mainTemp({body:transactionTemp.body({items1:user1,items2:user2,errors}),
            title:transactionTemp.title(),
            style:transactionTemp.style(),
            js:transactionTemp.js()}))
    }

    if (fromto === "left"){
        let sender1 = sender

        sender = reciever
        reciever = sender1
    }
    
    



    const user1 = await userRepo.getOne(sender)
    const amount1 = parseInt(user1.cb) -  parseInt(amount)

    user1.cb = `${amount1}`

    const user2 = await userRepo.getOne(reciever)
    const amount2 = parseInt(user2.cb) +  parseInt(amount)

    user2.cb = `${amount2}`
    await userRepo.update(sender,user1)
    await userRepo.update(reciever,user2)

    const transaction = await transactionRepo.create({sender,reciever,amount})
    console.log(transaction)


    return res.redirect(`/transactionDone/${transaction.id}`)
})


router.get('/transactionDone/:id',async (req,res)=>{
    const id = req.params.id
    const {sender,reciever,amount} = await transactionRepo.getOne(id)
    
    const send = await userRepo.getOne(sender)
    const rec = await userRepo.getOne(reciever)

    return res.send(mainTemp({body:successpage.body({sender:send.username,reciever:rec.username,amount})}))

})




router.get('/transactionTable',async (req,res)=>{
    const trans = await transactionRepo.getAll()
    for(i of trans){
        
        const user1 = await userRepo.getOne(i.sender)
        i.sender = user1.email

        const user2 = await userRepo.getOne(i.reciever)
        i.reciever = user2.email
    }
    return res.send(mainTemp({body:transactionTableTemp.body({items:trans}),
            title:transactionTableTemp.title(),
            style:transactionTableTemp.style(),
            js:transactionTableTemp.js()}))
})


router.post('/transactionTable/search',async (req,res)=>{
    const trans = await transactionRepo.getAll()
    for(i of trans){
        
        const user1 = await userRepo.getOne(i.sender)
        i.sender = user1.email

        const user2 = await userRepo.getOne(i.reciever)
        i.reciever = user2.email
    }

    const {search}  = req.body  

    let renderedItems = []

    for (let i of trans){
        if (i.sender.includes(search) || i.id.includes(search)|| i.reciever.includes(search)|| i.date.includes(search)){
            renderedItems.push(i)
        }
    }


    return res.send(mainTemp({body:transactionTableTemp.body({items:renderedItems}),
            title:transactionTableTemp.title(),
            style:transactionTableTemp.style(),
            js:transactionTableTemp.js()}))
})




module.exports = router;