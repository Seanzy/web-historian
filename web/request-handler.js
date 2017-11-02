var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');
//archive-helpers contains all the functions we need

exports.handleRequest = function (req, res) {
  
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  if (req.method === 'GET') {
    if (req.url === '/') {
      helpers.serveAssets(res, path.join(archive.paths.siteAssets, '/index.html'));
    } else if (req.url === '/styles.css') {
      helpers.serveAssets(res, path.join(archive.paths.siteAssets, '/styles.css'));
    } // this else if allows the refresh to occur faster by serving styles.css (allowing it to load). 
  }

  //res.end(archive.paths.list);
  
};

