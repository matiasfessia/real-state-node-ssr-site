const getView = (data) => `
  <h2>Propiedades en alquiler</h2>
  <div class="propiedades">
    ${
      data.properties.map((property) => (`
        <div>
          <h1>${property.description} [${property.type}]</h1>
          <p>${property.price}</p>
        </div>
      `)).join('')
    }
  </div>
`;

module.exports = { getView };