'use strict';

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


let startDb = require('./server/db');

let createApp = function() {
  let app = require('./server/app');
  server.on('request', app);
}

startDb.then(createApp).catch(function (err) {
    console.error(chalk.red(err.stack));
    process.kill(1);
});


