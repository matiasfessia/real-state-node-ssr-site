const data = ([
  {
    description: 'casa banda norte 110mts2',
    type: 'sale',
    price: '60.000 usd',
    featured: true
  },
  {
    description: 'casa san esteban 310mts2',
    type: 'sale',
    price: '260.000 usd',
    featured: true,
  },
  {
    description: 'depto centrico 40mts',
    type: 'rent',
    price: '7.000 ARS',
    featured: true,
  },
  {
    description: 'casa banda norte 110mts2',
    type: 'sale',
    price: '60.000 usd',
    featured: false,
  },
  {
    description: 'casa san esteban 310mts2',
    type: 'sale',
    price: '260.000 usd',
    featured: false,
  },
  {
    description: 'depto centrico 40mts',
    type: 'rent',
    price: '7.000 ARS',
    featured: false,
  },
  {
    description: 'casa banda norte 110mts2',
    type: 'sale',
    price: '60.000 usd',
    featured: false,
  },
  {
    description: 'casa san esteban 310mts2',
    type: 'sale',
    price: '260.000 usd',
    featured: false,
  },
  {
    description: 'depto centrico 40mts',
    type: 'rent',
    price: '7.000 ARS',
    featured: false,
  }
]);

const getForSaleProperties = () => {
  // array.filter()
  return []; // aqui deberia retornar un array con las propiedades destacadas, no un array vacio.
};

const getForRentProperties = () => {
  return []; // aqui deberia retornar un array con las propiedades en alquiler, no un array vacio.
};

const getFeatureProperties = () => {
  return []; // aqui deberia retornar un array con las propiedades en venta, no un array vacio.
};


module.exports = { getFeatureProperties }
