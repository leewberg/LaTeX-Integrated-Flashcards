var remainigCards = document.getElementById("remainigCards");
var correctCards = document.getElementById("correctCards");
var flipButton = document.getElementById("flip");
var currentCard = document.getElementById("currentCard");
var progress = document.getElementById("progress");
var deckName = document.getElementById("nameDisplay");
var filepath = document.getElementById("deckChoosing");
var currentDeck;

function changeNumber(numberType, number){
    numberType.innerHTML = number;
}

function changeProgress(number){
    progress.innerHTML = number+ "/" //currentDeck.length or smth
}

/*functions needed/to be expanded upon:
    create card when filepath is selected
    flip card
    continue
    sort card into remaining or correct
*/