const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./src/DB.js');
const postRoute = require('./src/routes.js');
var path = require('path');
var serveStatic = require('serve-static');

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});


// Database
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to mongo', MONGODB_URI)
})


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/dist"));
app.use(serveStatic(__dirname + "/dist"));
app.use('/posts', postRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});
