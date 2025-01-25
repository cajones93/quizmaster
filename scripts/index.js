/*jshint esversion: 8*/

const submitButton = document.getElementById("formSubmit");
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

// check that a valid parameter has been selected
function allParamsSelected() {
  return Array.from(selectElements).every(select => select.value !== select.options[0].value);
}

submitButton.addEventListener("click", async (e) => {
  e.preventDefault(); // Prevent default form submission behavior
    await getAPIURL();
    window.location.href = "game.html"; // Redirect to game page after successful submission
});

// generate a session token
async function getSessionToken() {
  const response = await fetch("https://opentdb.com/api_token.php?command=request");

  const sessionToken = await response.json();

  const sessionTokenValue = sessionToken.token;

  if (response.ok) {
    // return the token value
    return sessionTokenValue;
  } else {
    throw new Error(sessionToken.error);
  }
}

// build the api url and pass it into local storage for the game page to retrieve
async function getAPIURL() {


  let noOfQuestions = document.getElementById("noOfQuestions");
  let categoryChoice = document.getElementById("categoryChoice");
  let difficultyChoice = document.getElementById("difficultyChoice");
  let quizTypeChoice = document.getElementById("quizTypeChoice");

  let categoryID = setCategoryID(categoryChoice.value);

  // Wait for session token
  const sessionToken = await getSessionToken();

  // build the api url using the session token
  let API_URL = `https://opentdb.com/api.php?amount=${noOfQuestions.value}&category=${categoryID}&difficulty=${difficultyChoice.value}&type=${quizTypeChoice.value}&token=${sessionToken}`;


  const quizParams = {
    url: API_URL,
    token: sessionToken,
    quizLength: noOfQuestions.value,
    quizCategory: categoryChoice.value,
    difficulty: difficultyChoice.value,
    quizType: quizTypeChoice.value
  };

  //set data into session storage
  localStorage.setItem("quizParams", JSON.stringify(quizParams));

  return 0;
}

// assign the correct category ID based on category choice
function setCategoryID(categoryChoice) {
  if (categoryChoice === "generalKnowledge") {
    return 9;
  } else if (categoryChoice === "videoGames") {
    return 15;
  } else if (categoryChoice === "music") {
    return 12;
  } else if (categoryChoice === "scienceAndNature") {
    return 17;
  }
}