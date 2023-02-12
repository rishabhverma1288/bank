const { check } = require('express-validator');
const userRepo = require('../repositories/usersRepo');

module.exports = {
    inputNumber:check('amount')
    .trim()
    .isNumeric()
    .withMessage("Must be a valid number")
    .custom(async (amount,{req})=>{
        let {sender,reciever,fromto} = req.body

        if (fromto === "left"){
            let sender1 = sender
    
            sender = reciever
            reciever = sender1
        }
        const user1 = await userRepo.getOne(sender)
        if (parseFloat(amount)>parseFloat(user1.cb)){
            throw new Error("The Amount is greater than balance of sender")
        }else{
            return true
        }


        // const existingUser = await usersRepo.getOneBy({email})
        // if(existingUser){
        //     throw new Error("Email Exists Already")
        // }else{
        //     return true
        // }
    }),
    searchUser:check('search')
    .trim()
    .toLowerCase()
    .isLength({min:1,max:30})
    .withMessage("Must Not be Empty")
    .custom(async (search,{req})=>{
        let {userFirst} = req.body
        
        const items = await userRepo.getAll()
        const renderedItems1 = items.filter(item=>{
            return item.email.toLowerCase().includes(search.toLowerCase())
        })

        if(renderedItems1.length === 0){
            throw new Error("Couldn't find any users by that name")
        }else{
            const renderedItems = renderedItems1.filter(item=>{
                return item.id !== userFirst
            })
            if(renderedItems.length === 0){
                throw new Error("That Username is already selected in the first section, try using other account")
            }else{
                return true
            }
        }

        

        



    })
}