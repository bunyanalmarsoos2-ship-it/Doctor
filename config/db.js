import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log(` Mongodb database connected `.bgMagenta.white);
  });
  await mongoose.connect(process.env.MONGO_URL);
};

export default connectDB;



