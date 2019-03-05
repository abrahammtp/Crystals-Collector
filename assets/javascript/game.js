$(document).ready(function () {
// Global variables
        // This variable is the number that we have to match to win the game
    var randomNumber = Math.floor(Math.random() * 100 + 20);
    console.log("random number " + randomNumber);
        // Variable for the red crystal, its value is assigned here too
    var redCrystal = Math.floor((Math.random() * 12) + 1);
    console.log("red crystal " + redCrystal);
        // Variable for the yellow crystal, its value is assigned here too
    var yellowCrystal = Math.floor((Math.random() * 12) + 1);
    console.log("yellow crystal " + yellowCrystal);
        // Variable for the green crystal, its value is assigned here too
    var greenCrystal = Math.floor((Math.random() * 12) + 1);
    console.log("green crystal " + greenCrystal);
        // Variable for the blue crystal, its value is assigned here too
    var blueCrystal = Math.floor((Math.random() * 12) + 1);
    console.log("blue crystal " + blueCrystal);
        // These are the variables that the user will see, they are going to update according to the progression of the game
    var score = 0;
    var wins = 1;
    var losses = 1;

        // Function "resetGame" is going to be called when the player wins or losses, that way the game can be played again
    function resetGame() {
        randomNumber = Math.floor(Math.random() * 100 + 20);
        redCrystal = Math.floor((Math.random() * 12) + 1);
        blueCrystal = Math.floor((Math.random() * 12) + 1);
        yellowCrystal = Math.floor((Math.random() * 12) + 1);
        greenCrystal = Math.floor((Math.random() * 12) + 1);
        $(".random-number").text(randomNumber);
        $(".total-score").text(score = 0);
    };
        // Function "lost" is going to be called when the player has lost, in order to update the losses on the web browser
    function lost() {
        $(".score-losses").text("Losses: " + losses++);
        alert("You have lost the game!");
    };
        // Function "won" is going to be called when the player has won, in order to update the wins on the web browser
    function won() {
        $(".score-wins").text("Wins: " + wins++);
        alert("You have won the game!");
    };
    
        // This is going to display the variable "randomNumber" on the web browser
    $(".random-number").text(randomNumber);
        // When we click on the class ".yellow-crystal", this will happen next. Variables "won", "lost" and "resetGame" are called to simplify the code
    $(".yellow-crystal").on("click", function () {
        score = score + yellowCrystal
        $(".total-score").text(score);
        if (randomNumber === score) {
            won();
            resetGame();
        }
        else if (score > randomNumber) {
            lost();
            resetGame();
        }
    });
        // When we click on the class ".red-crystal", this will happen next. Variables "won", "lost" and "resetGame" are called to simplify the code
    $(".red-crystal").on("click", function () {
        score = score + redCrystal
        $(".total-score").text(score);
        if (randomNumber === score) {
            won();
            resetGame();
        }
        else if (score > randomNumber) {
            lost();
            resetGame();
        }
    });
        // When we click on the class ".blue-crystal", this will happen next. Variables "won", "lost" and "resetGame" are called to simplify the code
    $(".blue-crystal").on("click", function () {
        score = score + blueCrystal
        $(".total-score").text(score);
        if (randomNumber === score) {
            won();
            resetGame();
        }
        else if (score > randomNumber) {
            lost();
            resetGame();
        }
    });
        // When we click on the class ".green-crystal", this will happen next. Variables "won", "lost" and "resetGame" are called to simplify the code
    $(".green-crystal").on("click", function () {
        score = score + greenCrystal
        $(".total-score").text(score);
        if (randomNumber === score) {
            won();
            resetGame();
        }
        else if (score > randomNumber) {
            lost();
            resetGame();
        }
    });
})