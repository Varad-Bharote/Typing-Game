// Comprehensive word list from various categories
const comprehensiveWordList = [
    // Basic words
    'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'i', 'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at',
    'this', 'but', 'his', 'by', 'from', 'they', 'she', 'or', 'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their',
    
    // Common nouns
    'time', 'person', 'year', 'way', 'day', 'thing', 'man', 'world', 'life', 'hand', 'part', 'child', 'eye', 'woman', 'place', 'work', 'week', 'case', 'point', 'government',
    'company', 'number', 'group', 'problem', 'fact', 'be', 'have', 'do', 'say', 'get', 'make', 'go', 'know', 'take', 'see', 'come', 'think', 'look', 'want', 'give', 'use', 'find', 'tell', 'ask', 'work', 'seem', 'feel', 'try', 'leave', 'call',
    
    // Common verbs
    'run', 'walk', 'jump', 'swim', 'fly', 'sing', 'dance', 'read', 'write', 'draw', 'paint', 'cook', 'eat', 'drink', 'sleep', 'wake', 'laugh', 'cry', 'smile', 'listen',
    'speak', 'talk', 'shout', 'whisper', 'think', 'learn', 'study', 'teach', 'help', 'save', 'spend', 'buy', 'sell', 'build', 'break', 'fix', 'clean', 'wash', 'drive',
    
    // Common adjectives
    'good', 'new', 'first', 'last', 'long', 'great', 'little', 'own', 'other', 'old', 'right', 'big', 'high', 'different', 'small', 'large', 'next', 'early', 'young', 'important',
    'few', 'public', 'bad', 'same', 'able', 'happy', 'sad', 'angry', 'excited', 'bored', 'tired', 'hungry', 'thirsty', 'hot', 'cold', 'warm', 'cool', 'wet', 'dry', 'clean', 'dirty',
    
    // Animals
    'cat', 'dog', 'bird', 'fish', 'horse', 'cow', 'pig', 'sheep', 'chicken', 'duck', 'rabbit', 'mouse', 'rat', 'elephant', 'lion', 'tiger', 'bear', 'wolf', 'fox', 'deer',
    'whale', 'dolphin', 'shark', 'octopus', 'crab', 'lobster', 'bee', 'butterfly', 'ant', 'spider', 'snake', 'frog', 'turtle', 'eagle', 'owl', 'penguin', 'zebra', 'giraffe', 'monkey', 'kangaroo',
    
    // Food
    'apple', 'banana', 'orange', 'grape', 'strawberry', 'watermelon', 'pineapple', 'mango', 'peach', 'pear', 'cherry', 'lemon', 'lime', 'coconut', 'avocado',
    'bread', 'rice', 'pasta', 'potato', 'tomato', 'carrot', 'broccoli', 'spinach', 'lettuce', 'onion', 'garlic', 'cheese', 'milk', 'butter', 'egg', 'meat', 'chicken', 'fish', 'beef', 'pork',
    
    // Technology
    'computer', 'keyboard', 'mouse', 'screen', 'program', 'function', 'variable', 'algorithm', 'database', 'network', 'internet', 'website', 'software', 'hardware', 'code', 'binary', 'digital', 'analog', 'processor', 'memory',
    'smartphone', 'tablet', 'laptop', 'server', 'cloud', 'wifi', 'bluetooth', 'usb', 'application', 'interface', 'operating', 'system', 'browser', 'download', 'upload', 'email', 'password', 'security', 'encryption',
    
    // Nature
    'ocean', 'mountain', 'forest', 'river', 'lake', 'desert', 'valley', 'island', 'volcano', 'waterfall', 'beach', 'cliff', 'cave', 'canyon', 'glacier', 'swamp', 'meadow', 'prairie', 'tundra', 'rainforest',
    'sun', 'moon', 'star', 'planet', 'comet', 'meteor', 'galaxy', 'universe', 'earth', 'wind', 'rain', 'snow', 'lightning', 'thunder', 'cloud', 'fog', 'dew', 'frost', 'hail',
    
    // Science
    'science', 'mathematics', 'history', 'geography', 'literature', 'biology', 'chemistry', 'physics', 'astronomy', 'geology', 'psychology', 'sociology', 'anthropology', 'philosophy', 'economics', 'politics', 'medicine', 'engineering', 'architecture', 'law',
    'atom', 'molecule', 'cell', 'dna', 'gene', 'evolution', 'gravity', 'energy', 'force', 'motion', 'velocity', 'acceleration', 'temperature', 'pressure', 'volume', 'mass', 'weight', 'density', 'frequency', 'wavelength',
    
    // Music
    'guitar', 'piano', 'violin', 'drum', 'trumpet', 'flute', 'saxophone', 'cello', 'clarinet', 'harp', 'organ', 'accordion', 'banjo', 'ukulele', 'xylophone', 'trombone', 'oboe', 'bassoon', 'harmonica', 'synthesizer',
    'music', 'song', 'melody', 'harmony', 'rhythm', 'beat', 'tempo', 'note', 'chord', 'scale', 'octave', 'symphony', 'orchestra', 'band', 'choir', 'singer', 'musician', 'composer', 'conductor', 'audience',
    
    // Sports
    'football', 'basketball', 'tennis', 'swimming', 'running', 'cycling', 'volleyball', 'baseball', 'soccer', 'golf', 'skiing', 'boxing', 'wrestling', 'hockey', 'cricket', 'rugby', 'badminton', 'table tennis', 'archery', 'fencing',
    'athlete', 'player', 'coach', 'team', 'game', 'match', 'competition', 'tournament', 'championship', 'league', 'score', 'point', 'goal', 'victory', 'defeat', 'practice', 'training', 'exercise', 'fitness', 'health',
    
    // Medium difficulty words
    'beautiful', 'wonderful', 'fantastic', 'amazing', 'incredible', 'extraordinary', 'magnificent', 'spectacular', 'outstanding', 'excellent', 'brilliant', 'genius', 'clever', 'intelligent', 'smart', 'wise', 'knowledgeable', 'educated', 'learned', 'skilled',
    'adventure', 'journey', 'expedition', 'exploration', 'discovery', 'experience', 'opportunity', 'challenge', 'obstacle', 'difficulty', 'problem', 'solution', 'answer', 'question', 'mystery', 'secret', 'clue', 'hint', 'evidence', 'proof',
    
    // Difficult words
    'xylophone', 'quixotic', 'juxtapose', 'mnemonic', 'cryptic', 'obfuscate', 'serendipity', 'ephemeral', 'ubiquitous', 'perspicacious',
    'floccinaucinihilipilification', 'antidisestablishmentarianism', 'pneumonoultramicroscopicsilicovolcanoconosis', 'hippopotomonstrosesquippedaliophobia',
    'supercalifragilisticexpialidocious', 'pseudopseudohypoparathyroidism', 'thyroparathyroidectomized', 'dichlorodifluoromethane',
    'incomprehensibilities', 'methionylthreonylthreonylglutaminylarginyl', 'tetraiodophenolphthalein', 'hexakosioihexekontahexaphobia',
    'electroencephalographically', 'psychoneuroendocrinological', 'hepaticocholangiocholecystenterostomies', 'pneumoencephalographically', 'radioimmunoelectrophoresis', 'psychophysicotherapeutics'
];

