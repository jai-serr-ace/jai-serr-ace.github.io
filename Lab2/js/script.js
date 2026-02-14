let randomNumber = Math.floor(Math.random() * 99) + 1;
let attemps = 0;
let wins = 0;
let losses = 0;
console.log(randomNumber);

function guess(){
let userGuess = document.querySelector("#userGuess").value;

if(attemps >= 7){
    document.querySelector("#result").textContent = "Game Over! You've used all 7 attempts." + " The correct number was " + randomNumber + ".";
    document.querySelector("#result").style.color = "red";
    losses++;
    document.querySelector("#guessBtn").disabled = true;
    document.querySelector("#losses").textContent = "Losses: " + losses;
    return;
}
document.querySelector("#wins").textContent = "Wins: " + wins;
if(checkGuess(userGuess, attemps)){
    resetGame();
}
attemps++;
document.querySelector("#userGuess").value = "";
}

// Event Listeners
document.querySelector("#guessBtn").addEventListener("click", guess);
document.querySelector("#resetBtn").addEventListener("click", resetGame);
document.querySelector("#wins").textContent = "Wins: " + wins;
document.querySelector("#losses").textContent = "Losses: " + losses;
function checkGuess(userGuess, attemps){

        document.querySelector("#guessNumLs").textContent += userGuess + " ";

        if(userGuess == randomNumber && attemps < 7){

            document.querySelector("#result").textContent = "Congratulations! You guessed the number!";
            document.querySelector("#result").style.color = "green";
            wins++;
            document.querySelector("#wins").textContent = "Wins: " + wins;
            return true;
        }
        else if(userGuess > 99 && attemps < 7){
            //guess is too high
            document.querySelector("#result").textContent = "Your guess is out of range!";
            document.querySelector("#result").style.color = "red";

        }
        else if(userGuess < randomNumber && attemps < 7){
            //guess is too low
            document.querySelector("#result").textContent = "Your guess is too low.";
            document.querySelector("#result").style.color = "red";

        }
        else if(userGuess > randomNumber && attemps < 7){
            //guess is too high
            document.querySelector("#result").textContent = "Your guess is too high.";
            document.querySelector("#result").style.color = "red";

        }

        //guess is wrong
    return false;
    

}

function guessRange(userGuess){
    if(userGuess < 1 && userGuess > 99){
        document.querySelector("#result").textContent = "Your guess is out of range!"
        document.querySelector("#result").style.color = "red";
    }
}

function resetGame(){
    attemps = 0;
    randomNumber = Math.floor(Math.random() * 99) + 1;
    console.log(randomNumber);
    document.querySelector("#guessBtn").disabled = false;
    document.querySelector("#guessNumLs").textContent = "Numbers guessed:";
    document.querySelector("#result").textContent = "";
    
}