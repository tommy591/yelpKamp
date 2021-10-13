const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const campgroundSchema = new Schema({
    image: String,
    name: String,
    price: Number,
    location: String,
    description: String,
});
const Campground = new mongoose.model("Campground", campgroundSchema);
module.exports = Campground;
