// var showCards = document.getElementById("cards");

// showCards.onclick = function(){
//   var cardContainer = document.getElementById('container');
//   cardContainer.innerHTML = "";
//   displayCards();
// };

// function displayCards(){
//   var deck = newDeck();
//   var shuffledCards = shuffleCards(deck);

//   for(var i=0; i < deck.length; i++){
//     var card = document.createElement('div');
//     card.className = "card";
//     var cardContainer = document.getElementById('container');
//     cardContainer.appendChild(card);
//     card.style.backgroundImage = "url(images/" + shuffledCards[i].suit + "-" + shuffledCards[i].card + ".png" + ")";

//   }
// }

// // Creates a deck of 52 cards
// function newDeck(){

  var ranks = [
    {card:"a"},
    {card:"2"},
    {card:"3"},
    {card:"4"},
    {card:"5"},
    {card:"6"},
    {card:"7"},
    {card:"8"},
    {card:"9"},
    {card:"10"},
    {card:"j"},
    {card:"q"},
    {card:"k"}
  ];

  var suits = [ "d", "c", "s", "h"];
  var deck = []

  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < ranks.length; j++) {
      deck.push({
        rank:ranks[j],
        suit: suits[i]});
    }
    console.log(deck);
}
// Shuffles the Deck
function shuffleCards(cardDeck){
  var m = cardDeck.length;
  while (m) {
    var i = Math.floor(Math.random()* m--);
    var t = cardDeck[m];
    newDeck[m] = newDeck[i];
    newDeck[i] = t;
  }
  return cardDeck;
};
