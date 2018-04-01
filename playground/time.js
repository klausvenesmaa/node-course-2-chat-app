const moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(1, 'year').subtract(1, 'months');
// console.log(date.format('MMM Do YYYY'));

// 10:35 am

var challengeDate = moment();
console.log(challengeDate.format('h:mm a'));
