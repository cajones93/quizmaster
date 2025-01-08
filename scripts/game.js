let startButton = document.getElementById("startBtn");
let backButton = document.getElementById("backBtn");
let quizData;
let question = document.getElementById("question");

// answer buttons
const answer3Btn = document.getElementById("answer3");
const answer4Btn = document.getElementById("answer4");

async function getData(API_URL) {

    const queryString = `${API_URL}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        console.log(data);
        return data;
    } else {
        throw new Error(data.error);
    }
    

}

backButton.addEventListener("click", goToHomepage);

function goToHomepage(){
    window.location.href = "index.html"; 
}

startButton.addEventListener("click", startGame);

function changeButtons(){
    startButton.setAttribute("id", "answer1");
    backButton.setAttribute("id", "answer2");
    startButton.innerText = "done";
    answer3Btn.classList.remove("hidden");
    answer4Btn.classList.remove("hidden");
    startButton.removeEventListener("click", startGame);
    backButton.removeEventListener("click", goToHomepage);
}


async function startGame(){
    
    // retrieve quiz data from local storage
    let API_URL = localStorage.getItem("API_URL");

    quizData = await getData(API_URL);


    console.log(API_URL);
    console.log(quizData);

    const quizQuestions = quizData.results.map(question => ({ 
        question: question.question, 
        correctAnswer: question.correct_answer, 
        incorrectAnswers: question.incorrect_answers 
      }));
      
      console.log("quiz questions: ", quizQuestions); 

      let shuffledQuiz = shuffleQuestions(quizQuestions);

      console.log("shuffled quiz questions: ", shuffledQuiz);
    // question.innerText = dataQuestions[Math.floor(Math.random() * noOfQuestions)];

    changeButtons();

}


/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleQuestions(quizData) {
    for (let i = quizData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [quizData[i], quizData[j]] = [quizData[j], quizData[i]]; 
    }

    return quizData;
  }