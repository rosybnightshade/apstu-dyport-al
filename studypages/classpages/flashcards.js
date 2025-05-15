const singularFlashcards = JSON.parse(localStorage.getItem(`${classFile}`)) || [];

const state = {
    numCards: singularFlashcards.length,
    currentIndex: 0,
    flashcards: singularFlashcards
};

const flashcardContainer = document.getElementById('flashcard-container'); 
const flashcardForms = document.getElementById('flashcard-forms'); 
const flashcardDisplay = document.getElementById('flashcard-display'); 
const currentCardSpan = document.getElementById('current-card'); 
const totalCardsSpan = document.getElementById('total-cards');

document.getElementById('prev-btn').addEventListener('click', showPreviousCard); 
document.getElementById('next-btn').addEventListener('click', showNextCard); 
document.getElementById('flip-btn').addEventListener('click', flipCurrentCard); 
document.getElementById('restart-btn').addEventListener('click', restartApp); 
document.getElementById('shuffle-btn').addEventListener('click', shuffleCards);

function startCreatingCards() {
// get and validate the number of cards
state.numCards = parseInt(document.getElementById('num-cards').value);
if (isNaN(state.numCards) ||  state.numCards < 1) {
    alert("Please enter a legit number  of flashcards");
    return;
}}

function displayFlashcards() {
// exit if no cards
if (state.flashcards.length ===  0) return;
// get the current card based on the index
const card = state.flashcards[state.currentIndex];
// create the html with both front and back faces
flashcardDisplay.innerHTML = `
<div class="flashcard" id="current-flashcard">
    <div class="flashcard-front">
        <p>${card.question}</p>
    </div>
    <div class="flashcard-back">
        <p>${card.answer}</p>
    </div>
</div>
`
// event listener for flipping on click
document.getElementById('current-flashcard').addEventListener('click, flipCurrentCard');
}

function showPreviousCard() {
    // only go back if not on the first card
    if (state.currentIndex > 0) {
        state.currentIndex--;

        displayFlashcards();
        updateCardCounter();
    }
}

function showNextCard() {
    // only  advance if not on last card
    if (state.currentIndex < state.flashcards.length - 1) {
        state.currentIndex++;

        displayFlashcards();
        updateCardCounter();
    }
}

function flipCurrentCard() {
    // get current flashcard element
    const flashcard = document.getElementById('current-flashcard');
    // trigger animation
    flashcard.classList.toggle('flipped');
}

function updateCardCounter() {
    // update ccurrent card #
    currentCardSpan.textContent = state.currentIndex + 1;
    // update count
    totalCardsSpan.textContent = state.flashcards.length;
}

function restartApp() {
    // reset to first card
    state.currentIndex = 0;
}

function shuffleCards () { 
    // fisher-yates shuffle 
    for (let i = state.flashcards.length - 1; i > 0; i--) {
        // get random index from 0 to i 
        const j = Math.floor(Math.random() * (i + 1)); 
        // swap elements at i and j using array
        [state.flashcards[i], state.flashcards[j]]=[state.flashcards[j], state.flashcards[i]]
    } 
    // Reset to the first card 
    state.currentIndex = 0; 
    // Update the display 
    displayFlashcards(); 
    updateCardCounter(); 
};