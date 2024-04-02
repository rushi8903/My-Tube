import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';


const connectDB = async () => {
    try {
        const mongodbconnection = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`MongoDB connected !!!\nHost : ${mongodbconnection.connection.host}`)
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR\N",error);
        process.exit(1);
    }
}

export default connectDB;