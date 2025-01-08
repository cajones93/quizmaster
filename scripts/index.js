

let submitButton = document.getElementById("formSubmit");
let quizParamForm = document.getElementById("quiz-param-form");
let quizData; 


submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    getAPIURL();
});

// generate a session token
async function getSessionToken(){
    const response = await fetch("https://opentdb.com/api_token.php?command=request");

    const sessionToken = await response.json();

    const sessionTokenValue = sessionToken.token;

    if (response.ok) {
        console.log(sessionTokenValue);
        return sessionTokenValue;
    } else {
        throw new Error(sessionToken.error);
    }
}

async function getAPIURL(){


    let noOfQuestions = document.getElementById("noOfQuestions");
    let categoryChoice = document.getElementById("categoryChoice");
    let difficultyChoice = document.getElementById("difficultyChoice");
    let quizTypeChoice = document.getElementById("quizTypeChoice");

    let categoryID = setCategoryID(categoryChoice.value);

    console.log(noOfQuestions.value);
    console.log(categoryChoice.value);
    console.log(categoryID);
    console.log(difficultyChoice.value);
    console.log(quizTypeChoice.value);

    // Wait for session token
    const sessionToken = await getSessionToken(); // Await the promise

    // build the api url using the session token
    let API_URL = `https://opentdb.com/api.php?amount=${noOfQuestions.value}&category=${categoryID}&difficulty=${difficultyChoice.value}&type=${quizTypeChoice.value}&token=${sessionToken}`;
    
    console.log(sessionToken);
    console.log(API_URL);

    // wait for quiz data
    

    //set quiz data into local storage
    localStorage.setItem("API_URL", API_URL);
    

};

// assign the correct category ID based on category choice
function setCategoryID (categoryChoice){
    if(categoryChoice === "scienceAndNature"){
        return 17;
    }
    else if(categoryChoice === "videoGames"){
        return 15;
    }
    else if(categoryChoice === "music"){
        return 12;
    }
    else if(categoryChoice === "film"){
        return 11;
    }
}