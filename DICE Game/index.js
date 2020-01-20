
var m = Math.floor((Math.random()*6)+1);
var n = Math.floor((Math.random()*6)+1);

function whoWins(){
    if (m == n){
        document.querySelector("h1").innerHTML = "Draw";
        document.querySelector("body").style.background = "linear-gradient(to right, #beebe9, #beebe9)";
    }
    else if (m > n){
        document.querySelector("h1").innerHTML = "Left dice wins!";
        document.querySelector("body").style.background = "linear-gradient(to right, #94d3ac, bisque)";
    }
    else if (m < n){
        document.querySelector("h1").innerHTML = "Right dice wins!";
        document.querySelector("body").style.background = "linear-gradient(to right, bisque, #94d3ac)";
    }
}

function dice1(){

    if (m == 1 ){
        document.querySelector(".dice01").src="images/dice1.png";
    }
    else if (m == 2){
        document.querySelector(".dice01").src="images/dice2.png";
    }
    else if (m == 3){
        document.querySelector(".dice01").src="images/dice3.png";
    }
    else if (m == 4){
        document.querySelector(".dice01").src="images/dice4.png";
    }
    else if (m == 5){
        document.querySelector(".dice01").src="images/dice5.png";
    }
    else if (m == 6){
        document.querySelector(".dice01").src="images/dice6.png";
    }
}

function dice2(){  

    if (n == 1 ){
        document.querySelector(".dice02").src="images/dice1.png";
    }
    else if (n == 2){
        document.querySelector(".dice02").src="images/dice2.png";
    }
    else if (n == 3){
         document.querySelector(".dice02").src="images/dice3.png";
    }
    else if (n == 4){
        document.querySelector(".dice02").src="images/dice4.png";
    }
    else if (n == 5){
        document.querySelector(".dice02").src="images/dice5.png";
    }
    else if (n == 6){
        document.querySelector(".dice02").src="images/dice6.png";
    }
}

    function refreshPage(){
        window.location.reload();
    } 

    function hideMe() {
        document.getElementsByClassName('btn')[0].style.visibility = 'hidden';
        document.getElementsByClassName('btn2')[0].style.visibility = 'visible';
    }