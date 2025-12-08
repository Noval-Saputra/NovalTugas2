const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            // ambil drivers di monggodb.com
            "mongodb+srv://Noval:noval@cluster0.nnhmxyb.mongodb.net/tugas2?appName=Cluster0"
        );
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Error : ", error);
        process.exit(1);
    }
}

module.exports = connectDB;