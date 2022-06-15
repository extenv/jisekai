const express = require('express');
const morgan = require('morgan');
const path  = require('path');
const config = require('./config');
const routes = require('./routes/route');
const cors = require('cors');
const { port } = config;
const app = express()

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Settings
app.set("port", port);
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", ".ejs");
app.use(cors());

// Routes
app.use(routes);

module.exports = app;