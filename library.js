import Deck from "deck.js"
import { toFilename } from "./generalFunctions";

class Library{
    constructor(name, listOfDecks){
        this.name = name;
        this.decks = listOfDecks;
    }

    //methods
    openDeck(){};

    createNewDeck(deckname){
        this.decks.push(new Deck([ ], deckname, toFilename(deckname)))
    }
}