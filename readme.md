by Caleb Choi and Sean Gurson 11/2/17
pre: 
npm install 
npm install nodemon
nodemon basic-server.js 

In our getRequest function in archive-helpers.js we learned that we cannot access the indexes of a forloop while doing an asychronous function call within the for loop. Instead, we need to declare a function that takes in as a parameter the element of the array we are iterating over, in this case the arugment is a URL, then we call the async function.  

Then we call our synchronous function we defined above which iterates through the for loop. 

We had to do npm install --save node-cron inside the folder that contains the script you want to run, in this case folder 'workers'

helpful links:

https://hackernoon.com/nodejs-javascript-cron-cron-jobs-cronjob-reactjs-scheduler-schedule-example-tutorial-25bcbe23bc6b
