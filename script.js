const cardImage = document.getElementById('flashcard');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const cardNumberDisplay = document.getElementById('card-number');
let currentCard = 0;
const congratulationsMessage = document.createElement('p'); // Create message element
congratulationsMessage.textContent = "Congratulations! You've finished all the flashcards!";
congratulationsMessage.style.display = 'none'; // Initially hidden
congratulationsMessage.style.fontSize = '2em'; // Example styling
congratulationsMessage.style.color = 'green';
congratulationsMessage.style.textAlign='center';
document.getElementById('card-container').appendChild(congratulationsMessage); // Add to card container

const favoriteButton = document.getElementById('favoriteButton'); // Get the favorite button

const imageBaseURL = "https://raw.githubusercontent.com/tuprak100/Heriplerni_koshup_Oqush/main/images/";

let images = []; // Initialize images array (populated later)

// Assuming 4 rows and 2 columns per page (adjust as needed)
const numRows = 4;
const numCols = 2;
const numPages = 24; // we have 24 page for now

// Function to generate image URLs (used later)
function generateImageURLs() {
  for (let page = 0; page < numPages; page++) {
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        images.push(imageBaseURL + `page_${page}_row_${row}_col_${col}.png`);
      }
    }
  }
}

generateImageURLs(); // Generate image URLs

console.log(images); // To verify the generated image URLs

let favoriteWords = []; // Array to store favorite flashcards

function showCard() {
  cardImage.src = images[currentCard];
  cardNumberDisplay.textContent = `Card ${currentCard + 1} of ${images.length}`;
  congratulationsMessage.style.display = 'none'; // Hide message when showing a card
  
  // Update favorite button text based on current card's favorite state
  favoriteButton.textContent = images[currentCard].favorite ? "Unfavorite" : "Favorite";
  
  // Play the audio when showing a card (assuming desired behavior)
  const cardSound = document.getElementById('cardSound');
  // Optional: Reset playback time when card changes
  // cardSound.currentTime = 0;
  // cardSound.play(); // Play the audio

  // Optional: Continuous music
  cardSound.loop = true;
  cardSound.play(); // Start playing the music once.
}

nextButton.addEventListener('click', () => {
  currentCard = (currentCard + 1) % images.length;

  if (currentCard === 0) { // Check if we've looped back to the beginning
    congratulationsMessage.style.display = 'block'; // Show congratulations
    cardImage.src = ""; // Optionally clear the image
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
  images[currentCard].favorite = !images[currentCard].favorite; // Toggle favorite state
  showCard(); // Update display and button text
});

showCard(); // Initial display
