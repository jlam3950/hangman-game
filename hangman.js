window.onload = function (){
    let counter = 10;
    
    let lettersId = document.getElementById("letters");
    let wordId = document.getElementById("word");
    let guessesId = document.getElementById("guesses");
    guessesId.innerHTML = `<h2>You have ${counter} lives.</h2>`;

    document.addEventListener("keydown", (event) => {
        // Needs to check if a guess is incorrect. If so the counter will decrease by 1 and render that number to the page.
        counter = counter - 1;

        if (counter <= -1) {
            return;
        } else if (counter === 0) {
            guessesId.innerHTML = `<h2>You have ${counter} lives. Sorry you lost the game.</h2>`;
            return;
        }

        guessesId.innerHTML = `<h2>You have ${counter} lives.</h2>`;
        console.log(event.key);
        console.log(counter);

    });
}
