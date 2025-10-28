console.log("Wellcome");


// Chapter # 10 Array & Loop

// Q No # 01

// 

var emptyArray = [
    [],
    [],
    []
    
];

// Q No # 02

// var matrix =[
//     [0 , 1 ,  2 , 3] ,
//     [1 , 0 ,  1 , 2] , 
//     [2 , 1 ,  0 , 1]

// ];

// for(var i = 0; i < matrix.length; i++){

//    for(var j = 0; j < matrix[i].length; j++){

//     document.write(matrix[i][j] + " " );

// }
//     document.write("<br>");
// }

// Q No # 03

// for(var i = 1; i <= 10; i++ ){
//     document.write( i + "<br>");
// }

// Q No # 04

// var user = +prompt("Type your Table");
// var length = +prompt("Type your length");

// document.write("<h3>" + "Table of " + user +  "</h3>"    + "<br>"    )  ;
// for(var i = 1; i <= length; i++){
//     document.write(  user + "  x  "+ " " +   i +  " "  +"  =  " + (user * i) + "<br>");
// }

// Q  No # 05

// var fruits = ["Apple" , "Mango" , "Banana" , "Orange" , "Strawberry" ];

// for(var i = 0 ; i < fruits.length; i++){
//      document.write(fruits[i] + "<br>" );
  
  
// }


// var fruits = ["Apple" , "Mango" , "Banana" , "Orange" , "Strawberry" ];

//   for(var j = 0; j < fruits.length; j++){
   
//     document.write("Element at index " + j  + fruits[ j ] + "<br>");
//    }
   

// Q No # 06


// var count =[" 1 " ," 2 ",  " 3 " , " 4 " , " 5 " ,  " 6 " , " 7 " , " 8 " ," 9 " , " 10 " , " 11 " , " 12 " , " 13 " ," 14 ", " 15 "];

//  document.write("Counting  :  " + "<br>" + count  + "<br>");

//  var counts = ["10 " , " 9 " , " 8 " , " 7 " , " 6 " , " 5 ", " 4 ", " 3 " , " 2 " , " 1 "];
//   document.write("Reverse Counting  :   "+"<br>" + counts + "<br>");

//   var event = [" 0 " , " 2 " , " 4 "  , " 6 "  , " 8 "  , " 10 "  , " 12 " , " 14 " , " 16 " , " 18 " , " 20 " ];
//   var odd  = [ " 1 " , " 3 " , " 5 ", " 7 " , " 9 " , " 11 " , " 13 " , " 15 " , " 17 " , " 19 " ];
//   var sereies = [" 2k "  , " 4k " , " 6k " ,  " 8k " , " 10k " , " 12k " , " 14k " , " 16k " ," 18k ", " 20k"]; 

//   document.write("Event  :  " +"<br>" + event + " <br> " + "Odd  :  "+"<br>" + odd + "<br>" + "Sereies : "+"<br>" + sereies);

// Q No # 07

// var bakery = ["Cookie" , "Apple Pie" , "Cake " , "Chips" , "Patties"];
// var customor = prompt("Wellcome to Bakery , What do yo want to order sir / Mam's ?");

// var found = false;

// for(var i = 0 ; i < bakery.length; i++){

// if(bakery[i] === customor){
//     found = true;
//     break;
// }  

// }
//  if(found){
//     document.write(customor + "  is available at index 2 in our bakery ");
// }else{
//     document.write("We are sorry  " + customor + " is not available in our bakery");
// }

// Q  No # 08

// var arr = [24, 53, 78, 91, 12];

// var largest = arr[0];

// for(var i = 0;i < arr.length; i++){

//     if(arr[i] > largest){
//         largest = arr[i];
        
//     }
// }
// document.write("<h4> Array Items : " + "24 , 53, 78, 91, 12" + "<br>");

// document.write( "The Largest Number is "    +largest);

// // Q No # 09

// var arr = [24, 53, 78, 91, 12];

// var smallest = arr[0];

// for(var i = 0;i < arr.length; i++){

//     if(arr[i] < smallest){
//         smallest = arr[i];
        
//     }
// }

//  document.write("<h4> Array Items : " + "24 , 53, 78, 91, 12" + "<br>");
//  document.write( "The Smallest Number is "    + smallest);


// Q No # 10


// for(var i = 1; i <= 100; i++){

//     if(i % 5 === 0){
    
//     document.write( " " + i  + " " )
// }
// }

