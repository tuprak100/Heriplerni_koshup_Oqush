const cardImage = document.getElementById('flashcard');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const cardNumberDisplay = document.getElementById('card-number');
const favoriteButton = document.getElementById('favoriteButton');
const reviewFavoritesButton = document.getElementById('reviewFavorites');
const allCardsButton = document.getElementById('allCardsButton'); // Add this button
const congratulationsMessage = document.createElement('p');
congratulationsMessage.textContent = "Congratulations! You've finished all the flashcards!";
congratulationsMessage.style.display = 'none';
congratulationsMessage.style.fontSize = '2em';
congratulationsMessage.style.color = 'green';
congratulationsMessage.style.textAlign='center';
document.getElementById('card-container').appendChild(congratulationsMessage);

const imageBaseURL = "https://raw.githubusercontent.com/tuprak100/Heriplerni_koshup_Oqush/main/images/";
let images = [];
let originalImages = []; // Store the original images here
const numRows = 4;
const numCols = 2;
const numPages = 24;
let favoriteWords = [];
let isReviewingFavorites = false; // Track if reviewing favorites

function generateImageURLs() {
    for (let page = 0; page < numPages; page++) {
        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                images.push({src: imageBaseURL + `page_${page}_row_${row}_col_${col}.png`, favorite: false});
            }
        }
    }
    originalImages = [...images]; // Create a copy of the original array
}

generateImageURLs();

let currentCard = 0;

function showCard() {
    cardImage.src = images[currentCard].src;
    cardNumberDisplay.textContent = `Card ${currentCard + 1} of ${images.length}`;
    congratulationsMessage.style.display = 'none';
    favoriteButton.textContent = images[currentCard].favorite ? "★" : "☆";
    if (images[currentCard].favorite) {
        favoriteButton.classList.add("favorited");
      } else {
        favoriteButton.classList.remove("favorited");
      }
    const cardSound = document.getElementById('cardSound');
    cardSound.loop = true;
    cardSound.play();
}

nextButton.addEventListener('click', () => {
    currentCard = (currentCard + 1) % images.length;
    if (currentCard === 0 && isReviewingFavorites === false) {
        congratulationsMessage.style.display = 'block';
        cardImage.src = "";
        cardNumberDisplay.textContent = "";
    } else {
        showCard();
    }
});

prevButton.addEventListener('click', () => {
    currentCard = (currentCard - 1 + images.length) % images.length;
    showCard();
});

favoriteButton.addEventListener('click', () => {
    images[currentCard].favorite = !images[currentCard].favorite;
    favoriteButton.textContent = images[currentCard].favorite ? "★" : "☆";
        if (images[currentCard].favorite) {
        favoriteButton.classList.add("favorited");
      } else {
        favoriteButton.classList.remove("favorited");
      }
    showCard();
});

reviewFavoritesButton.addEventListener('click', () => {
    favoriteWords = images.filter(card => card.favorite);
    if (favoriteWords.length === 0) {
        alert("No favorite words selected yet.");
        return;
    }
    images = favoriteWords;
    currentCard = 0;
    isReviewingFavorites = true; // Set the flag
    showCard();
});

allCardsButton.addEventListener('click', () => { // Add event listener for the new button
    images = originalImages;// Restore the original images
    currentCard = 0;
    isReviewingFavorites = false;// Reset the flag
    showCard();
});

showCard();
