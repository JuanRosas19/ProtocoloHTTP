const { Router } = require('express');
const router = new Router();


const ciudades = require('../ciudades.json');



router.get('/', (req, res) => {
    res.json(ciudades);
});

router.get('/:id', (req, res) => {
    const {id } = req.params;
    const ciudad = ciudades.find(c => c.id == id);
    res.json(ciudad);
});

router.post('/', (req, res) =>  {
    const id = ciudades.length + 1;
    const newCiudad = { ...req.body, id };
    ciudades.push(newCiudad);
    res.json('Se ha agregado una nueva ciudad');
    
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, casas, edificios, apartamentos, carreteras, puentes, parques, zonas } = req.body;
  if (id && nombre && casas && edificios && apartamentos && carreteras && puentes && parques && zonas) {
      _.each(ciudades, (ciudad, i) => {
          if (ciudad.id === id) {
              ciudad.nombre = nombre;
              ciudad.casas = casas;
              ciudad.edificios = edificios;
              ciudad.apartamentos = apartamentos
              ciudad.carreteras = carreteras;
              ciudad.puentes = puentes;
              ciudad.parquesparques =parques;
              ciudad.zonaszonas =zonas;
          }
      });
      res.json(ciudades);
  } else {
      res.json('Se ha actualizado la ciudad');
  }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
  ciudades.forEach((c, index) => {
    if (c.id == id) {
      ciudades.splice(index, 1);
    }
  });
  res.json('Se ha eliminado correctamente la informacion');
});

module.exports = router;