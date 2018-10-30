const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path');

const p = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = callback => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
       callback([]);
    } else {
      callback(JSON.parse(fileContent));
    }
  });
};

module.exports = class Products {
  constructor(t) {
    this.title = t;
  }
  save() {
    getProductsFromFile(product => {
      product.push(this);
      fs.writeFile(p, JSON.stringify(product), err => {
        console.log(err);
      });
    });
  }
  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
};
