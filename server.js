const express = require('express');
const session = require('express-session');
const helmet = require("helmet");
const compression = require("compression");
require("dotenv").config();
const path = require("path");
const mongoose = require('mongoose');
const app = express();
const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const landingRouter = require("./routes/landing");
const bodyParser = require('body-parser');
const mongodb = process.env.uri;

// Connect to database;

mongoose.connect(mongodb, { useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection;

db.on("error", console.error.bind(console, "mongo connection error"));

app.use(require('morgan')('dev'));
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(compression()); // compress all routes
app.use(helmet());

app.set('view engine', 'pug');
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/landing", landingRouter);

app.listen(8000);
