'use strict';
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
module.exports = app;
console.log('in app')
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '../../public')));
app.use('/', express.static(path.join(__dirname, '../../node_modules')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res, next){
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})


// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});


app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

console.log('right before api')
app.use('/api', require('../routes'));

// Error catching endware.
app.use(function (err, req, res, next) {
    console.log("ERROR")
    console.error(err)
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});