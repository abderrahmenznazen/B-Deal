const User =require('../models/user.model')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const LocalStrategy = require ('passport-local').Strategy;

module.exports = function (passport){
    passport.use(
        new LocalStrategy((username, password, done)=> {
          User.findOne({ username: username }, (err, user)=> {
            if (err) { return done(err); }
            if (!user) {
              return done(null, false, { message: 'Incorrect username.' });
            }
            bcrypt.compare(password, user.password, (err, result))
            if (err) { return done(err); }
            if (result === true) {
              return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
          });
        }
      )
      );
    passport.serializeUser((user, cb ) =>{
    cb(null, user.id);
    });
    
    passport.deserializeUser((id, cb) =>{
    User.findById(id, (err, user) => {
        const userInformation={username: user.username};
        cb(err, userInformation);
    });
    });
}
