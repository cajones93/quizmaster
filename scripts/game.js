
let quizData;
let quizLength, sessionToken, quizCategory, difficulty, quizType;
let questionNo = 0;
let score = 0;
let currentQuestion;
let quizQuestions;



// URL to reset session token (add session token after)
let tokenResetURL = "https://opentdb.com/api_token.php?command=reset&token=";


// let scoreText = document.getElementById("score");
let question = document.getElementById("question");
// answer buttons
let answer1Btn = document.getElementById("answer1");
let answer2Btn = document.getElementById("answer2");
const answer3Btn = document.getElementById("answer3");
const answer4Btn = document.getElementById("answer4");

// Score Modal
const scoreModal = document.getElementById("scoreModal");
const scoreModalClose = document.getElementById("scoreModalClose");
const menuBtn = document.getElementById("menu-button");
const scoreModalBody = document.getElementById("scoreModal-body");

// Current question text
const currentQuestionContainer = document.getElementById("current-question-container");
const totalQuestions = document.getElementById("totalQuestions");
const questionNoText = document.getElementById("questionNo");

// Error Modal
const errorModal = document.getElementById("errorModalRC4");
const errorModalClose = document.getElementById("errorModalClose");

const loadingDiv = document.getElementById("loading-div");

// stop keyboard commands
window.onload = function setLoading() {
  setTimeout(loadingFinished, 3000);
  console.log("interval set");
};

function loadingFinished(){
  loadingDiv.classList.add("hidden");
}

  function getParams(){
    // retrieve quiz data from local storage
    let quizParams = JSON.parse(localStorage.getItem('quizParams'));

    // set the parameters
    sessionToken = quizParams.token;
    quizLength = quizParams.quizLength;
    quizCategory = quizParams.quizCategory;
    difficulty = quizParams.difficulty;
    quizType = quizParams.quizType;

    return quizParams;
}

async function getData(API_URL) {
  const queryString = `${API_URL}`;

  const response = await fetch(queryString);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  console.log("response code: ", data.response_code);
//   if session token needs to be reset, call the error modal
  if(data.response_code === 4){
    console.log("Response Code 4 Error");
    errorModal.classList.add("show");
    errorModal.style.display = "block";
    errorModalClose.addEventListener("click", goToHomepage);
  }
  else {
    // not response code 4
    return data;
  }
}


async function refreshToken(){
    console.log("Response Code 4 Error called");
    const resetResponse = await fetch((tokenResetURL + sessionToken), {
      method: "GET"
    });
    console.log(`Token reset successful!"
      URL: ${tokenResetURL}${sessionToken}`);
      // reload the page to show loading div and avoid too many api calls
      location.reload();
    if (!resetResponse.ok) {
        throw new Error(`Error resetting session token! status: ${resetResponse.status}`);
      }
      return 0;
}

// Initial event listeners
answer1Btn.addEventListener("click", startGame);
answer2Btn.addEventListener("click", goToHomepage);

function goToHomepage(){
    window.location.href = "index.html"; 
    localStorage.clear();
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




async function startGame(){
    //get quiz parameters
    let quizParams = getParams();
    //get the URL
    let API_URL = await quizParams.url;

    console.log(API_URL);
    try{
    quizData = await getData(API_URL);
    } catch (error){
        console.error("Error:", error);
    }
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
    // add new listeners to check if answer is correct and change question and answers
    addButtonListeners();

    console.log("totalQuestions = ", totalQuestions);
    totalQuestions.innerText = quizLength;


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
        });
    }
}

function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

async function setQuestionAndAnswers() {
    // After final question
    if (questionNo >= quizLength){

        showScore();
      return 0;
    }
    
    currentQuestionContainer.style.display = "flex";
    questionNoText.innerText = questionNo + 1;

    currentQuestion = quizQuestions[questionNo];

    console.log("current question: ", currentQuestion);
    // set question text

    question.innerHTML = currentQuestion.question;

    let allAnswers = currentQuestion.incorrectAnswers.concat([currentQuestion.correctAnswer]); // Combine incorrect and correct answers
    


    // Shuffle the answers array if multiple choice
    if (quizType === "multiple"){
      for (let i = allAnswers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
      }
    // Assign answers to buttons
      answer1Btn.innerHTML = allAnswers[0];
      answer2Btn.innerHTML = allAnswers[1];
      answer3Btn.innerHTML = allAnswers[2];
      answer4Btn.innerHTML = allAnswers[3];
    }
    else{
      // If true / false, keep in same positions
      answer1Btn.innerHTML = "True";
      answer2Btn.innerHTML = "False";
    }
  

  
    questionNo++;
  }

  function calculateScorePercent(score){
    if(score === 0){
      return "0.00";
    }
    let percentage = parseFloat((score / quizLength) * 100).toFixed(2);

    return percentage;
  }

  function showScore(){

    let scorePercent = calculateScorePercent(score);
    scoreModalBody.innerHTML = `Score: <strong>${score}</strong>
    <br>
    Percentage: <strong>${scorePercent}%</strong>
    <br>
    <br>
    <span class="small-modal-text">Click the button below to return to the menu</span>`;

    console.log(scorePercent);
    scoreModal.classList.add("show");
    scoreModal.style.display = "block";

    scoreModalClose.addEventListener("click", goToHomepage);
  }


 