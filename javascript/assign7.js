'use strict';

/*
Working Code below 
1.
fetch("./json.json")
  .then(function(resp){
    return resp.json();
  })
  .then(function(data){
    console.log(data);

2.
  var = myObj, myJSON;
  myObj = {name:"john", age: 31, city: "New York"};
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("testJSON", myJSON);

  text = localStorage.getItem("testJSON");
  obj = JSON.parse(text);
  document.getElementById("demo").innerHTML = obj.name;
  })

3.
  //main issue with this was the format of the json file and incorrect syntax
  //also trying to access the file was failing I believe to syntax
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
  if (this.readyState == 4 && this.status == 200){
    debugger;
    var myObj = JSON.parse(this.responseText);
    console.log(this.responseText);
    console.log(myObj.pros);
    document.getElementById("demo").innerHTML = myObj.pros;
  }
};
xmlhttp.open("GET", "json.json", true);
xmlhttp.send(); 

*/
fetch("http://legitwebstuff.com/javascript/json.json")
  .then(function(resp){
    return resp.json();
  })
  .then(function(data){
    document.getElementById("demo2").innerHTML = data.pros;
  });


var myObj, myJSON, text;
myObj = {name:"john", age: 31, city: "New York"};
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;



//main issue with this was the format of the json file and incorrect syntax
//also trying to access the file was failing I believe to syntax
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
if (this.readyState == 4 && this.status == 200){
  var myObj = JSON.parse(this.responseText);
  //how to check for correct data responses
  console.log(this.responseText);
  console.log(myObj.pros);
  document.getElementById("demo3").innerHTML = myObj.pros;
}
};
xmlhttp.open("GET", "http://legitwebstuff.com/javascript/json.json", true);
xmlhttp.send(); 


//passing the JSON file to html using parse and building the table is working now
//main issue was related to the apache server not reloading and the syntax of calling the array in JSON
var obj, dbParam, x = 0, myObj, txt = "";
obj = { table: "pros", limit: 9};
dbParam = JSON.stringify(obj);
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
  if (this.readyState == 4 && this.status == 200){
    //how to check for correct data responses
    console.log(this.responseText);
    //the this object is the result of the xmlhttp.open POST that calls the json file
    myObj = JSON.parse(this.responseText);
    console.log(myObj.pros);
    
    //start of the table
    txt += "<table border='1'>";
    //main issue was the way the data was being called from the JSON POST
    for (x in myObj.pros) {
      txt += "<tr><td>" + myObj.pros[x]+ "</td></tr>";
    }
    txt += "</table>";
    document.getElementById("demo4").innerHTML = txt;  
  }
}; 
xmlhttp.open("POST", "http://legitwebstuff.com/javascript/json.json", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send();








