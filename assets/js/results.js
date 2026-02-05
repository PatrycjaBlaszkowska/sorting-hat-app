// Declaring global variables

const result = document.getElementById("result")
const motto = document.getElementById("house-motto");
const winnerName = localStorage.getItem("winner");

const mottos = {
    Gryffindor: "Their daring, nerve and chivalry set Gryffindors apart.",
    Hufflepuff:  "You might belong in Hufflepuff, where they are just and loyal. Those patient Hufflepuffs are true, and unafraid of toil.",
    Ravenclaw: "Wit beyond measure is man's greatest treasure.",
    Slytherin: "Slytherin will help you on your way to greatness." 
};


// Function to display results

function displayWinner(result, mottos) {

    if (result) {
        result.innerHTML = winnerName;
    }

    if (winnerName && mottos[winnerName]) {
        motto.innerHTML = mottos[winnerName];
    } else {
        motto.innerHTML = "The Sorting Hat is undecided. Please take the quiz!";
    }
}


displayWinner(result, mottos);