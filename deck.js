class Deck{
    constructor(listOfCards, name, filename){
        this.cards = listOfCards;
        this.name = name;
        this.filename = filename;
        this.learnedCards = [];
        this.remainingCards = [];
        this.size = 0;
    }

    //methods
    schuffle(){}

    sortToLearned(card){
        card.changesatus(true);
        this.learnedCards.push(card);
    }
    sortToRemaining(card){
        card.changesatus(false);
        this.remainingCards.push(card);
    }

    editDeck(){};

    saveDeck(){};

    addBlankCard(){
        //as we should in theory only need to update the json-file when we save the deck, we don't need to do that here
        this.cards.push(new Card(" ", " "));
    }
}