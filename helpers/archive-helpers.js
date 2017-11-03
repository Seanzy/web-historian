var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var https = require('https');

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

// reads the urls from sites.txt and calls cb, passing in the array of urls
exports.readListOfUrls = function(callback) {
  fs.readFile(exports.paths.list, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    var arr = data.split('\n');
    
    callback(arr.slice(0, -1));
    
  });   
};

//checks if the url provided is in the array of urls
exports.isUrlInList = function(url, callback) {
  fs.readFile(exports.paths.list, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    
    var urlArray = data.split('\n');
    var found = urlArray.indexOf(url) !== -1;
    
    // console.log(found);
    callback(found); 
  });
};

//adds the url sites.txt if it's not in there
exports.addUrlToList = function(url, callback) {
  //read the urls in file 
  fs.appendFile(exports.paths.list, url + '\n', (err) => {
    if (err) {
      throw err;
    }
    callback();
  });
};

exports.isUrlArchived = function(url, callback) {
  // sync code that will be executed
  fs.readdir(exports.paths.archivedSites, 'utf8', (err, files) => {
    // can assum
      // will be invoked right after async call done
      // will have either err/or data from async call
    if (err) {
      throw err;
    }
    
    var bool = files.includes(url); 
    callback(bool);
    
  });
  // cubby: when readdir is done, invoke anon callback
};

//takes the URLs from the sites.txt and creates files with those urls as names in sites folder. 
exports.downloadUrls = function(urls) {
  console.log(urls);
  var getRequest = function(url) {
    fs.open(`${exports.paths.archivedSites}/${url}`, 'w', function (err, sites) {
      if (err) {
        throw err;
      }
      
      //console.log(url);
      https.get(`https://${url}`, function(res) {
        var body = '';
        res.on('data', (chunk) => {
          body += chunk;
        });
        res.on('end', function() {
          fs.write(sites, body, 'utf8');
        });
      });
    });  
  };
  
  for (var i = 0; i < urls.length; i++) {
    getRequest(urls[i]);
  }
  
  //giver me urls[0]
  //pass urls[0] to an asynch function (which can take inputs)
  // let that execute
  
};


 
 /*
 
 
 none of these helper functions needed res.end() because we want to end the request after all of our request actions have taken place
 
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



