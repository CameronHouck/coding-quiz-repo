const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const scoreText = document.querySelector("#score");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

var questions = [
  {
    question:
      "What is the name of a container for storing a data value in Java-script?",
    choice1: "element",
    choice2: "variable",
    choice3: "document",
    choice4: "viewport",
    answer: 2,
  },
  {
    question: "What is an ordered list of values called in Java-script?",
    choice1: "array",
    choice2: "object",
    choice3: "loop",
    choice4: "html",
    answer: 1,
  },
  {
    question:
      "What is the name for the language used to style an Html document?",
    choice1: "html",
    choice2: "javascript",
    choice3: "css",
    choice4: "python",
    answer: 3,
  },
  {
    question:
      "What is the name of the version control software we use in this course?",
    choice1: "bitbucket",
    choice2: "vs code",
    choice3: "terminal",
    choice4: "git-bash",
    answer: 4,
  },
  {
    question:
      "Which layout tool allows us easy, flexible design of our html elements?",
    choice1: "javascript",
    choice2: "flexbox",
    choice3: "css",
    choice4: "github",
    answer: 2,
  },
  {
    question:
      "What property of the window object allows us to save information, even after a browser refresh?",
    choice1: "getItem",
    choice2: "textContent",
    choice3: "addEventListener",
    choice4: "localStorage",
    answer: 4,
  },
  {
    question:
      "In javascript, what is the name for a reusable piece of code written to perform a specific task?",
    choice1: "function",
    choice2: "objct",
    choice3: "string",
    choice4: "variable",
    answer: 1,
  },
];

const SCORE_POINTS = 10;
const MAX_QUESTIONS = 7;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("recentScore", score);

    return window.location.assign("./endgame.html");
  }

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};
