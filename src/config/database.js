import mongoose from "mongoose";

const connect = () => mongoose.connect(process.env.MONGODB_URL);

const close = () => mongoose.connection.close();

export default {
  connect,
  close,
};
