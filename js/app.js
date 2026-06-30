
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

let errorCount = 0;
let cardSet;
let winner = 0;
let loser = 6;
let firstCard = null;
let secondCard = null;
let hasFlipped = false;

const boardEl = document.querySelector(".board");
const resetBtn = document.querySelector("#reset");
const errorCountEl = document.querySelector("#error-count");
const messageEl = document.querySelector(".title");
const cards = document.querySelectorAll(".card");




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
            resetBoard();
        })
   

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

        winner++;

        if (winner === cardList.length/2) {
            messageEl.textContent = "You Win!";
            setTimeout(resetGame,1000);
            cards.forEach( card => card.classList.remove("visible"));

        }

        resetBoard();
       

    } else {
        setTimeout(() => {

            firstCard.classList.remove("visible");
            secondCard.classList.remove("visible");

            errorCount++;
            errorCountEl.textContent = errorCount;

            if (errorCount >= loser) {
                messageEl.textContent = "You Lose!";
                setTimeout(resetGame,1000)
                cards.forEach(card => card.classList.remove("visible"));
            }

            resetBoard();
           

        }, 500);
    }
}

function resetGame(){
    errorCount = 0;
    winner = 0;
    errorCountEl.textContent = 0;
    messageEl.textContent = "error count: 0";
    initialize();
}

function resetBoard() {
    firstCard = null;
    secondCard = null;
    
   
}

resetBtn.addEventListener("click", () => {
    errorCount = 0;
    winner = 0;
    cards.forEach(card => card.classList.remove("visible"));

    errorCountEl.textContent =errorCount ;
    initialize();
});

initialize();