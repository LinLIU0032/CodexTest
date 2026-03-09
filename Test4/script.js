const jokes = [
  {
    en: "Why don't programmers like nature? It has too many bugs.",
    zh: "程序员为什么不喜欢大自然？因为那里的 bug 太多了。"
  },
  {
    en: "I told my computer I needed a break, and now it won't stop sending me KitKat ads.",
    zh: "我跟电脑说我需要休息一下，它就不停给我推送奇巧巧克力广告。"
  },
  {
    en: "Why did the developer go broke? Because he used up all his cache.",
    zh: "开发者为什么破产了？因为他的缓存全用光了。"
  },
  {
    en: "There are 10 kinds of people: those who understand binary and those who don't.",
    zh: "世界上有 10 种人：懂二进制的和不懂二进制的。"
  },
  {
    en: "Why was the JavaScript developer sad? Because he didn't know how to null his feelings.",
    zh: "JavaScript 开发者为什么伤心？因为他不知道怎么把感情置为 null。"
  },
  {
    en: "I changed my password to 'incorrect'. So whenever I forget, the computer reminds me: 'Your password is incorrect.'",
    zh: "我把密码改成了 incorrect，这样每次忘记时系统都会提醒我：你的密码是 incorrect。"
  },
  {
    en: "Why did the function return early? It had a timeout issue.",
    zh: "函数为什么提前返回了？因为它超时了。"
  },
  {
    en: "Debugging: Removing the needles from the haystack.",
    zh: "调试：在草堆里一根一根找针。"
  },
  {
    en: "Why was the computer cold? It forgot to close its Windows.",
    zh: "电脑为什么着凉了？因为它忘了关 Windows。"
  },
  {
    en: "I would tell you a UDP joke, but you might not get it.",
    zh: "我本来想讲个 UDP 笑话，但你可能收不到。"
  },
  {
    en: "My code doesn't have bugs. It just develops random features.",
    zh: "我的代码没有 bug，它只是会随机长出新功能。"
  }
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
  const joke = getRandomJoke();
  jokeText.textContent = `${joke.zh}\n${joke.en}`;
}

jokeButton.addEventListener("click", showRandomJoke);
