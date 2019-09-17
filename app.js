const express = require('express');
const siteCtrl = require('./controllers/site.controller')
const homeCtrl = require('./controllers/home.controller')

const app = express();
const host = 'http://localhost';
const port = 3007;
const fullHost = `${host}:${port}`;

const render = (content) => `
  <html>
    <head>
      <title>Inmobiliaria SPACIOS</title>
    </head>
    <body>
      <header class="header-wrapper">
        <div class="header">
          <img class="header-logo" src="" alt="logo del comercio" />
          <nav class="nav">
            <a class="nav-item" href="${fullHost}">Inicio</a>
            <a class="nav-item" href="${fullHost}/alquiler">Alquiler</a>
            <a class="nav-item" href="${fullHost}/venta">Venta</a>
            <a class="nav-item" href="${fullHost}/contacto">Contacto</a>
          </nav>
        </div>
      </header>
      ${content}
      <div class="footer-wrapper">
        <div class="footer">
          <p>footer</p>
        </div>
      </div>
    <body>
  </html>
`;

app.get('/', (req, res) => res.status(200).send(siteCtrl.renderSite(homeCtrl.renderHome())));

app.get('/alquiler', (req, res) => res.status(200).send(render(`<h2>Seccion Alquiler</h2>`)));
app.get('/venta', (req, res) => res.status(200).send(render(`<h2>Seccion Venta</h2>`)));
app.get('/contacto', (req, res) => res.status(200).send(render(`<h2>Seccion Contacto</h2>`)));

// start server
app.listen(port, () => console.log(`Listening on port ${port}!`));