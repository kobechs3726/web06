window.onload = functin()

var lower = document.getElementById("lower");
var higher = document.getElementById("higher");
var score = document.getElementById("score")
var num = document.getElementById("num")
var end = document.getElementById("end")
var gameover = false;

function start( choice ){
    if(gameover === false){
        if(check(choice)) === true){
            score.innerHTML = parseInt(score.innerHTML)
        }else{
            end.innerHTML parseInt(score.innerHTML) + 1;
        }
    }
}