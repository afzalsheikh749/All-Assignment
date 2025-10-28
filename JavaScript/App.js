console.log("Welcome");

// Assignment No # 8
// Q No # 01

// var inter = prompt("Enter a Number or letter :");

// var asiiCode = inter.charCodeAt(0);

// if( asiiCode >= 48 && asiiCode <= 57){
//    alert("Type Your Enter Number");

// }   else if(asiiCode >= 65  && asiiCode <= 90){
//       alert("Type Your Enter uppercase letter");

//  }  else if(asiiCode >= 97  && asiiCode <= 122) {
//       alert("Type Your Enter lowercase letter");

//   } else {
//     alert("Not a number or Letter");
// }

// Q No # 02

// var num1  = prompt("Type your first number");
// var num2  = prompt("Type your second number");

// if( num1 > num2){
//     console.log(num1 + " is larger than " + num2);

// } else if (num2 > num1){
//      console.log(num2 + " is larger than " + num1);

// }else{
//     console.log("Both number are equal");
// }

// Q No # 03

// var num = prompt("Type your Number")

// if(num > 0){
//     console.log("Number is Positive " + num);

// } else if(num < 0){
//     console.log("Number is Negative " + num);
// } else{
//     console.log("Number is Zero");
// }

// Q No # 04

// var check = prompt("Type vowel character");
// var check = check.charAt();

// if( check === "a" || check === "i" || check === "o" ||check === "u" ||check === "e" ) {
//     console.log("This is vowel word");

// } else{
//     console.log("This is not vowel word");
// }

// Q No # 05

// var password = "hussain123" ;
// var userpassword = prompt("Type  your password");{

//  if(password === userpassword){
//     alert("correct password welcome to inside !");

// } else{
//     alert("Incorrect password");

// }
// }

//  Q No # 06

// var greeting  ;
// var hour = 13 ;

// var check = prompt("check time")
 

// if(hour < 18 ){
//     greeting = "Good Day!" ;

// } else{
//     greeting = "Good evening !";

// }
//   console.log(greeting);

//   Q No # 07

// var time = +prompt("what time is happening");

// if( time >= "0000" && time < "1200" ){
//     console.log("Good Morning !");

// } else if( time >= "1200" && time < "1700" ){
//      console.log("Good afternoon !");

// } else if( time >= "1700" && time < "2100" ){
//      console.log("Good evening !");

// } else if( time >= "2100" && time < "2359" ){
//      console.log("Good night !");

// } else{
//     console.log("please enter correct time")
// }

// Assignment No # 09

// Q  no # 01
// var name = [] ;

// console.log(name);

// // // Q No # 02
// var studentNames = new Array();

// console.log(studentNames);

// // // Q No # 03

// var fruits = ["Apple" , "Mango" , "Orange" , "Banana" , "Strawberry"];
// console.log(fruits);

// // Q No # 04

//  var number = [ 1 ,  2 , 3 , 4 , 5] ;
//  console.log(number);

// //  Q No # 05

// var checkCondition = [true ,false ,true, false];
// console.log(checkCondition);

// // Q No # 06

// var subArray = ["Coconut" , 5 , true];
 
// console.log(subArray);

// Q No # 07

//     var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
 
//     for (var i = 0; i < qualifications.length; i++) {
//       document.write((i + 1) + ")" + qualifications[i] + "<br>");
//     }
// //  Q No # 08
 
//  var studentNames = ["Machael" , "Jhon" , "Tony" ];
//  var scores = ["320" , "230" ,"480" ];
 
//  var totalScore = 500 ;
//   var percentage = (scores[i] / totalScore * 100) ;

//  for(var i = 0; i < studentNames.length; i++){
     
//     document.write("Score of  " +  studentNames[i] + "  is " + scores[i]  + percentage + " percentage % " + "<br>" )
 
//  }

//  Q No # 09

// ****************A****************

