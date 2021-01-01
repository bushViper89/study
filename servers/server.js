const express = require('express');
const static = require('serve-static');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const path = require('path');

const server = express();
const port = process.env.PORT || 5000;

// Public
server.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
server.use(static(path.join(__dirname, 'public')));

// RESTful
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));

server.get('/api/hello', (req, res) => {
  res.send({message: 'Hello Express!'});
});

server.listen(port, () => console.log(`Listening on port ${port}`));