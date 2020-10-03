"use strict";



fetch("./json.json")
  .then(function(resp){
    return resp.json();
  })
  .then(function(data){
    console.log(data);
  })




var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
  if (this.readyState == 4 && this.status == 200){
    var myObj = JSON.parse(this.reponseText);
    document.getElementById("demo").innerHTML = myObj.name;
  }
};
xmlhttp.open("POST", "json.json", true);
xmlhttp.send(); 