// var color = ["Red" , "yellow" , "pink" , "blue" , "green" , "Orange", "Lightblue"];
// var user = prompt("which your fourite color");
// document.write(user + "<br.");

// ****************B****************

// var color = ["Red" , "yellow" , "pink" , "blue" , "green" , "Orange", "Lightblue"];
//  var userColor = prompt("which  color do you want to add at the end ?");
//   color.push(userColor);

//  document.write(color + userColor + "<br>"); "\n"
 

// ****************C****************

// var color = ["Red" , "yellow" , "pink" , "blue" , "green" , "Orange", "Lightblue"];
//  var userColor1 = prompt("which first color do you want to add at the start ?");
// var userColor2 = prompt("which second color do you want to add at the start ?");
//   color.unshift(userColor1,userColor2);

//  document.write(color + userColor1 +  ","  + userColor2 + "<br>"); 

// // ****************D****************

// var color = ["Red" , "yellow" , "pink" , "blue" , "green" , "Orange", "Lightblue"]

// var userdelete = prompt("Do you want to first color delete");

//  color.shift(userdelete);
//  document.write(color + userdelete);

 // ****************E****************


//  var colors = ["Red" , "yellow" , "pink" , "blue" , "green" , "Orange", "Lightblue"]

//     colors.pop(6);
//    document.write(colors);

    // ****************F****************

// var color = ["Red" , "yellow" , "pink" , "blue" , "green" , "Orange", "Lightblue"]

// var checkindex = +prompt("check the index number" +  "0 to" + color.length);
// var addColor = prompt   ("enter new color")
 
// color.splice(2,1,"white");

// document.write(color);

// ****************g****************


// var color = ["Red" , "yellow" , "pink" , "blue" , "green" , "Orange", "Lightblue"]

// var index = +prompt("Enter the index number");
// var  num = prompt("please count the delete item");
 
// color.splice(index,num);
// document.write(color );

// Q No # 10
// var num1 = [320 , 230 , 480 , 120];
// var num2 = [120, 230 , 320 ,480 ];

// document.write("Scores of students" + num1 + "<br>");
// document.write("Ordered Scores of students" + num2 + "<br>");

// Q No # 11

// var cities = ["karachi " , "Islamabad ", "Queta ", "Lahore ", "punjab "];

// document.write( "Cities list : " + "<br>" + cities + "<br>" );

// var city = ["karachi " , "Islamabad ", "Queta ", "Lahore ", "punjab "];
//  var copyCity = city.slice(1,3);

// document.write("Selected cities list" + "<br>" + copyCity);

// Q no # 12

// var arr = ["This", "is", "my", "cat"];

//  var singleString = arr.join(" ");

// document.write("<b>Array:</b> " + arr + "<br>");

//  document.write("<b>String:</b> " + singleString);

// Q NO # 13

// var device = ["Keyboard" , "mouse" , "Printer" , "Moniter" +"<br>"];
// document.write("<b> Device </b >" +"<Br>"+ device );

//  document.write("Out :" + "<br>" + "Keyboard" + "<br>");
//  document.write("Out :" + "<br>" + "Mouse" + "<br>");
//   document.write("Out :" + "<br>" + "Printer" + "<br>");
//   document.write("Out :" + "<br>" + "Moniter" + "<br>");

// // Q No # 14

// var device = ["Keyboard" , "mouse" , "Printer" , "Moniter" +"<br>"];
// document.write("<b> Device </b >" +"<Br>"+ device );

//  document.write("Out :" + "<br>" + "Moniter" + "<br>");
//  document.write("Out :" + "<br>" + "Printer" + "<br>");
//   document.write("Out :" + "<br>" + "Mouse" + "<br>");
//   document.write("Out :" + "<br>" + "Keyboard" + "<br>");

// Q No # 15

// var items = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

  
// document.write("<select>");

// for (var i = 0; i < items.length; i++) {
// document.write("<option>" + items[i] + "</option>");
// }
// document.write("</select>");
