var catFactsButton = document.querySelector("#cat-facts");
var dogPicsButton = document.querySelector("#dog-pics");
var funnyJokesButton = document.querySelector("#funny-jokes");
var paragraphEl = document.createElement("p");
var backButton = document.getElementById("back-button");


function getCatFact() {
    var catFactAPI = "https://catfact.ninja/fact";
    fetch(catFactAPI)
    .then(response => response.json())
    .then(function(data) {
        displayCatFact(data)
    });

    document.getElementById("button-container").style.display = "none";

    document.getElementById("back-button-container").style.display = "block";
}

function displayCatFact(kittyStuff) {
    var firstCatFact = kittyStuff.fact;

    document.getElementById('API-container').appendChild(paragraphEl);
    paragraphEl.classList.add('box');
    paragraphEl.innerHTML = firstCatFact;
}

function getDogPicture() {
    var getDogAPI = "https://dog.ceo/api/breeds/image/random";
    fetch(getDogAPI)
    .then(response => response.json())
    .then(function(data) {
        displayDogPicture(data)
    });

    document.getElementById("button-container").style.display = "none";

    document.getElementById("back-button-container").style.display = "block";
}

function displayDogPicture(doggyStuff) {
    var firstDogpicture = doggyStuff.message;
    document.getElementById('API-container').appendChild(paragraphEl);
    paragraphEl.innerHTML ='<img src="' + firstDogpicture + '" alt="a random image of a dog">';
    paragraphEl.classList.add('dog-pictures');
}

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
    document.getElementById("back-button-container").style.display = "block";
};

function displayFunnyJoke(funnyStuff) {
    var firstFunnyThing = funnyStuff.value;

    document.body.appendChild(paragraphEl);
    paragraphEl.innerHTML = firstFunnyThing;
}

function saveFunnyJoke () {
    var savedJokes = localStorage.setItem('savedJokes');
}

function goBackToMainPage() {
    window.location.reload();
}

dogPicsButton.addEventListener("click", getDogPicture);

catFactsButton.addEventListener("click", getCatFact);

console.log("Hey - we made it to the end of our JS!");