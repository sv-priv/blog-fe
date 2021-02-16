const express = require('express');

const favicon = require('express-favicon');

const path = require('path');

// const { default: App } = require('./src/components/App');

const port =  process.env.PORT || 8080;

const app = express();

app.use(favicon(__dirname + 'blog-loka-fe/build/favicon.ico'));


app.use(express.static(__dirname));

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname + 'blog-loka-fe/build/index.html'));
});

app.listen(port);