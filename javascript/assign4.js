var a = 0;
var b = 0;
var Ky = 0;
var Kx = 0;
var t = 0;
var n = 0;
var x = new Array();
var y = new Array();
var v = new Array();

 
function calculateLis() {
  debugger;
	a = Number($('#a').val());
  b = Number($('#b').val());
  Kx = Number($('#Kx').val());
  Ky = Number($('#Ky').val());
  b = Math.sqrt(b);
  a = Math.sqrt(a);
  var i = 0;
  for (var t = 0; t <= 2*Math.PI; t+=0.001){
		x[i] = a * Math.cos(t*Kx);
    y[i] = b * Math.sin(t*Ky);
    v[i] = [x[i], y[i]];
    i++;
	}
	displayValues();
}


function displayValues(){
  var s = "";
  
  s =  'x<sup>2</sup>&frasl; ' + a  + ' + y<sup>2</sup>&frasl; ' + b + " = 1 <br>";
  s+= "x(t) = " + a +" cos(t*" + Kx + ") <br>";
  s+= "y(t) = " + b +" sin(t*" + Ky + ") <br>";
  s+= "Where t is 0 &#8805; t &#8805; 2&#960;"
  s+= "<br><br>";
  
  for (var i = 0; i < v.length; i++){
  	s += " X = " + x[i] + " Y  = " + y[i] + "<br>";
  }
	output.innerHTML = s;
}

function plotValues() {
	calculateLis();
  chart = new Highcharts.Chart({
  	chart: {
    	renderTo:'canvas',
      type: 'line',
      marginRight: 130,
      marginBottom: 25
    },
   title: {
   	text: 'Lissajous Curve Equation',
    x: -20//center
    
   },
   xAxis: {
   	title: {
    	text: 'X'
    }
   },
    yAxis: {
   	title: {
    	text: 'Y'
    }
   },
 plotOptions: {
 	scatter:{
  	marker: {
    		radius: 15,
        states: {
        	hover: {
          	enabled: true,
            lineColor: 'rgb(100, 100, 100)'
          } 
        }
    	},
      states: {
      	hover: {
        	marker: {
          	enabled: true
          }
        }
      }
  	}
  },
  series: [{
  	name: "Y values",
    color: 'rgba(223, 83, 83, .5)',
    data: v
  }]
})
}


