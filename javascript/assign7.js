
$('#deal').click(function (){
	dealCard(randomCard());
});

var cardsInDeck = [];
var numberOfCardsInDeck = 54;
var suit = 13;
var counter = 0;
var c = "";

function dealSuit(c){
  var i = 1;
  suit = 13; 
  while (suit > 0) {
    var img = document.createElement("img");
    img.src = "./images/PNG-cards-1.3/" + c + i + ".png";
    img.id = c + i;
    img.height = 150;
    img.width = 75;
    document.getElementById("myCardHolder").appendChild(img);
    $(img).draggable();
    removeCard(i);
    i++;
    suit--;
  }
}

function dealCard(i) {
	if (numberOfCardsInDeck == 0) return false;
    debugger;
    dealSuit("c");
    dealSuit("d");
    dealSuit("h");
    dealSuit("s");
}

function randomCard (){
	return Math.floor(Math.random() * numberOfCardsInDeck);
}
function removeCard(c){
	for (j=c; j <= numberOfCardsInDeck - 2; j++){
  	cardsInDeck[j] = cardsInDeck [j+1];
  }
  numberOfCardsInDeck--;
}




$("#droppable").droppable({
    drop: function(event, ui){
      $(ui.draggable).remove();
    }    
});


$( function() {
	$("#makeMedraggable").draggable({
    containment: '#content',
    cursor: 'move',
    snap: '#content'
  });
});
