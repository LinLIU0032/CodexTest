const jokes = [
  "Why don't programmers like nature? It has too many bugs.",
  "I told my computer I needed a break, and now it won't stop sending me KitKat ads.",
  "Why did the developer go broke? Because he used up all his cache.",
  "There are 10 kinds of people: those who understand binary and those who don't.",
  "Why was the JavaScript developer sad? Because he didn't know how to null his feelings.",
  "I changed my password to 'incorrect'. So whenever I forget, the computer reminds me: 'Your password is incorrect.'",
  "Why did the function return early? It had a timeout issue.",
  "Debugging: Removing the needles from the haystack.",
  "Why was the computer cold? It forgot to close its Windows.",
  "I would tell you a UDP joke, but you might not get it.",
  "My code doesn't have bugs. It just develops random features."
];

const jokeText = document.getElementById("joke-text");
const jokeButton = document.getElementById("joke-button");
let lastJokeIndex = -1;

function getRandomJoke() {
  let randomIndex = Math.floor(Math.random() * jokes.length);

  if (jokes.length > 1) {
    while (randomIndex === lastJokeIndex) {
      randomIndex = Math.floor(Math.random() * jokes.length);
    }
  }

  lastJokeIndex = randomIndex;
  return jokes[randomIndex];
}

function showRandomJoke() {
  jokeText.textContent = getRandomJoke();
}

jokeButton.addEventListener("click", showRandomJoke);
