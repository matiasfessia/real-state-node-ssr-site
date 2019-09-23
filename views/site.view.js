const host = 'http://localhost';
const port = 3007;
const fullHost = `${host}:${port}`;

const getView = (content) => `
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

module.exports = { getView };
