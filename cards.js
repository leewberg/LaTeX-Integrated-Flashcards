class Card{
    //attributes
    constructor(q, a){
        this.question = q;
        this.answer = a;
        this.learned = false; //true if learned, false if not
        this.wayflipped = "a";
    }

    //methods
    flipCard() {
        if (this.wayflipped == "a"){
            this.wayflipped = "q";
        }
        else if (this.wayflipped == "q"){
            this.wayflipped = "a";
        }
    };

    changesatus(state){
        this.learned = state;
    };

    getSatus(){
        return this.learned;
    };

    display(){
        //work in progress
    };

    editCard(){
        //work in progress
    };

    saveCard(){
        //work in progress
    }
}