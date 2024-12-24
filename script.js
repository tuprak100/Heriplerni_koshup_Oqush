{\rtf1\ansi\ansicpg1252\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const images = [];\
const cardImage = document.getElementById('flashcard');\
const nextButton = document.getElementById('next-button');\
const prevButton = document.getElementById('prev-button');\
const cardNumberDisplay = document.getElementById('card-number');\
let currentCard = 0;\
\
// ***REPLACE THIS WITH YOUR ACTUAL GITHUB RAW URL***\
const imageBaseURL = "https://github.com/tuprak100/Heriplerni_koshup_Oqush/tree/main/images/";\
\
for (let i = 1; i <= 192; i++) \{\
    images.push(imageBaseURL + `img$\{i\}.jpg`); // Or .png\
\}\
\
function showCard() \{\
    cardImage.src = images[currentCard];\
    cardNumberDisplay.textContent = `Card $\{currentCard + 1\} of $\{images.length\}`;\
\}\
\
nextButton.addEventListener('click', () => \{\
    currentCard = (currentCard + 1) % images.length;\
    showCard();\
\});\
\
prevButton.addEventListener('click', () => \{\
    currentCard = (currentCard - 1 + images.length) % images.length;\
    showCard();\
\});\
\
showCard();}
