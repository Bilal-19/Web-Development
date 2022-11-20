let firstCard = getRandomCard()
let secondCard = getRandomCard()
let player = {
    name: "Bilal",
    chips: 145
}
let sum = 0
let cards = []  //array - ordered list of items
let hasBlackJack = false
let message = ""
let isAlive = false

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


playerEl.textContent = player.name + ": $" + player.chips

// Create a function that always retrun the number 5
function getRandomCard() {
    let randomnumber = Math.floor(Math.random()*13)+1
    // if random number is 1 then return 11
    // else if random number is between 11 and 13 then return 13
    if (randomnumber === 1) {
        return 11
    }
    else if (randomnumber > 10 & randomnumber < 13) {
        return 10
    }
    else {
        return randomnumber
    }
}


function renderGame() {
    //Render the card on the page
    cardsEl.textContent = "Cards:" 

    // Create a for loop that render out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    // Rendering the sum on the webpage
    sumEl.textContent = "Sum: "+sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message

    
}

function newCard() {
    // console.log("Draw a new card from the deck!")
    // Only allow the player to get a new card if she IS alive and doesnot have Blackjack
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card   // sum = sum + card
        cards.push(card) // Push the card to the cards array
        renderGame()
    }
}


function startGame() {
    isAlive = true
    // Generate two random numbers
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    // Re-assign the cards and sum variables so that the game can start
    cards = [firstCard,secondCard]
    sum = firstCard+secondCard
    renderGame()
}