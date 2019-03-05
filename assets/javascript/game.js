$(document).ready(function () {
    // Global variables
    var randomNumber = Math.floor(Math.random() * 100 + 20);
    console.log("random number " + randomNumber);

    var redCrystal = Math.floor((Math.random() * 12) + 1);
    console.log("red crystal " + redCrystal);

    var yellowCrystal = Math.floor((Math.random() * 12) + 1);
    console.log("yellow crystal " + yellowCrystal);

    var greenCrystal = Math.floor((Math.random() * 12) + 1);
    console.log("green crystal " + greenCrystal);

    var blueCrystal = Math.floor((Math.random() * 12) + 1);
    console.log("blue crystal " + blueCrystal);

    var score = 0;
    var wins = 1;
    var losses = 1;

    function resetGame () {
        randomNumber = Math.floor(Math.random() * 100 + 20);
        redCrystal = Math.floor((Math.random() * 12) + 1);
        blueCrystal = Math.floor((Math.random() * 12) + 1);
        yellowCrystal = Math.floor((Math.random() * 12) + 1);
        greenCrystal = Math.floor((Math.random() * 12) + 1);
        // $(".total-score").text(score);
    };

    function lost () {
        $(".score-losses").text("Losses: " + losses++);
            alert("You have lost the game!");
            
    };

    function won () {
        $(".score-wins").text("Wins: " + wins++);
            alert("You have won the game!");
    };

    $(".random-number").on("click", function () {
        $(".random-number").text(randomNumber);
        $(".total-score").text(score = 0);
    });

    // $(".total-score").on("click", function () {
    //     $(".total-score").text(score);

    $(".yellow-crystal").on("click", function () {

        score = score + yellowCrystal

        $(".total-score").text(score);

        if (randomNumber === score) {
            won ();
            resetGame();
        }

        else if (score > randomNumber) {
            lost();
            resetGame();
        }
    });

    $(".red-crystal").on("click", function () {
        // $(".total-score").text(score + redCrystal);
        score = score + redCrystal

        $(".total-score").text(score);

        if (randomNumber === score) {
            won ();
            resetGame();
        }

        else if (score > randomNumber) {
            lost();
            resetGame();
        }
    });

    $(".blue-crystal").on("click", function () {
        // $(".total-score").text(score + blueCrystal);
        score = score + blueCrystal

        $(".total-score").text(score);

        if (randomNumber === score) {
            won ();
            resetGame();
        }

        else if (score > randomNumber) {
            lost();
            resetGame();
        }
    });

    $(".green-crystal").on("click", function () {
        // $(".total-score").text(score + greenCrystal);
        score = score + greenCrystal

        $(".total-score").text(score);

        if (randomNumber === score) {
            won ();
            resetGame();
        }

        else if (score > randomNumber) {
            lost();
            resetGame();
        }
    });

})