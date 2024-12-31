

let submitButton = document.getElementById("formSubmit");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
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


    let API_KEY = `https://opentdb.com/api.php?amount=${noOfQuestions.value}&category=${categoryID}&difficulty=${difficultyChoice.value}&type=${quizTypeChoice.value}`

    console.log(API_KEY);
})

function setCategoryID (categoryChoice){
    if(categoryChoice === "animals"){
        return 27;
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

