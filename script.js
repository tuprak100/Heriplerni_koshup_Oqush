const images = [];
const cardImage = document.getElementById('flashcard');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const cardNumberDisplay = document.getElementById('card-number');
let currentCard = 0;

// ***REPLACE THIS WITH YOUR ACTUAL GITHUB RAW URL***
const imageBaseURL = "https://raw.githubusercontent.com/tuprak100/Heriplerni_koshup_Oqush/tree/main/images/"; // Correct URL format

for (let i = 1; i <= 192; i++) {
    images.push(imageBaseURL + `img${i}.png`); // Correct template literal
}

function showCard() {
    cardImage.src = images[currentCard];
    cardNumberDisplay.textContent = `Card ${currentCard + 1} of ${images.length}`;
}

nextButton.addEventListener('click', () => {
    currentCard = (currentCard + 1) % images.length;
    showCard();
});

prevButton.addEventListener('click', () => {
    currentCard = (currentCard - 1 + images.length) % images.length;
    showCard();
});

showCard();
