// Require Express.js
const coin = require("./modules/coin.js");
const express = require('express');
const app = express();
var argv = require('minimist')(process.argv.slice(2));
console.log(argv);
console.log(argv.port);

// Start an app server
let portNumber = argv.port ? parseInt(argv.port) : 5000;
const server = app.listen(portNumber, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',portNumber))
});

app.get('/app/', (req, res) => {
    // Respond with status 200
        res.statusCode = 200;
    // Respond with status message "OK"
        res.statusMessage = 'OK';
        res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
        res.end(res.statusCode+ ' ' +res.statusMessage)
});

app.get('/flip/', (req, res) => {
        res.statusCode = 200;
        res.statusMessage = 'OK';
        res.set({"Content-Type": "text/json"});

        const test = {"I eat" : "homeless people"};

        res.json(test);
});

// Default response for any other request
app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
});