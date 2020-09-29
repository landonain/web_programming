
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function generateNumbers(ctx) {
	let R = Math.floor(Math.random() * Math.floor(100));//parseInt(document.getElementById("R").value);
	let r = Math.floor(Math.random() * Math.floor(70))//parseInt(document.getElementById("r").value);
	let O = Math.floor(Math.random() * Math.floor(100));//parseInt(document.getElementById("O").value);
	let tRatio = Math.floor(Math.random() * (100 /10) +0.1);
  
  drawSpiro(R, r, O, tRatio, ctx);
}
function generateUserNumbers(ctx) {
	let R = parseInt(document.getElementById("RR").value);
	let r = parseInt(document.getElementById("r").value);
	let O = parseInt(document.getElementById("O").value);
	let tRatio = parseInt(document.getElementById("t").value);
  
  drawSpiro(R, r, O, tRatio, ctx);
}

function drawSpiro(R, r, O, tRatio,ctx) {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  //debugger;
  var cx = c.width /2;
  var cy = c.height /2;
  ctx.clearRect(0,0, c.width, c.height);
  ctx.beginPath();
  //ctx.moveTo(cx,cy);
 	for (var i = 0; i < 720; i+=0.01) {
    let t = tRatio * i;
    let x = cx + ((R+r)*Math.cos(t) - (r+O)* Math.cos(((R+r)/r)*t));
   	let y = cy - ((R+r)*Math.sin(t) - (r+O)* Math.sin(((R+r)/r)*t));
   //x = Math.floor(R+R*Math.cos(t));
    //y = Math.floor(R+R*Math.sin(t));
		ctx.lineTo(x,y);
    
  }
  ctx.stroke();
  ctx.strokeStyle = "black";
}



/*function drawCircle(ctx) {
  generateNumbers(ctx);
  //var color = "#" + Math.floor(Math.random()*16777215).toString(16);
  
  //Initial x and y 
	var x = R+R*Math.cos(0);
	var y = R+R*Math.sin(0);
	ctx.clearRect(0,0, c.width, c.height)
 ctx.strokeStyle = color;
  var cx = c.width /2;
  var cy = c.height /2;
  //ctx.moveTo(cx,cy);
 	for (var i = 0; i < 2*Math.PI; i+=0.01) {
    let t = tRatio * i;
    x = cx + (R+r)*Math.cos(t) - (r+O)* Math.cos(R+r)/r*t;
   	y = cy - (R+r)*Math.sin(t) - (r+O)* Math.sin(R+r)/r*t;
   //x = Math.floor(R+R*Math.cos(t));
    //y = Math.floor(R+R*Math.sin(t));
		ctx.lineTo(x,y);
    ctx.stroke();
  }
}  
  */
