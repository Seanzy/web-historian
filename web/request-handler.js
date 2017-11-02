var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');
var querystring = require('querystring');
//archive-helpers contains all the functions we need

exports.handleRequest = function (req, res) {
  
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  if (req.method === 'GET') {
    if (req.url === '/') {
      helpers.serveAssets(res, path.join(archive.paths.siteAssets, '/index.html'));
    } else if (req.url === '/styles.css') {
      helpers.serveAssets(res, path.join(archive.paths.siteAssets, '/styles.css'));
    // this else if allows the refresh to occur faster by serving styles.css (allowing it to load).
    } else { 
      //if there is a file where name === url
      archive.isUrlArchived(path.basename(req.url), function(bool) {
        if (bool) {
          helpers.serveAssets(res, path.join(archive.paths.archivedSites, req.url));
          //else return 404 status code and appropriate headers
        } else {
          res.writeHead(404, helpers.headers);
          res.end();
        }
      });
    } 
  } else if (req.method === 'POST') {
    var body = '';
    req.on('data', function(chunk) {
      body += chunk;
    });
    req.on('end', function() {
      archive.addUrlToList(querystring.parse(body).url, function() {
        res.writeHead(302, helpers.headers);
        helpers.serveAssets(res, path.join(archive.paths.siteAssets, '/loading.html'));
      });
    });
    
  }

  //res.end(archive.paths.list);
  
};

