const images = [];
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

const imageBaseURL = "https://raw.githubusercontent.com/tuprak100/Heriplerni_koshup_Oqush/main/images/";

for (let i = 1; i <= 192; i++) {
    images.push(imageBaseURL + `img${i}.png`);
}

function showCard() {
    cardImage.src = images[currentCard];
    cardNumberDisplay.textContent = `Card ${currentCard + 1} of ${images.length}`;
    congratulationsMessage.style.display = 'none'; // Hide message when showing a card
    // Play the audio when showing a card (assuming desired behavior)
    const cardSound = document.getElementById('cardSound');
    // use if only play when change the card.
    //cardSound.currentTime = 9; // Reset playback time (optional)
    //cardSound.play(); // Play the audio

    // use if we want continues music
    cardSound.loop = true; // Set the loop property to true
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

showCard();
