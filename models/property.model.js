const data = ([
  {
    description: 'Deptos en Pozp, sector oeste',
    type: 'sale',
    price: '60.000 USD',
    featured: true
  },
  {
    description: 'Exclusivos departamentos de 1 dormitorio a estrenar',
    type: 'sale',
    price: '56.000 USD',
    featured: true,
  },
  {
    description: 'Se vende casa en calle estrada',
    type: 'sale',
    price: '10.000.000 ARS',
    featured: true,
  },
  {
    description: 'Casa de 3 dormitorios en Bimaco',
    type: 'sale',
    price: '80.000 USD',
    featured: false,
  },
  {
    description: 'Departamento en condominio Alma 2 dormitorios',
    type: 'rent',
    price: '13.000 ARS',
    featured: false,
  },
  {
    description: 'Casa en Country Riverside',
    type: 'sale',
    price: '350.000 USD',
    featured: false,
  },
  {
    description: 'Alquilo departamento de un dormitorio, edificio Piazza V',
    type: 'rent',
    price: '8.000 ARS',
    featured: false,
  },
  {
    description: 'Alquilo casa macrocentro con galpo, dos dormitorios, dos baños, sin comision y sin expensas',
    type: 'rent',
    price: '25.000 ARS',
    featured: false,
  },
  {
    description: 'Vendo casa con detalles. 215 mts2',
    type: 'sale',
    price: '4.500.000 ARS',
    featured: false,
  }
]);

const getPropertiesFeatured = () => data.filter(property => (property.featured));

const getPropertiesForRent = () => data.filter(property => (property.type === 'rent'));

const getPropertiesForSale = () => data.filter(property => (property.type === 'sale'));

module.exports = {
  getPropertiesFeatured,
  getPropertiesForRent,
  getPropertiesForSale
};
