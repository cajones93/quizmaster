

const submitButton = document.getElementById("formSubmit");
const quizParamForm = document.getElementById("quiz-param-form");
const selectElements = document.querySelectorAll('select');


// check parameters are selected each time user changes an option, enable submit button when all parameters are selected
selectElements.forEach(select => {
    select.addEventListener("change", () => {
      if (allParamsSelected()) {
        submitButton.classList.remove("disabled"); 
      } else {
        submitButton.classList.add("disabled"); 
      }
    });
  });

// check that user has selected a parameter
function allParamsSelected() {
    return Array.from(selectElements).every(select => select.value !== select.options[0].value);
  }


submitButton.addEventListener("click", (e) => {
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

// build the api url and pass it into local storage for the game page to retrieve
async function getAPIURL(){


    let noOfQuestions = document.getElementById("noOfQuestions");
    let categoryChoice = document.getElementById("categoryChoice");
    let difficultyChoice = document.getElementById("difficultyChoice");
    let quizTypeChoice = document.getElementById("quizTypeChoice");

    let categoryID = setCategoryID(categoryChoice.value);

    // for testing
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
    

    //set data into local storage
    localStorage.setItem("API_URL", API_URL);
    localStorage.setItem("quizLength", noOfQuestions.value);
    localStorage.setItem("quizCategory", categoryChoice.value);
    localStorage.setItem("difficultyChoice", difficultyChoice.value);
    localStorage.setItem("quizType", quizTypeChoice.value);
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