let errorCount = 0
const cardList = [
    "image/angular.svg",
    "image/aurelia.svg",
    "image/backbone.svg",
    "image/ember.svg",
    "image/react.svg",
    "image/vue.svg",
    // "image/js-badge.svg"
   

]
 let cardSet;



const boardEl = document.querySelector(".board")
const resetBtn = document.querySelector("#reset")
const errorCountEl = document.querySelector("#error-count")


function shuffle() {
   
    cardSet = cardList.concat(cardList) 
    console.log(cardSet)
    
    for(let i = 0; i < cardSet.length ; i++) {
        let j = Math.floor(Math.random() * cardSet.length); 
        let temp = cardSet[i]; 
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
    
    console.log(cardSet)
}

function initialize() {

  
}



function flipCard() {
    

}


function checkMatch(){
   

}






resetBtn.addEventListener("click", () => {

    errorCount = 0;
    errorCountEl.textContent = 0;

    initialize();

});

initialize()


