const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()
const config = require('./src/DB');
const postRoute = require('./src/routes.js');
var path = require('path');
var serveStatic = require('serve-static');

// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
})
.then(
  () => { console.log('Atlas is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/dist"));
app.use(serveStatic(__dirname + "/dist"));
app.use('/posts', postRoute);

app.listen(PORT, () => console.log('auth happening on port', PORT))
