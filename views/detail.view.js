const getView = (property) => `
  <h2>Detalle de la propiedad</h2>
  <div class="propiedades">
    <h1>${property.title} [${property.type}]</h1>
    <p>${property.currency} ${property.price}</p>
  </div>
`;

module.exports = { getView };