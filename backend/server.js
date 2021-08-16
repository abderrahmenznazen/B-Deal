const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv')
const session = require ('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport')
const ProductRoute = require('./routes/product.route')
const connection = require('./index')
const UserRoute = require('./routes/user.router')
const passportLocal =require('passport-local').Strategy;




/***********connection***/
dotenv.config();
connection();

/***************Middleware ****/

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/app/product', ProductRoute)

app.use(session({
    secret : process.env.BDEAL_PW,
    resave : false,
    saveUninitialized :true,
}));

app.use(cookieParser(process.env.BDEAL_PW))
app.use(passport.initialize());
app.use(passport.session())

require('./configuration/localpassport.config')(passport)

app.use('/app/user', UserRoute)

app.use((req, res, next)=>{
    console.log(`${new Date().toString()}=>${req.originalUrl}`)
})

app.use((err, req, res, next) =>{
    res.status(404).send("oups le page que vous cherche n'existe pas")
})

app.use((err, req, res, next)=>{
    res.status(err.status || 500);
    res.send({error:{
        status: err.status || 500, 
        message: err.message
    }})
})

const Port = process.env.PORT || 8000
app.listen(Port,()=>console.info(`le serveur runner en port ${Port}`))