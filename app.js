const express = require("express");
const dbcon = require("./dbconnection/connection");

const app = express();

// connect to database
dbcon.connectToDB( app );