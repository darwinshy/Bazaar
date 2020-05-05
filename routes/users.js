var express = require('express');
var router = express.Router();
var passport = require('passport');


// Get Users model
var User = require('../models/user');

router.get('/register', function(req, res) {

    res.render('register.ejs', {
        title: 'Register'
    });

});

/*
 * POST register
 */
router.post('/register', function(req, res) {

    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({ username: username }, function(err, user) {
        if (err)
            console.log(err);

        if (user) {

            res.redirect('/users/register');
        } else {
            var user = new User({
                name: name,
                email: email,
                username: username,
                password: password,
                admin: 0
            });



        }
    });

});


router.get('/login', function(req, res) {


    res.render('login.ejs');

});

/*
 * POST login
 */
router.post('/login', function(req, res, next) {

    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);

});

/*
 * GET logout
 */
router.get('/logout', function(req, res) {

    req.logout();
    res.redirect('/users/login');

});

// Exports
module.exports = router;