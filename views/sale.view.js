const config = require('../config');

const getView = (properties, port) => `
  <h2>Propiedades en venta</h2>
  <div class="propiedades">
    ${
      properties.map((property) => (`
        <a href="${config.appHost}/propiedad/${property.slug}">
          <h1>${property.title}</h1>
          <p>${property.currency} ${property.price}</p>
        </a>
      `)).join('')
    }
  </div>
`;

module.exports = { getView };