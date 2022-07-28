var canvas = document.getElementById("canvasId");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#00000";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#59BD56";
//ctx.fillRect(0,20,10,10);
//ctx.fillRect(0,20,10,10);
var y = 250;
var x = 0;
//var i = 250;
var goingRight = true;
var goingLeft = false;
var goingUp = false;
var goingDown = false;
var start = false;
var cordinate = [];
var bodyTouch = false; 
var mixBut = document.getElementById("mixBut");

mixBut.addEventListener("click", Start);


var time;
function Start(){
    outOfbounds();
    if(outOfbounds() == false && bodyTouch == false){
    start = true;
    }
    console.log("Started");
    mixBut.removeEventListener("click", Start);
    mixBut.addEventListener("click", Stop);
    mixBut.value = "Stop";

    
    

    if(goingRight == true && start == true){
    time = setInterval(snakeGoingRight,1000/5);
    }
   else  if(goingLeft == true && start == true){
        time = setInterval(snakeGoingLeft,1000/5);
        }
        else  if(goingUp == true && start == true){
            time = setInterval(snakeGoingUp,1000/5);
            }
            else  if(goingDown == true && start == true){
                time = setInterval(snakeGoingDown,1000/5);
                }
}


function Stop(){
    start = false;
    console.log("Stopped");
    clearInterval(time);


    mixBut.removeEventListener("click", Stop);
    mixBut.addEventListener("click", Start);
    mixBut.value = "Start";
   
}

function outOfbounds(){
    if((x < 0 || x > 750) || (y < 0 || y > 500)){
        goingRight = false;
         goingLeft = false;
            goingUp = false;
            goingDown = false;
          start = false;
          return true;
        }
return false;
}
function storeCoordinate(xVal,yVal,array){
    array.push({x: xVal, y: yVal});
}



//ctx.fillRect(0,20,10,10);

function snakeGoingRight (){
    ctx.fillRect(x,y,10,10);
x += 10;
outOfbounds();
for (var i = 0; i < cordinate.length; i++) {
    if( cordinate[i].x == x && cordinate[i].y == y){
bodyTouch = true;
clearInterval(time);
    }
    
}
if(start == true){
storeCoordinate(x,y,cordinate);
}
}
function snakeGoingLeft (){
    ctx.fillRect(x,y,10,10);
x-= 10;
outOfbounds();
for (var i = 0; i < cordinate.length; i++) {
    if( cordinate[i].x == x && cordinate[i].y == y){
        bodyTouch = true;
clearInterval(time);
   }
    
}
if(start == true){
storeCoordinate(x,y,cordinate);
}
}
function snakeGoingUp (){
    ctx.fillRect(x,y,10,10);
y -= 10;
outOfbounds();
for (var i = 0; i < cordinate.length; i++) {
    if( cordinate[i].x == x && cordinate[i].y == y){
        bodyTouch = true;
clearInterval(time);
    }
    
}
if (start == true)
{storeCoordinate(x,y,cordinate)}

}
function snakeGoingDown (){
    ctx.fillRect(x,y,10,10);
y += 10;
outOfbounds();
for (var i = 0; i < cordinate.length; i++) {
    if( cordinate[i].x == x && cordinate[i].y == y){
        bodyTouch = true;
clearInterval(time);
   }
    
}
if(start == true){
storeCoordinate(x,y,cordinate);
}
}

function moveLeft(){

if(goingRight == true && start == true && bodyTouch == false){
    clearInterval(time);
time = setInterval(snakeGoingUp,1000/5);
goingRight = false;
goingUp = true;
}
else if (goingUp == true && start == true && bodyTouch == false){
    clearInterval(time);
    time = setInterval(snakeGoingLeft,1000/5);
    goingUp = false;
    goingLeft = true;
}
else if (goingLeft == true && start == true && bodyTouch == false){
    clearInterval(time);
    time = setInterval(snakeGoingDown,1000/5);
    goingLeft = false;
    goingDown = true;
}
else if (goingDown == true && start == true && bodyTouch == false){
    clearInterval(time);
    time = setInterval(snakeGoingLeft,1000/5);
    goingDown = false;
    goingLeft = true;
}

}
function moveRight(){
    if(goingRight == true && start == true && bodyTouch == false){
        clearInterval(time);
    time = setInterval(snakeGoingDown,1000/5);
    goingRight = false;
    goingDown = true;
    }
    else if (goingUp == true && start == true && bodyTouch == false){
        clearInterval(time);
        time = setInterval(snakeGoingRight,1000/5);
        goingUp = false;
        goingRight = true;
    }
    else if (goingLeft == true && start == true && bodyTouch == false){
        clearInterval(time);
        time = setInterval(snakeGoingUp,1000/5);
        goingLeft = false;
        goingUp = true;
    }
    else if (goingDown == true && start == true && bodyTouch == false){
        clearInterval(time);
        time = setInterval(snakeGoingRight,1000/5);
        goingDown = false;
        goingRight = true;
    }
    
    }