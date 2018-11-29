import express from "express";

process.on("unhandledRejection", error => {
  throw error;
});
process.on("uncaughtException", error => {
  logger.error(error);
});

const app = express();

app.use(express.static("./bin/public"));

app.listen(3000, () => console.log("Application running on localhost:3000"));
