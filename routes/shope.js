const express = require('express');
const path = require('path');

const routes = express.Router();
const rootDir = require('../utility/path');
routes.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shope.html'));
});

module.exports = routes;
