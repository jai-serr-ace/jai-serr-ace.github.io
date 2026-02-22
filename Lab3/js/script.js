// Event listeners
document.querySelector("button").addEventListener("click", gradeQuiz);

// Must call function so it can run
shuffleQ1Choices();
shuffleQ5Choices();

let timesTaken = parseInt(localStorage.getItem("timesTaken")) || 0;

function shuffleQ1Choices() {
    let q1Choices = ["font-color", "color", "text-color", "font-color"];
    q1Choices = _.shuffle(q1Choices);
    console.log(q1Choices);

    for ( let i of q1Choices) {
        let radioElement = document.createElement("input");
        radioElement.type = "radio";
        radioElement.name = "q1";
        radioElement.value = i;

        let labelElement = document.createElement("label");
        labelElement.textContent = i;
        
        labelElement.prepend(radioElement);
        
        console.log(labelElement);
    } 
    
}

function shuffleQ5Choices() {
    let q5Choices = ["Fire", "Ground", "Water", "Flying"];
    q5Choices = _.shuffle(q5Choices);
    console.log(q5Choices);

    let container = document.querySelector("#q5ChoicesDiv");

    for ( let i of q5Choices) {
        let checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = "q5";
        checkboxElement.value = i;

        let labelElement = document.createElement("label");
        labelElement.textContent = " " + i + "  ";
        
        labelElement.prepend(checkboxElement);
        container.append(labelElement);
        
        console.log(labelElement);
    } 
    
}

let final_score = 0;

function gradeQuiz() {
    let answerQ1 = "torchic";
    let userAnswer1 = document.querySelector("input[name=q1]:checked").value;

    alert("Grading quiz..." + userAnswer1);

    if (userAnswer1 == answerQ1) {
        // Display "Right!"
        document.querySelector("#q1Answer").textContent = "Right!";
        document.querySelector("#q1Answer").style.color = "green";
        final_score += 20;
        document.querySelector("img[name=correctNonCorrect]").src = "images/Right-Logo.png";
        document.querySelector("img[name=correctNonCorrect]").alt = "Right";
    }
    else {
        document.querySelector("#q1Answer").textContent = "Wrong!";
        document.querySelector("#q1Answer").style.color = "red";
        document.querySelector("img[name=correctNonCorrect]").src = "images/Wrong-Logo.png";
    }

    gradeQ2();
    gradeQ4();
    gradeQ3();
    gradeQ5();
    gradeQB();

    if (final_score >= 80) {
        document.querySelector("#finalMessage").textContent = "Great job!";
        document.querySelector("#finalMessage").style.color = "green";
    } else {
        document.querySelector("#finalMessage").textContent = "Better luck next time!";
        document.querySelector("#finalMessage").style.color = "red";
    }
    
    timesTaken += 1;
    localStorage.setItem("timesTaken", timesTaken);
    document.querySelector("#numberOfQuizTaken").textContent = "Number of times quiz taken: " + timesTaken;
    document.querySelector("#finalScore").textContent = "Final Score: " + final_score + "/100";
    final_score = 0;
}

function gradeQ2() {
    let choice = document.querySelector("#q2");
    if (choice.value.toLowerCase() === "kalos") {
        document.querySelector("#q2Answer").textContent = "Right!";
        document.querySelector("#q2Answer").style.color = "green";
        final_score += 20;
        alert("Grading quiz..." + choice.value);
        document.querySelector("img[name=q2Logo]").src = "images/Right-Logo.png";
        document.querySelector("img[name=q2Logo]").alt = "Right";
    } else {
        document.querySelector("#q2Answer").textContent = "Wrong!";
        document.querySelector("#q2Answer").style.color = "red";
        document.querySelector("img[name=q2Logo]").src = "images/Wrong-Logo.png";
        document.querySelector("img[name=q2Logo]").alt = "Wrong";
    }
}

function gradeQ3() {
    let answerq3 = document.getElementById("selectInput");
    let ans_element = answerq3.value;
    if(ans_element == "Flying"){
        document.querySelector("#q3Answer").textContent = "Right!";
        document.querySelector("#q3Answer").style.color = "green";
        final_score += 20;
        document.querySelector("img[name=q3Logo]").src = "images/Right-Logo.png";
        document.querySelector("img[name=q3Logo]").alt = "Right";
    }
    else {
        document.querySelector("#q3Answer").textContent = "Wrong!";
        document.querySelector("#q3Answer").style.color = "red";
        document.querySelector("img[name=q3Logo]").src = "images/Wrong-Logo.png";
        document.querySelector("img[name=q3Logo]").alt = "Wrong";
    }
}

function gradeQ4(){
    let answerq4 = document.querySelector("#q4").value;
    if(answerq4 == 2){
        document.querySelector("#q4Answer").textContent = "Right!";
        document.querySelector("#q4Answer").style.color = "green";
        final_score += 20;
        document.querySelector("img[name=q4Logo]").src = "images/Right-Logo.png";
        document.querySelector("img[name=q4Logo]").alt = "Right";
    } else {
        document.querySelector("#q4Answer").textContent = "Wrong!";
        document.querySelector("#q4Answer").style.color = "red";
        document.querySelector("img[name=q4Logo]").src = "images/Wrong-Logo.png";
        document.querySelector("img[name=q4Logo]").alt = "Wrong";
    }
}

function gradeQ5() {
    let choices = document.querySelectorAll("input[name=q5]:checked")
    let correct = ["Ground", "Fire"];
    let isCorrect = true;
    choices.forEach(choice => {
        if (!correct.includes(choice.value)) {
            isCorrect = false;
        }
    });
    if (isCorrect && choices.length === correct.length) {
        document.querySelector("#q5Answer").textContent = "Right!";
        document.querySelector("#q5Answer").style.color = "green";
        final_score += 20;
        document.querySelector("img[name=q5Logo]").src = "images/Right-Logo.png";
        document.querySelector("img[name=q5Logo]").alt = "Right";
    } else {
        document.querySelector("#q5Answer").textContent = "Wrong!";
        document.querySelector("#q5Answer").style.color = "red";
        document.querySelector("img[name=q5Logo]").src = "images/Wrong-Logo.png";
        document.querySelector("img[name=q5Logo]").alt = "Wrong";
    }
}

function gradeQB() {
    let bonusAnswer = document.querySelector("#bonusQ").value;
    if (bonusAnswer.toLowerCase() === "kyurem") {
        document.querySelector("#bonusQAnswer").textContent = "Right!";
        document.querySelector("#bonusQAnswer").style.color = "green";
        final_score += 20;
        document.querySelector("img[name=bonusLogo]").src = "images/Right-Logo.png";
        document.querySelector("img[name=bonusLogo]").alt = "Right";
    } else {
        document.querySelector("#bonusQAnswer").textContent = "Wrong!";
        document.querySelector("#bonusQAnswer").style.color = "red";
        document.querySelector("img[name=bonusLogo]").src = "images/Wrong-Logo.png";
        document.querySelector("img[name=bonusLogo]").alt = "Wrong";
    }
}

document.querySelector("#numberOfQuizTaken").textContent = "Number of times quiz taken: " + timesTaken;