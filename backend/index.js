const mongoose = require('mongoose')

module.exports =()=>{
    mongoose.connect(
        process.env.BDEAL_DB_URI,
        {
            useNewUrlParser:true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        }
    )
    .then(()=>{
        console.log('database connecté');
    })
    .catch(err => console.log(err.message));
}