const mongoose = require('mongoose')
const User = require('../models/user.model')
const bcrypt = require('bcryptjs')



module.exports={
    postLogIn:(err, user, info) =>{
        if (err) throw err;
        if (!user) res.send ("verifier le nom d'utolisateur")
        else {
            req.logIn(user,(err)=>{
                if (err) throw err;
                res.send("l'identification est verifier avec succès")
                console.log(req.user);
            })
        }(req, res ,next);
    },
    createUser: (req, res)=>{
        User.findOne({username: req.body.username}, async (err, doc)=>{
            if (err) throw err;
            if (doc) res.send("l'utilisateur d'ejat existe")
            if (!doc){
                const hashedPassword = await bcrypt.hash(req.body.password, 10);
                const newUser = newUser({
                    username: req.body.username,
                    password: hashedPassword
                })
                await newUser.save();
                res.send("Vous étes enregestrer avec seccés")
            }
        })
    },
    getUser: (req, res)=>{
        res.send(req.user);
    }
}