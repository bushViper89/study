const express = require('express');
const static = require('serve-static');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

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

if (process.env.NODE_ENV === "production")
{  
  // webapp portfoliogit 
  const portfolio = express();

  portfolio.use(static(path.join(__dirname, '../webapps/portfolio/build')));
  
  portfolio.get('/', (req, res) => {
    res.send(static(path.join(__dirname, '../webapps/portfolio/build/index.html')));
  });

  portfolio.listen(3000, () => console.log('portfolio'));

  // webapp garden
  const garden = express();

  garden.use(static(path.join(__dirname, '../webapps/garden/build')));

  garden.use(
    '/gardenList',
    createProxyMiddleware({
      target: 'http://api.nongsaro.go.kr/service/garden/',
      changeOrigin: true
    })
  );

  garden.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../webapps/garden/build/index.html'));
  });

  garden.listen(8080, () => console.log('garden'));
}


