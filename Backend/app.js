const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const userRoutes = require("../Backend/api/routes/userRoutes");
const interestRoutes = require("../Backend/api/routes/interestRoutes");
const diaryRoutes = require("../Backend/api/routes/diaryRoutes");

mongoose.connect("mongodb+srv://admin:admin@cluster0.uopxohf.mongodb.net/?retryWrites=true&w=majority");

mongoose.Promise = global.Promise;

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Reuested-With, Content-Type, Accept, Authorization"
  );
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/user", userRoutes);
app.use("/interest", interestRoutes);
app.use("/diary", diaryRoutes);

app.get("/", (req, res, next) => {
  return res.status(200).json({ message: "OK" });

});

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: "Something went Wrong",
    error: error.message,
  });
});

module.exports = app;
