var express = require('express');
var router = express.Router();
const Product = require('../models/product'); 



router.get('/', (req, res, next) => {
  Product.find()
  .then(products => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(products); 
        
    })
    .catch(err => next(err));
})

.post('/', (req, res, next) => {
  Product.create(req.body) 
  .then(prod => {
      console.log('Campsite Created ',prod);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(prod);
      
  })
  .catch(err => next(err));
})
  
.delete('/', (req, res, next) => {
  Product.deleteMany()
  .then(response => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(response);
      
  })
  .catch(err => next(err));
});


 
module.exports = router;


