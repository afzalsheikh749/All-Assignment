console.log("Connected !!!");

var display  = document.getElementById("display");
var  start   = document.getElementById("start");
var stop     = document.getElementById("stop");
var reset    = document.getElementById("reset");


var hours = 0 ;
var minutes = 0 ;
var seconds = 0 ;

var timer = null ;

function showTime(){
    var H = hours;
    var M = minutes;
    var S = seconds;

    if(H < 10){
        H = "0" + H ;
    }

    if(M < 10) {
        M = "0" + M;
    }

     if(S < 10) {
        S = "0" + S;
    }

    display.textContent = H  + ":" + M + ":" + S ;
}

function startTimer(){

    if(timer !==   null ){
        return;

    }

       timer = setInterval(function(){
        seconds++;

        if(seconds === 60){
            seconds = 0;
            minutes++
        }
        if(minutes === 60){
            minutes = 0;
            hours++
        }

        showTime();
    } , 1000)
}

function stopTimer(){

    clearInterval(timer);
    timer = null ;

}

function resetTimer(){

    clearInterval(timer);
    timer = null;

    hours = 0;
    minutes = 0;
    seconds = 0;
    showTime();

}

