import mongoose from 'mongoose';
import { app } from './app';
import dotenv from 'dotenv';
dotenv.config();


const StartServer =  async() => {
    try {
        await mongoose.connect(process.env.DB_URL as string);
        console.log("Connected to MongoDB");
        // server listener
         app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
         })
    } catch (error) {
        console.log(error);
    };
};


StartServer();