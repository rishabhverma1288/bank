// packages
const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
// views

// 

const productsRouter = require('./routes/auth/users');
const welcomeRouter = require('./routes/welcome');
const transactionRouter = require('./routes/transaction');
///////////////////////////////////////////////////////////////////////////////////////////////////////


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(
    cookieSession({
      keys: ['lkasld235j']
    })
  );


app.use(welcomeRouter)
app.use(productsRouter)
app.use(transactionRouter)

app.listen(4200,()=>{
    console.log('Listening');
})