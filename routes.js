const app = require('express').Router();
const models = require('./db').models;

module.exports = app;

app.get('/users', (req, res, next)=> {
  models.User.findAll({ order: 'name'})
    .then( users => res.send(users ))
    .catch(next);
});

app.get('/products', (req, res, next)=> {
  models.Product.findAll({ order: 'name'})
    .then( products => res.send(products ))
    .catch(next);
});

app.post('/products', (req, res, next)=> {
  models.Product.create(req.body)
    .then( product => res.send(product))
    .catch(next);
});

app.delete('/products/:id', (req, res, next)=> {
  models.Product.destroy( { where: { id: req.params.id }})
    .then( ()=> res.sendStatus(200))
    .catch(next);
});
