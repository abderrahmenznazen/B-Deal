const mongoose = require('mongoose')
const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const passportLocal =require('passport-local').Strategy;
const Favlist = require('../models/favList.model');




module.exports={
    postLogIn:(req, res, next) =>{
        passport.authenticate('local',{ failureRedirect: '/', session:false },(err, user, info) => {
        if (err) throw err;
        if (!user) {res.send ("verifier le nom d'utilisateur")}
        else {
            req.logIn(user,(err)=>{
                if (err) throw err;
                const {_id,userIdentifient,isAdmin}=req.user
                res.send({isAuthenticated:true, user:{userIdentifient,isAdmin}})
                console.log(req.user)}
                        )
                }  
        })
        (req ,res ,next);
    },
    logOut:(req, res, next) =>{  
        req.logout();
        res.send({duccess:true, user:{userIdentifient:"",isAdmin:""}})
        (req, res, next);
    },
    createUser: (req, res)=>{
        User.findOne({username: req.body.username}, async (err, doc)=>{
            if (err) throw err;
            if (doc) res.send("l'utilisateur d'ejat existe")
            if (!doc){
                const hashedPassword = await bcrypt.hash(req.body.password, 10);
                const newUser = new User({
                    username: req.body.username,
                    password: hashedPassword,
                    userIdentifient: req.body.userIdentifient,
                    isAdmin: req.body.isAdmin
                })
                await newUser.save();
                res.send("Vous étes enregestrer avec seccés")
            }
        })
    },
    getUser: (req, res)=>{
        res.send(req.user);
    },
    isAdmin: (req, res)=>{
        if (req.user.user.isAdmin === "admin"){
            res.status(200).json({message: {messageBody : 'Vous etes admin' , msgError:false}})
        }else
        res.status(403).json({message: {messageBody : " Vous n'etes pas admin ", msgError:true}});
    },
    addToFAv: (req,res)=>{
        const favlist = new Favlist(req.body)
        favlist.save(err=>{
            if (err) throw err;
            else{
                favlist.save(err=>{
                    if (err) throw err;
                    else
                    res.status(200).json({message : {msgBody:"  l'article ajouter aux votre favorit list", msgError: false}})
                })
            }
        })
    },
}