
var timer = 60;
var score = 0;
function Timer() {
    var interVal = setInterval(function() {
        if(timer>0){
            timer--;
             document.querySelector("#tmr").textContent = timer;
        } else{
            clearInterval(interVal);
        }
    }, 1000);
 
}

Timer();