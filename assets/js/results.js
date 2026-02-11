// Declaring global variables

const result = document.getElementById("result")
const motto = document.getElementById("house-motto");
const winnerName = localStorage.getItem("winner");
const houseBanners = document.getElementById("house-banner");


const mottos = {
    Gryffindor: "Their daring, nerve and chivalry set Gryffindors apart.",
    Hufflepuff:  "You might belong in Hufflepuff, where they are just and loyal. Those patient Hufflepuffs are true, and unafraid of toil.",
    Ravenclaw: "Wit beyond measure is man's greatest treasure.",
    Slytherin: "Slytherin will help you on your way to greatness." 
};


const houseImages = {
    Gryffindor: "/assets/images/gryffindor.jpg",
    Hufflepuff: "/assets/images/hufflepuff.jpg",
    Ravenclaw: "/assets/images/ravenclaw.jpg",
    Slytherin: "/assets/images/slytherin.jpg",
}

// Function to display results

function displayWinner(result, mottos) {

    if (result) {
        result.innerHTML = winnerName;
    }

    if (winnerName && mottos[winnerName]) {
        motto.innerHTML = mottos[winnerName];

        houseBanners.src = houseImages[winnerName];
        houseBanners.style.display = "block"; 
        houseBanners.alt = winnerName + " banner";

    } else {
        motto.innerHTML = "The Sorting Hat is undecided. Please take the quiz!";
        houseBanners.style.display = "none";
    }
}


displayWinner(result, mottos);