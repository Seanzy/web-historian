var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  fs.readFile(exports.paths.list, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    
    callback(data.split('\n'));
    res.end();
    
  });   
};

exports.isUrlInList = function(url, callback) {
};

exports.addUrlToList = function(url, callback) {
};

exports.isUrlArchived = function(url, callback) {
};

exports.downloadUrls = function(urls) {
};
 
 /*
var fs = require('fs');
var path = require('path');
var _ = require('underscore');

exports.paths = {
  siteAssets: path.join(__dirname), '../web/public'),
  archivedSites: path.join(__dirname), '../archives/sites'), //archives folder is created when your application first runs and holds the files that the web and worker applications interact with.
  //Your web application will add more URLs to archives/sites.txt and your worker application will read the list whenever it runs.
  
  //archives/sites/: Your worker application will add more files to this directory, and your web application will serve these files.
  
  list: path.join(__dirname), '../archives/sites.txt')
};

exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path; // this goes through each paths object and exports that path/type to the other modules? 
  });
};


*/



