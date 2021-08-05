const username = document.querySelector("#username");
const saveScoreBtn = document.querySelector("#saveScoreBtn");
const finalScore = document.querySelector("#finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highestScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 3;

finalScore.innerText = mostRecentScore;