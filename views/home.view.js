const getView = (properties) => `
  <h2>Propiedades destacadas</h2>
  <div class="propiedades">
    ${
      properties.map((property) => (`
        <div>
          <h1>${property.description} [${property.type}]</h1>
          <p>${property.price}</p>
        </div>
      `)).join('')
    }
  </div>
`;

module.exports = { getView };