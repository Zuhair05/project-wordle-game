
const cardList = [
    "image/angular.svg",
    "image/aurelia.svg",
    "image/backbone.svg",
    "image/ember.svg",
    "image/react.svg",
    "image/vue.svg",
    "image/angular.svg",
    "image/aurelia.svg",
    "image/backbone.svg",
    "image/ember.svg",
    "image/react.svg",
    "image/vue.svg",
];
let errorCount = 6;
let cardSet;
let winner = 0;
let loser = 0;
let firstCard = null;
let secondCard = null;
let hasFlipped = false;

const winSound = new Audio("audio/correct-horn.mp3");
const youWinSound = new Audio("audio/you win.mp3");
const loseSound = new Audio("audio/youLose.mp3");
const boardEl = document.querySelector(".board");
const resetBtn = document.querySelector("#reset");
const errorCountEl = document.querySelector("#error-count");
const messageEl = document.querySelector(".message");
const cards = document.querySelectorAll(".card");
// const messageEndEl = document.querySelector("#message-end");






// console.log(cards)

cardList.sort(function(){
        return 0.5 - Math.random()
    })
    cards.forEach(function(card, i){
        card.innerHTML = "";
        card.classList.remove("visible");
    
        let img = document.createElement("img");
        img.src = cardList[i];
        img.classList.add("card-image");
    
        card.appendChild(img);
    
    
        card.addEventListener('click', function(event){
           const clickedCard = event.target;
    
            // console.log(clickedCard)
    
            clickedCard.classList.add("visible");
    
            if (!firstCard) {
                firstCard = clickedCard;
                return;
            }
    
            secondCard = clickedCard;
    
            checkMatch();
        })
    })
    
    function initialize() {
       cardList.sort(function(){
        return 0.5 - Math.random()
    })
    
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const img = card.querySelector(".card-image");
        img.src = cardList[i];
    }
    
    resetBoard();

}
function flipCard(event) {


    const clickedCard = event.target;

    // console.log(clickedCard)

    clickedCard.classList.add("visible");

    if (!firstCard) {
        firstCard = clickedCard;
        return;
    }

    secondCard = clickedCard;

    checkMatch();
}


function checkMatch() {
    let firstImg = firstCard.querySelector(".card-image").src;
    let secondImg = secondCard.querySelector(".card-image").src;

    if (firstImg === secondImg) {
        winSound.play();

        winner++;

        if (winner === cardList.length/2) {
            messageEl.textContent = "You Win!";
            youWinSound.play();
            messageEl.classList.add("win");
            // setTimeout(resetGame, 2000);
        }

        resetBoard();
       

    } else {
        setTimeout(() => {

            firstCard.classList.remove("visible");
            secondCard.classList.remove("visible");

            errorCount--;
            errorCountEl.textContent = errorCount;

            if (errorCount == loser) {
                loseSound.play();
                messageEl.textContent = "You Lose!";
                messageEl.classList.add("lose");
                // setTimeout(resetGame, 2000);
                     
            }

            resetBoard();
           

        }, 500);
    }
}

function resetGame(){
    // errorCount = 0;
    // winner = 0;
    // errorCountEl.textContent = errorCount;
    

   
    // initialize();
}

function resetBoard() {
    firstCard = null;
    secondCard = null;
}

resetBtn.addEventListener("click", () => {
    errorCount = 6;
    winner = 0;
    cards.forEach(card => card.classList.remove("visible"));
    
    errorCountEl.textContent =  errorCount;
    messageEl.textContent = "";
    
    
    initialize();
});


initialize();