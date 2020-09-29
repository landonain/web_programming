var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
  if (this.readyState == 4 && this.status == 200){
    var myObj = JSON.parse(this.reponseText);
    document.getElementById("demo").innerHTML = myObj.name;
  }
};
xmlhttp.open("GET", "json.txt", true);
xmlhttp.send();