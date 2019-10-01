import * as mongoose from "mongoose";

const dbUser = process.env.DB_USER || "admin";
const dbPassword = process.env.DB_PASS || "1234";
const dbName = process.env.DB_NAME || "desfio";
mongoose
  .connect(`mongodb://localhost:27017/${dbName}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => {})
  .catch(err => {
    console.error(
      `MongoDB connection error. Please make sure MongoDB is running. ${err}`
    );
  });
