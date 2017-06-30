// Require dependencies.
const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const expressValidator = require('express-validator');
const fs = require('fs');
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");
// Create app.
const app = express();

// Configure dependencies.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(expressValidator());
app.use(express.static('public'));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

// Instantiate array.
const wrongLetter = [];
const correctLetter = [];
const mysteryWord = words(math.floor(math.random() * words.length));

// variables
let startButton = document.getElementById('startButton');
let submitButton = document.getElementById('submitButton');
let letterGuessed = "";
let searchArea = document.getElementById('searchArea');


// create button to start game and get random word
function playGame() {
  startButton.addEventListener("click", startButton);
  console.log(startButton);
  for (var i = 0; i < mysteryWord.length; i++) {
  mysteryWord.push('_');
}

// what to do with the guess by user
function userGuess() {
  submitButton.addEventListener("click", submitButton);
  let letterGuessed = searchArea.value;
  console.log("this is the letter guessed" + letterGuessed);
  if (letterGuessed === " ") {
    return("Please enter a letter");
  }
  else if (letterGuessed != "a" || "b" || "c" || "d" || "e" || "f" || "g" ||
            "h" || "i" || "j" || "k" || "l" || "m" || "n" || "o" || "p" ||
            "q" || "r" || "s" || "t" || "u" || "v" || "w" || "x" || "y" || "z") {
    return("There are only letters in this word");
  }
  else if (letterGuessed.length != 1) {
    return("One letter at a time");
  }
  else if (letterGuessed === correctLetter || letterGuessed === wrongLetter) {
    return("Duplicate, try again");
  }
  else if (letterGuessed === mysteryWord) {
    correctLetter.push('letterGuessed');
  }
  else (letterGuessed != mysteryWord ) {
    wrongLetter.push('letterGuessed');
  }
}

app.listen(3000, function (req, res) {
  console.log('Successfully started express application!');
});
