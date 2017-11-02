var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');


exports.headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};

exports.serveAssets = function(res, asset, callback) {
  // console.log(path.join(archive.paths.siteAssets, asset));
  fs.readFile(asset, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    if (res.head !== undefined) {
      res.writeHead(200, exports.headers);
    }
    // console.log(exports.headers);
    res.end(data);
  });
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)
};



// As you progress, keep thinking about what helper functions you can put here!
// One goal of this sprint is having you think about modularity; that is, breaking things up into nice manageable chunks. It also means making your functions a bit more abstract so they can work with a wide array of inputs. Writing easily maintainable and abstracted code is a critical skill in software engineering. To that end, a 'helper' file has been provided. Use it as much as possible for your abstracted helper functions so that your request handler file stays clean, readable and manageable.
// 
