var mongoose = require("mongoose");

var wishlistSchema = mongoose.Schema({
    image: String,
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

module.exports = mongoose.model("Wishlist", wishlistSchema);