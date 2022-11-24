const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var AWS = require('aws-sdk');
AWS.config.region = process.env.REGION

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(8080, () => {console.log("App started on port 8080");});

