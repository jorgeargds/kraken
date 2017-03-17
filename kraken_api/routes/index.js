const routes = require('express').Router();
var Product = require('../models/product');

routes.get('/saveProduct', (req, res) => {
  var prod = new Product ({ 
    barcode: '211231231', 
    price: '500',
    name: 'Coca',
    stock: '10' 
  });
  prod.save(function(err) {
    if (err) throw err;

    console.log('Product saved successfully');
    res.status(200).json({ message: 'Product created!' });
    // res.json({ success: true });
  });
});
routes.get('/getAllProducts', (req ,res)=>{
   Product.find(function(err, products) {
            if (err)
                res.send(err);

            res.json(products);
        });
});

module.exports = routes;
