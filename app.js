const express = require('express');
const app = express();
const config = require('./config');
const path = require('path');

app.use(express.static(__dirname + '/dist'))

app.get('/*', (req, res)=>{
    res.sendFile(__dirname + '/dist/index.html', (err)=>{
        res.status(500).send(err);
    })
});

app.listen(config.settings.PORT, (err) => {
    if (err) throw err;
    console.log('Start Exploring!!!')
});