// Game variables
let timer = 60;
let score = 0;
let totalCharactersTyped = 0;
let correctCharactersTyped = 0;
let currentWord = '';
let startTime;
let timerInterval;
let gameActive = false;
let currentDifficulty = 'all';
let timeLimit = 60;
let highScore = 0;

// DOM elements
const wordDisplay = document.getElementById('word-display');
const typingInput = document.getElementById('typing-input');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const wpmElement = document.getElementById('wpm');
const accuracyElement = document.getElementById('accuracy');
const highScoreElement = document.getElementById('high-score');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const difficultySelector = document.getElementById('difficulty');
const timeLimitSelector = document.getElementById('time-limit');
const helpBtn = document.getElementById('help-btn');
const helpText = document.getElementById('help-text');
const correctSound = document.getElementById('correct-sound');
const incorrectSound = document.getElementById('incorrect-sound');

// Initialize the game
function initGame() {
    // Load high score from localStorage
    loadHighScore();
    
    // Event listeners
    startBtn.addEventListener('click', startGame);
    resetBtn.addEventListener('click', resetGame);
    typingInput.addEventListener('input', checkInput);
    difficultySelector.addEventListener('change', updateDifficulty);
    timeLimitSelector.addEventListener('change', updateTimeLimit);
    helpBtn.addEventListener('click', toggleHelp);
    
    // Allow submitting word with Enter key
    typingInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (typingInput.value.trim() === currentWord) {
                submitWord();
            }
        }
    });
    
    // Select first word
    selectRandomWord();
}

// Toggle help text visibility
function toggleHelp() {
    helpText.classList.toggle('hidden');
    helpBtn.textContent = helpText.classList.contains('hidden') ? 'Show Instructions' : 'Hide Instructions';
}

// Update difficulty level
function updateDifficulty() {
    currentDifficulty = difficultySelector.value;
    if (!gameActive) {
        selectRandomWord();
    }
}

// Update time limit
function updateTimeLimit() {
    timeLimit = parseInt(timeLimitSelector.value);
    if (!gameActive) {
        timer = timeLimit;
        timerElement.textContent = timer;
    }
}

// Load high score from localStorage
function loadHighScore() {
    const savedHighScore = localStorage.getItem('typingGameHighScore');
    if (savedHighScore) {
        highScore = parseInt(savedHighScore);
        highScoreElement.textContent = highScore;
    }
}

