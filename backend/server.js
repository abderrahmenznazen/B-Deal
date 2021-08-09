const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv')

dotenv.config();
require('./index')();

app.use(express.json())
app.use(cors())

const ProductRoute = require('./routes/product.route')
app.use('/product', ProductRoute)

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