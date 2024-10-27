import mongoose from "mongoose";


// TODO: What is this supposed to do, bro?
const connectionParams = {
    useNewurlParser: true,
    useUnifiedTopology: true,
};

/** @type {mongoose.Mongoose | null} */
var connection = null;
await mongoose
    .connect(process.env.DB_URL || "")
    .then((conn) => {
        connection = conn;
        console.log("Connected to database successfully.");
    })
    .catch((error) => {
        console.error("Error connecting to database. Reason:", error);
    });

export default connection;
