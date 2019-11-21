var pets = require('../controllers/pets')
var path = require('path');

module.exports = (app) => {
  app.get('/pets', pets.index),
  app.get('/pets/:id', pets.show),
  app.post('/pets', pets.create),
  app.put('/pets/:id', pets.update),
  app.delete('/pets/:id', pets.destroy)
  app.all("*", (req,res,next) => {
      res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}