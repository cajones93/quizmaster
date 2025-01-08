let startButton = document.getElementById("startBtn");
let backButton = document.getElementById("backBtn");



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

// startButton.addEventListener("click", (e) => {

//     startGame();

// })

async function startGame(){
    
    // retrieve quiz data from local storage
    let API_URL = localStorage.getItem("API_URL");

    console.log(API_URL);

    // let quizData = await getData(API_URL);
    // let question = document.getElementById("quiz-question"); 
    // let dataQuestions = quizData.questions;

    // question.innerText = dataQuestions[Math.floor(Math.random() * noOfQuestions)];

}