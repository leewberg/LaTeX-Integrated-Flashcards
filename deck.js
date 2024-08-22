class Deck{
    constructor(filename){
        this.cards = []
        this.name = filenameToRegular(filename);
        this.filename = filename;
        this.learnedCards = [];
        this.remainingCards = [];
        this.size = 0;

        let cardData = readJson(filename);
        let questions = Object.keys(cardData);
        let currentQ;
        let newCard;

        //create new cards and add them to the deck. sort them to remaining cards
        for (let i = 0; i < questions.length; i++){
            currentQ = questions[i];
            newCard = Card(currentQ, cardData[currentQ]);
            this.cards.push(newCard);
            this.size ++;
            this.sortToRemaining(newCard);
        }
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