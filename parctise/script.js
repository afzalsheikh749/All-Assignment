console.log("Wellcome to Javascript ");


var now = new Date ();

console.log(now);

var now = new Date ();

var month = now.getMonth ();

console.log(month);

var now = new Date ();

var day = now.getDay ();

console.log(day);

var now = new Date ();

var date = now.getDate ();

console.log(date);

var monthNames = ["jan" , "feb" , "march" ,"Apr" ,"may" ,"jun" ,"jul" ,"aug" ,"sep" ,"October" ,"nov" ,"dec"];

var now = new Date ();

var month = now.getMonth ();

var currentMonth = monthNames[month];

console.log(currentMonth);

var dayNames = [ "Sunday" ,"Monday" ,"Tuesday" ,"wednesday" ,"Thusrday" ,"Friday" ,"Satursday"];

var now = new Date ();

var day = now.getDay ();

var currentDay = dayNames[day];

console.log(currentDay);

var now = new Date ();

var year = now.getFullYear();

console.log(year);


var now = new Date ();

var hour = now.getHours();

console.log(hour);

var userInput = prompt("Type your Birthdate. Ex:June 15, 2015");

var today = new Date();

var birthDate = new Date(userInput);

var msToday = today.getTime();
var msBirthDate = birthDate.getTime();

var diff = msToday - msBirthDate;

var days = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12)); 

console.log(days);






