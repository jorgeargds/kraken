const routes = require('express').Router();
var Product = require('../models/product');

routes.get('/saveProduct', (req, res) => {
  var prod = new Product ({ 
    barcode: '211231231', 
    name: 'Coca',
    stock: '10' 
  });
  prod.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.status(200).json({ message: 'User created!' });
    //res.json({ success: true });
  });
});

module.exports = routes;