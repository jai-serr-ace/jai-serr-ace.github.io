document.querySelector("#new-card").addEventListener("click", hit);
document.querySelector("#start-game").addEventListener("click", startGame);
document.querySelector("#stay").addEventListener("click", stay);

let currentScore = 0;
let gameActive = false;
let wins = 0;
let losses = 0;

class Card {
    constructor(ranked, value, suit){
        this.ranked = ranked;
        this.value = value;
        this.suit = suit;
    }
}

let deck = [];
let playerHand = [];
createDeck();
shuffleDeck(deck);
displayBackgroundImage();

function hit(){
    if(!gameActive){
        document.querySelector("#display-result").textContent = "Click Start Game to begin a new round.";
        return;
    }

    let newCard = deck.pop();
    playerHand.push(newCard);
    displayScore(playerHand);
    displayCards(playerHand);
    updateScore();
}

function createDeck(){
    for (const suit of ["♠", "♥", "♦", "♣"]) {
        let counter = 1;
        for (const ranked of ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]) {
            let value = 0;
            if(ranked == "A"){
                value = 11;
            }
            else if(ranked == "J" || ranked == "Q" || ranked == "K"){
                console.log("Ranked is J, Q, or K");
                value = 10;
            }
            if(ranked == counter){
                console.log("Ranked is equal to value");
                value = parseInt(ranked, 10);
            }
            let newCard = new Card(ranked, value, suit);
            deck.push(newCard);
            counter++;
        }
    }
}

function shuffleDeck(deck){
    for(let i = deck.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function displayScore(hand){
    currentScore = 0;
    for (const card of hand) {
        currentScore += card.value;
        console.log(card.ranked + " " + card.value + " " + card.suit);
    }
    console.log(currentScore);
    document.querySelector("#display-score").textContent = "Score: " + currentScore;
}

function displayCards(hand){
    let cards = "";
    for (const card of hand) {
        cards += card.ranked + " " + card.suit + " ";
    }
    console.log(cards);
    document.querySelector("#display-cards").textContent = cards;
    return cards;
}

function startGame(){
    console.log("Starting a new game...");
    resetGame();
    gameActive = true;
    document.querySelector("#display-result").textContent = "";
    playerHand = [deck.pop(), deck.pop()];
    displayCards(playerHand);
    displayScore(playerHand);
    updateScore();
}

function resetGame(){
    currentScore = 0;
    playerHand = [];
    deck = [];
    createDeck();
    shuffleDeck(deck);
}

function stay(){
    if(!gameActive){
        document.querySelector("#display-result").textContent = "Click Start Game to begin a new round.";
        return;
    }

    gameActive = false;
    document.querySelector("#display-result").textContent = "You chose to stay at score " + currentScore + ". Press Start Game for a new round.";
}

function updateScore(){
    console.log("Updating score...");
    displayCards(playerHand);
    if(currentScore > 21){
        console.log("Current score is greater than 21");
        if(playerHand.some(card => card.ranked === "A")){
            currentScore -= 10;
            document.querySelector("#display-score").textContent = "Score: " + currentScore;
            if(currentScore > 21){
                displayCards(playerHand);
                console.log("Bust!");
                document.querySelector("#display-result").textContent = "Bust! Press Start Game for a new round.";
                document.querySelector("#display-score").textContent = "Final Score: " + currentScore;
                gameActive = false;
                document.querySelector("#losses").textContent = "Losses: " + ++losses;
                return;
            }
            else if(currentScore === 21){
                displayScore(playerHand);
                console.log("Blackjack!");
                document.querySelector("#display-result").textContent = "Blackjack! Press Start Game for a new round.";
                document.querySelector("#display-score").textContent = "Final Score: " + currentScore;
                gameActive = false;
                document.querySelector("#wins").textContent = "Wins: " + ++wins;
                return;
            }
        }
        else{
            displayCards(playerHand);
            console.log("Bust!");
            document.querySelector("#display-score").textContent = "Final Score: " + currentScore;
            document.querySelector("#display-result").textContent = "Bust! Press Start Game for a new round.";
            gameActive = false;
            document.querySelector("#losses").textContent = "Losses: " + ++losses;
        }
    }
    else if(currentScore === 21){
        displayScore(playerHand);
        console.log("Blackjack!");
        document.querySelector("#display-result").textContent = "Blackjack! Press Start Game for a new round.";
        document.querySelector("#display-score").textContent = "Final Score: " + currentScore;
        gameActive = false;
        document.querySelector("#wins").textContent = "Wins: " + ++wins;   
    }
}

function displayBackgroundImage(){
    document.body.style.backgroundImage = "url(https://static.vecteezy.com/system/resources/previews/016/122/863/non_2x/poker-and-casino-playing-card-background-with-royal-flush-on-black-vector.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
}


    

