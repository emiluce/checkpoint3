// declare all the necessary libraries
const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

const port = 3000;


// set up the application
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// launch the node server
let server = app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port ' + server.address().port);
});
