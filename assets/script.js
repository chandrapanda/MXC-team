var catFactsButton = document.querySelector("#cat-facts");
var dogPicsButton = document.querySelector("#dog-pics");
var funnyJokesButton = document.querySelector("#funny-jokes");
var catFact = document.createElement("p");

function getCatFact() {
    var catFactAPI = "https://catfact.ninja/fact";
    fetch(catFactAPI)
    .then(response => response.json())
    .then(function(data) {
        displayCatFact(data)
    });


    document.getElementById("button-container").style.display = "none";
    document.getElementById("back-button").style.display = "block";
}

function savedCatFact() {
    if (!localStorage.setItem()) {

    }
}

function displayCatFact(kittyStuff) {
    var firstCatFact = kittyStuff.fact;
    document.body.appendChild(catFact);
    catFact.innerHTML = firstCatFact;
}

function getDogPicture() {
    var getDogAPI = "https://dog.ceo/api/breeds/image/random";
    fetch(getDogAPI)
    .then(response => response.json())
    .then(function(data) {
        displayDogPicture(data)
    });

    document.getElementById("button-container").style.display = "none";
    document.getElementById("back-button").style.display = "block";
}

function displayDogPicture(doggyStuff) {
    var firstDogpicture = doggyStuff.message;
    // we should discuss changing "catFact" to a more universal name
    document.body.appendChild(catFact);
    catFact.innerHTML ='<img src="' + firstDogpicture + '" alt="a random image of a dog">';
}


var backButton = document.getElementById("back-button");
backButton.addEventListener("click", goBackToMainPage);

funnyJokesButton.addEventListener("click",funnyJokes);
function funnyJokes() {
    var jokes = "https://api.chucknorris.io/jokes/random"
    fetch(jokes)
    .then(response => response.json())

    .then(function(data) {
        displayFunnyJoke(data)
    });
    
    document.getElementById("button-container").style.display = "none";
    document.getElementById("back-button").style.display = "block";
};

function displayFunnyJoke(funnyStuff) {
    var firstFunnyThing = funnyStuff.value;
    // we should discuss changing "catFact" to a more universal name
    document.body.appendChild(catFact);
    catFact.innerHTML = firstFunnyThing;
}


function goBackToMainPage() {
    window.location.reload();
}

dogPicsButton.addEventListener("click", getDogPicture );

// funnyJokesButton.addEventListener("click", );

catFactsButton.addEventListener("click", getCatFact);

console.log("Hey - we made it to the end of our JS!");