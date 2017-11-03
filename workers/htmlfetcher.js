// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.
var archive = require('../helpers/archive-helpers');
var cron = require('node-cron');
 
cron.schedule('*/1 * * * *', function(){
  console.log('running a task every minute');
  archive.readListOfUrls(archive.downloadUrls);
});

// worker reads the urls in list
// worker downloads urls

