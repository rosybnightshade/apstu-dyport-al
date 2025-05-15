const flashcardDatabase = {
    humanGeography: [
      { question: "Rectilinear township", answer: "A(n) ______ and range survey system based upon lines of latitude and longitude." },
      { question: "City location", answer: "______ and the level of urban economic exchange could be analyzed using central places within hexagonal market areas, which overlapped at different scales." },
      { question: "Long lot patterns", answer: "______ have a narrow frontage along a road or waterway with a very long lot shape behind." },
      { question: "Three types of regions", answer: "Formal, functional, and vernacular." },
      { question: "Place", answer: "A specific point on earth with human and physical characteristics that distinguish it from other places." },
      { question: "Sequent occupancy", answer: "The succession of groups and cultural influences throughout a place's history." }
    ],
    seminar: [
      { question: "Primary Source", answer: "Original material or evidence directly related to the topic (e.g., interviews, diaries, original research)." },
      { question: "Secondary Source", answer: "Analysis or interpretation of primary sources (e.g., journal articles, reviews)." },
      { question: "Academic Journal", answer: "Peer-reviewed scholarly research." },
      { question: "News Article", answer: "Non-scholarly current events coverage; consider bias." },
      { question: "Government Document", answer: "Official data or laws from public institutions." }
    ],
    worldHistory: [
      { question: "American Revolution", answer: "Colonists sought independence from British rule." },
      { question: "French Revolution", answer: "Rebellion against monarchy and aristocracy." },
      { question: "Haitian Revolution", answer: "First successful slave revolt-led republic." },
      { question: "Latin American Revolutions", answer: "Independence movements from Spanish and Portuguese control." },
      { question: "Industrial Revolution", answer: "Shift to mechanized production; began in Britain." }
    ],
    US_History: [
      { question: "Brown v. Board (1954)", answer: "Desegregated public schools." },
      { question: "Montgomery Bus Boycott", answer: "Rosa Parks sparked boycott led by MLK Jr." },
      { question: "Civil Rights Act (1964)", answer: "Outlawed discrimination based on race, gender, etc." },
      { question: "Voting Rights Act (1965)", answer: "Ended barriers to Black voting rights." },
      { question: "Malcolm X", answer: "Advocated for Black empowerment and self-defense." }
    ],
    langComp: [
      { question: "Anaphora", answer: "Repetition of a word/phrase at the beginning of successive clauses. Ex: 'We shall fight...'" },
      { question: "Antithesis", answer: "Juxtaposition of contrasting ideas. Ex: 'It was the best of times, it was the worst of times.'" },
      { question: "Ethos", answer: "Appeal to credibility. Ex: 'As a doctor, I recommend...'" },
      { question: "Pathos", answer: "Appeal to emotion. Ex: 'Think of the children!'" },
      { question: "Logos", answer: "Appeal to logic/reason. Ex: 'Studies show a 60% increase...'" }
    ]
  };

// Load corresponding flashcards
const singularFlashcards = flashcardDatabase[classFile.class] || [];

const state = {
  numCards: singularFlashcards.length,
  currentIndex: 0,
  flashcards: singularFlashcards
};

// UI Elements
const flashcardContainer = document.getElementById('flashcard-container'); 
const flashcardDisplay = document.getElementById('flashcard-display'); 
const currentCardSpan = document.getElementById('current-card'); 
const totalCardsSpan = document.getElementById('total-cards');

// Button Events
document.getElementById('prev-btn').addEventListener('click', showPreviousCard); 
document.getElementById('next-btn').addEventListener('click', showNextCard); 
document.getElementById('flip-btn').addEventListener('click', flipCurrentCard); 
document.getElementById('restart-btn').addEventListener('click', restartApp); 
document.getElementById('shuffle-btn').addEventListener('click', shuffleCards);

// Display the first flashcard
if (state.flashcards.length > 0) {
  flashcardContainer.classList.remove('hidden');
  displayFlashcards();
  updateCardCounter();
}

function displayFlashcards() {
  if (state.flashcards.length === 0) return;

  const card = state.flashcards[state.currentIndex];
  flashcardDisplay.innerHTML = `
    <div class="flashcard" id="current-flashcard">
        <div class="flashcard-front">
            <p>${card.question}</p>
        </div>
        <div class="flashcard-back">
            <p>${card.answer}</p>
        </div>
    </div>
  `;

  document.getElementById('current-flashcard').addEventListener('click', flipCurrentCard);
}

function showPreviousCard() {
  if (state.currentIndex > 0) {
    state.currentIndex--;
    displayFlashcards();
    updateCardCounter();
  }
}

function showNextCard() {
  if (state.currentIndex < state.flashcards.length - 1) {
    state.currentIndex++;
    displayFlashcards();
    updateCardCounter();
  }
}

function flipCurrentCard() {
  const flashcard = document.getElementById('current-flashcard');
  flashcard.classList.toggle('flipped');
}

function updateCardCounter() {
  currentCardSpan.textContent = state.currentIndex + 1;
  totalCardsSpan.textContent = state.flashcards.length;
}

function restartApp() {
  state.currentIndex = 0;
  displayFlashcards();
  updateCardCounter();
}

function shuffleCards() {
  for (let i = state.flashcards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.flashcards[i], state.flashcards[j]] = [state.flashcards[j], state.flashcards[i]];
  }
  state.currentIndex = 0;
  displayFlashcards();
  updateCardCounter();
}

if (state.flashcards.length > 0) {
    flashcardContainer.classList.remove('hidden');
    displayFlashcards();
    updateCardCounter();
  } else {
    console.warn("No flashcards found for this class.");
  }
  