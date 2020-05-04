var express = require("express");
var router = express.Router();

//Requiring Models
var User = require("../models/user");
var Comment = require("../models/wishlist");




// Post a new wishlist


router.post("/users/:id/wishlists", isLoggedIn, function(req, res) {

    User.findById(req.params.id, function(err, user) {
        if (err) {
            console.log(err);
            res.redirect("/");
        } else {

            Wishlist.create(req.body.wishlist, function(err, wishlist) {
                if (err) {
                    console.log(err);
                } else {

                    wishlist.author.id = req.user._id;
                    wishlist.author.username = req.user.username;

                    wishlist.save();

                    user.wishlist.push(wishlist);
                    user.save();
                    //redirect
                    res.redirect("/users/" + campground._id);

                }
            })


        }
    })


});

//Middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("/login");
    }
}
module.exports = router;