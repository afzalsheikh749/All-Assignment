console.log("Wellcome to Javascript ");


// var now = new Date ();

// console.log(now);

// var now = new Date ();

// var month = now.getMonth ();

// console.log(month);

// var now = new Date ();

// var day = now.getDay ();

// console.log(day);

// var now = new Date ();

// var date = now.getDate ();

// console.log(date);

// var monthNames = ["jan" , "feb" , "march" ,"Apr" ,"may" ,"jun" ,"jul" ,"aug" ,"sep" ,"October" ,"nov" ,"dec"];

// var now = new Date ();

// var month = now.getMonth ();

// var currentMonth = monthNames[month];

// console.log(currentMonth);

// var dayNames = [ "Sunday" ,"Monday" ,"Tuesday" ,"wednesday" ,"Thusrday" ,"Friday" ,"Satursday"];

// var now = new Date ();

// var day = now.getDay ();

// var currentDay = dayNames[day];

// console.log(currentDay);

// var now = new Date ();

// var year = now.getFullYear();

// console.log(year);


// var now = new Date ();

// var hour = now.getHours();

// console.log(hour);

// var userInput = prompt("Type your Birthdate. Ex:June 15, 2015");

// var today = new Date();

// var birthDate = new Date(userInput);

// var msToday = today.getTime();
// var msBirthDate = birthDate.getTime();

// var diff = msToday - msBirthDate;

// var days = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12)); 

// console.log(days);

// function popUp() {
//     alert("you  have a password please inter password !");
//     console.log("you  have a password please inter password ");
// }

// function foo() {
//     console.log("Aliyar Sheikh");}



// function Car() {

//   document.getElementsByTagName('img') [0].src = 'https://media.architecturaldigest.com/photos/66758a12539a07cf706eefaa/2:3/w_1500,h_2250,c_limit/EMBARGO-BUGATTI-World-Premiere-Presskit-Images-26.jpg';
// }

// function foo(){

//   document.getElementsByTagName('img') [0].src = 'https://img.freepik.com/free-psd/black-isolated-car_23-2151852894.jpg?semt=ais_hybrid&w=740&q=80' ;
// }

// function change (){
//   document.getElementsByTagName('img')[0].scr = 'https://media.architecturaldigest.com/photos/66758a12539a07cf706eefaa/2:3/w_1500,h_2250,c_limit/EMBARGO-BUGATTI-World-Premiere-Presskit-Images-26.jpg' ;

// }
//  function namefocus() {
// console.log("namefocus")

//  }
//  function emailfocus() {
//   console.log("emailfocus")
  
//  }
//  function passwordfocus() {

//   console.log("passwordfocus")
  
//  }
//   function nameblur() {
//     console.log("hum hat gay input se");
//   }


function signUp() {
  //  console.log("clicked")

    var firstName = document.getElementById('firstName').value
    var lastName = document.getElementById('lastName').value
    var email = document.getElementById('email').value
     var password = document.getElementById('password').value
     var confirmPassword = document.getElementById('confirmPassword').value
  
     console.log(firstName,   lastName,email,password,confirmPassword);
}


