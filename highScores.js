var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// Event to clear scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
