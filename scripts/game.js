
let quizData;
let question = document.getElementById("question");
let score = 0;
let quizLength, quizCategory, difficulty, quizType;
let questionNo = 0;
let currentQuestion;
let quizQuestions;

// answer buttons
let answer1Btn = document.getElementById("answer1");
let answer2Btn = document.getElementById("answer2");
const answer3Btn = document.getElementById("answer3");
const answer4Btn = document.getElementById("answer4");

async function getData(API_URL) {
  const queryString = `${API_URL}`;

  const response = await fetch(queryString);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;

}

// Initial event listeners
answer1Btn.addEventListener("click", startGame);
answer2Btn.addEventListener("click", goToHomepage);

function goToHomepage(){
    window.location.href = "index.html"; 
}

function changeButtons(quizType){
    answer1Btn.removeEventListener("click", startGame);
    answer2Btn.removeEventListener("click", goToHomepage);

    // reveal buttons 3 and 4 for multiple choice quiz
    if(quizType === "multiple"){
        answer3Btn.classList.remove("hidden");
        answer4Btn.classList.remove("hidden");
    }
}


function getParams(){
        // retrieve quiz data from local storage
        let quizParams = JSON.parse(localStorage.getItem('quizParams'));

        // set the parameters
        quizLength = quizParams.quizLength;
        quizCategory = quizParams.quizCategory;
        difficulty = quizParams.difficulty;
        quizType = quizParams.quizType;

        return quizParams;
}

async function startGame(){
    //get quiz parameters
    let quizParams = getParams();
    //get the URL
    let API_URL = await quizParams.url;

    console.log(API_URL);
    quizData = await getData(API_URL);

    console.log(quizData);

    // map data into quiz questions
    quizQuestions = quizData.results.map(question => ({
        question: question.question,
        correctAnswer: question.correct_answer,
        incorrectAnswers: question.incorrect_answers,
      }));
    
    console.log("Quiz Questions:", quizQuestions);
    
      // remove initial event listeners and reveal buttonsbutton data
    changeButtons(quizParams.quizType);
      addButtonListeners();
      // Call setQuestionAndAnswers after defining it
      setQuestionAndAnswers(); 
}

function addButtonListeners(){
    let answerButtons = document.getElementsByClassName("answer-button");
    for(const button of answerButtons){
        button.addEventListener("click", (e) => {
            if (button.innerText === currentQuestion.correctAnswer){
                score ++;
                setQuestionAndAnswers();
            }
            else {
                setQuestionAndAnswers();
            }
        })
    }
}

async function setQuestionAndAnswers() {
    // After final question
    if (questionNo >= quizLength - 1){
        // showScore();
    }
    
    currentQuestion = quizQuestions[questionNo];

    console.log("current question: ", currentQuestion);
    // set question text
    question.innerText = currentQuestion.question;

    let allAnswers = currentQuestion.incorrectAnswers.concat([currentQuestion.correctAnswer]); // Combine incorrect and correct answers
    


    // Shuffle the answers array using Durstenfeld shuffle algorithm
    for (let i = allAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
    }

  
    // Assign answers to buttons
    answer1Btn.innerText = allAnswers[0];
    answer2Btn.innerText = allAnswers[1];
    answer3Btn.innerText = allAnswers[2];
    answer4Btn.innerText = allAnswers[3];
  
    questionNo++;
  }