const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./src/DB');
const postRoute = require('./src/routes.js');
var path = require('path');
var serveStatic = require('serve-static');

// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/dist"));
app.use(serveStatic(__dirname + "/dist"));
app.use('/posts', postRoute);

app.listen(PORT, () => console.log('auth happening on port', PORT))
