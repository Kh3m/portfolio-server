const express = require("express");
const dbcon = require("./dbconnection/connection");
const globalMiddleware = require("./middlewares/global");
const errorMiddleware = require("./middlewares/error");
const routesMiddleware = require("./middlewares/routes");
const app = express();

// global middlewares
app.use(globalMiddleware);
// serve routes
app.use(routesMiddleware);
// error middleware
app.use(errorMiddleware);

// connect to database
dbcon.connectToDB( app );