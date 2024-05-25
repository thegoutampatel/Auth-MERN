import mongoose from "mongoose";

// URL-encode the password
const password = encodeURIComponent("Papa@777");
const username = "gmpatel9131";
const cluster = "users.2jpofr8.mongodb.net";
const dbName = ""; // Specify the database name if required

const DB = `mongodb+srv://${username}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority&appName=users`;

mongoose.connect(DB).then(() => {
    console.log("Database Connected");
}).catch((err) => {
    console.error("Error in Connection:", err);
});
