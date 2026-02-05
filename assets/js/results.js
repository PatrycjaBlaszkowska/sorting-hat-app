const result = document.getElementById("result")

function displayWinner(result) {
    if (result) {
        const winnerName = localStorage.getItem("winner")
        result.innerHTML = winnerName;
    }
}

displayWinner(result);