const mongoose = require("mongoose");

const connectionParams = {
    useNewurlParser: true,
    useUnifiedTopology: true,
};

try {
    module.exports = mongoose.connect(process.env.DB_URL, connectionParams);
    console.log("connected to database successfully!! Let's goooo...");
} catch(error) {
    console.log(error);
    console.log("fuck bro, something went wrong try again!")
}
