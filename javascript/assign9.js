var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-100;
//controls x and y this is our climb and descent + in and out
var dx = 2;
var dy = -2;
var ballRadius = 50;
var x2 = canvas.width/4;
var y2 = canvas.height-60;
var dx2 = 2;
var dy2 = -2;
var ballRadius2 = 25;
var color = "green";
var color2 = "black";
var x3 = canvas.width/8;
var y3 = canvas.height-90;
var dx3 = 2;
var dy3 = -2;
var ballRadius3 = 35;
var color3 = "red";
var clicked = 0;
var clickedTimes = false;
var clickedTimes2 = false;



//this function draws the ball at each frame
function drawBall(i, x, y, ballRadius){
	ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = i;
  ctx.fill();
  ctx.closePath();
}


//this function handles the logic of the movement
function draw(){
	ctx.clearRect(0,0, canvas.width, canvas.height);
  drawBall(color, x, y, ballRadius);
  //direction of the ball when it encounters a border, it will change direction
  //the dx and dy controls the inversion of the x-axis and the y-axis
  //as the border of the canvas collides with the ball the numbers 
  //that control x and y change polarity to keep the ball in the canvas
  if(y + dy < ballRadius || y + dy > canvas.height-ballRadius){
  	dy = -dy;
    color = 'rgb('+
             Math.floor(Math.random()*256)+','+
             Math.floor(Math.random()*256)+','+
             Math.floor(Math.random()*256)+')';
  }
  if(x +dx < ballRadius || x + dx > canvas.height-ballRadius){
  	dx = -dx;
    color = 'rgb('+
    				Math.floor(Math.random()*256)+','+
   					Math.floor(Math.random()*256)+','+
    				Math.floor(Math.random()*256)+')';
  }
  x += dx * 1.5;
  y += dy * 1.5;
  if (clickedTimes == true){
  	drawBall(color2, x2, y2, ballRadius2);
    if(y2 +dy2 < ballRadius2 || y2 +dy2 > canvas.height-ballRadius2){
      dy2 = -dy2;
      color2 = 'rgb('+
               Math.floor(Math.random()*256)+','+
               Math.floor(Math.random()*256)+','+
               Math.floor(Math.random()*256)+')';
    }
    if(x2 +dx2 < ballRadius2 || x2 + dx2 > canvas.height-ballRadius2){
      dx2 = -dx2;
      color2 = 'rgb('+
              Math.floor(Math.random()*256)+','+
              Math.floor(Math.random()*256)+','+
              Math.floor(Math.random()*256)+')';
    }
    x2 += dx2 + .1;
    y2 += dy2 + .2;
  } 
  if (clickedTimes2 == true){
  	drawBall(color3, x3, y3, ballRadius3);
    if(y3 +dy3 < ballRadius3 || y3 +dy3 > canvas.height-ballRadius3){
      dy3 = -dy3;
      color3 = 'rgb('+
               Math.floor(Math.random()*256)+','+
               Math.floor(Math.random()*256)+','+
               Math.floor(Math.random()*256)+')';
    }
    if(x3 +dx3 < ballRadius3 || x3 + dx3 > canvas.height-ballRadius3){
      dx3 = -dx3;
      color3 = 'rgb('+
              Math.floor(Math.random()*256)+','+
              Math.floor(Math.random()*256)+','+
              Math.floor(Math.random()*256)+')';
    }
    x3 += dx3 + .6;
    y3 += dy3 + .9;
  }
}

//each click has an affect on the balls
$('#myCanvas').click(function(){
  debugger;
  dx *= -1;
  dy *= -1;
  dx2 *= -1;
  dy2 *= -1;
  dx3 *= -1;
  dy3 *= -1;
  clickedTimes = true;
  ++clicked;
  if (clicked >= 2){
  	clickedTimes2 = true;
  }
  if (clicked >= 3){
    ballRadius2 = Math.floor(Math.random() * 75) + 1;
    ballRadius3 = Math.floor(Math.random() * 100) + 1;
  }
});
setInterval(draw, 10);

