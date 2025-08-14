// import mongoose from "mongoose";

// export const ConnectDB = async () =>{
//     await mongoose.connect('mongodb+srv://polymath1510:mankokanati69@cluster0.isevtrr.mongodb.net/blog-app');
//     console.log("DB Connected");
// }


import mongoose from "mongoose";

export const ConnectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://polymath1510:mankokanati69@cluster0.isevtrr.mongodb.net/blogapp?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("✅ MongoDB Connected...");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err.message);
        process.exit(1); // Exit the process if DB connection fails
    }
};
