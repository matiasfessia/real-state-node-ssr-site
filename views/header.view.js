const getView = (fullHost) => `
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
`;

module.exports = { getView };