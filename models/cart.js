const path = require('path');
const fs = require('fs');

const pathToSave = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
  static addProduct(productId, productPrice) {
    let cart = { product: [], totalPric: 0 }; // if there is no cart , creat a object inside the cart

    fs.readFile(pathToSave, (err, fileContent) => {
      if (!err) {
        cart = JSON.parse(fileContent); // if there is a cart read all previous cart.json data and put it in cart
      }
    });

    const existingProductIndex = cart.product.findIndex(
      prod => prod.id === productId
    ); // find the index of existing product in cart in the array of product
    const existingProduct= cart.product[existingProductIndex]

    let updatedProduct;

    if(existingProduct){
        updatedProduct= {...existingProduct};
        updatedProduct.qty= updatedProduct.qty +1
        cart.product= [...cart.product];
        cart.product[existingProductIndex]= updatedProduct

    } else{
        updatedProduct= {id:id, qty:1}
        cart.product=[...cart.product, updatedProduct]

    }
    cart.totalPric= cart.totalPric + productPrice
  }
};