// Save high score to localStorage
function saveHighScore() {
    if (score > highScore) {
        highScore = score;
        highScoreElement.textContent = highScore;
        localStorage.setItem('typingGameHighScore', highScore.toString());
        
        // Add visual feedback for new high score
        highScoreElement.parentElement.classList.add('highlight');
        setTimeout(() => {
            highScoreElement.parentElement.classList.remove('highlight');
        }, 1000);
    }
}

// Select a random word from the comprehensive list
function selectRandomWord() {
    const randomIndex = Math.floor(Math.random() * comprehensiveWordList.length);
    currentWord = comprehensiveWordList[randomIndex];
    wordDisplay.textContent = currentWord;
    wordDisplay.className = ''; // Reset classes
    wordDisplay.classList.add('difficulty-medium'); // Use medium styling for all words
}

// Start the game
function startGame() {
    if (gameActive) return;
    
    gameActive = true;
    startBtn.disabled = true;
    typingInput.disabled = false;
    typingInput.value = '';
    typingInput.focus();
    
    // Reset game state
    timer = timeLimit;
    score = 0;
    totalCharactersTyped = 0;
    correctCharactersTyped = 0;
    updateStats();
    
    // Start timer
    startTime = new Date();
    timerInterval = setInterval(updateTimer, 1000);
}

// Update the timer
function updateTimer() {
    timer--;
    timerElement.textContent = timer;
    
    if (timer <= 0) {
        endGame();
    }
}

// Check user input
function checkInput() {
    if (!gameActive) return;
    
    const userInput = typingInput.value;
    
    // Update character counts for accuracy calculation
    totalCharactersTyped = userInput.length;
    
    // Check if the input matches the current word
    if (userInput === currentWord) {
        submitWord();
    } else {
        // Check for partial match to highlight incorrect letters
        updateWordDisplayWithFeedback(userInput);
    }
}

// Submit a correctly typed word
function submitWord() {
    // Play sound effect
    correctSound.currentTime = 0;
    correctSound.play().catch(e => console.log("Audio play error:", e));
    
    // Correct word typed
    const wordLength = currentWord.length;
    score += wordLength;
    correctCharactersTyped += wordLength;
    updateStats();
    selectRandomWord();
    typingInput.value = '';
    
    // Add visual feedback
    wordDisplay.classList.add('correct');
    setTimeout(() => {
        wordDisplay.classList.remove('correct');
    }, 300);
}

// Update word display with visual feedback
function updateWordDisplayWithFeedback(userInput) {
    let displayHTML = '';
    
    for (let i = 0; i < currentWord.length; i++) {
        if (i < userInput.length) {
            if (userInput[i] === currentWord[i]) {
                displayHTML += `<span class="correct">${currentWord[i]}</span>`;
            } else {
                displayHTML += `<span class="incorrect">${currentWord[i]}</span>`;
            }
        } else {
            displayHTML += currentWord[i];
        }
    }
    
    wordDisplay.innerHTML = displayHTML;
}

// Update stats display
function updateStats() {
    scoreElement.textContent = score;
    accuracyElement.textContent = calculateAccuracy();
    
    // Calculate WPM (Words Per Minute)
    if (gameActive && startTime) {
        const currentTime = new Date();
        const timeElapsed = (currentTime - startTime) / 1000 / 60; // in minutes
        const wordsTyped = score / 5; // Average word length is 5 characters
        const wpm = Math.round(wordsTyped / timeElapsed) || 0;
        wpmElement.textContent = wpm;
    }
}

// Calculate typing accuracy
function calculateAccuracy() {
    if (totalCharactersTyped === 0) return 100;
    return Math.round((correctCharactersTyped / totalCharactersTyped) * 100);
}

// End the game
function endGame() {
    gameActive = false;
    clearInterval(timerInterval);
    
    // Play sound effect
    if (score > 0) {
        correctSound.currentTime = 0;
        correctSound.play().catch(e => console.log("Audio play error:", e));
    }
    
    // Save high score
    saveHighScore();
    
    // Disable input
    typingInput.disabled = true;
    startBtn.disabled = false;
    
    // Show game over message
    wordDisplay.innerHTML = `
        <div class="game-over">
            Game Over!<br>
            Final Score: ${score}<br>
            Accuracy: ${calculateAccuracy()}%<br>
            WPM: ${wpmElement.textContent}
        </div>
    `;
}

// Reset the game
function resetGame() {
    clearInterval(timerInterval);
    gameActive = false;
    
    // Reset UI
    timer = timeLimit;
    score = 0;
    totalCharactersTyped = 0;
    correctCharactersTyped = 0;
    updateStats();
    timerElement.textContent = timer;
    
    // Reset buttons and input
    startBtn.disabled = false;
    resetBtn.disabled = false;
    typingInput.disabled = false;
    typingInput.value = '';
    
    // Select new word
    selectRandomWord();
    typingInput.focus();
}

// Initialize the game when the page loads
window.addEventListener('DOMContentLoaded', initGame);