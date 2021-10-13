const mongoose = require("mongoose");
const Campground = require("../models/campground");
const cities = require("./cities");
const { descriptors, peps } = require("./titlehelper");

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://localhost:27017/yelp");
    console.log("connected");
}

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 10; i++) {
        const randPair = Math.floor(Math.random() * 999);
        const price = Math.floor(Math.random() * 20) + 5;
        const camp = new Campground({
            location: `${cities[randPair].city}, ${cities[randPair].state}`,
            name: `${sample(peps)}, ${sample(descriptors)}`,
            image: "https://source.unsplash.com/collection/1114848?fit=crop&fm=jpg&h=800&q=60&w=920",
            price,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est debitis ipsum ut beatae culpa optio.",
        });
        await camp.save();
        console.log(camp);
    }
};
seedDB().then(() => {
    mongoose.connection.close();
});
