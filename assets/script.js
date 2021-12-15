var catFactsButton = document.querySelector("#cat-facts");
var dogPicsButton = document.querySelector("#dog-pics");
var funnyJokesButton = document.querySelector("#funny-jokes");
var paragraphEl = document.createElement("p");
var backButton = document.getElementById("back-button");
var localStorageJokes = localStorage.getItem('savedJokes');
var savedJokes;

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
    document.getElementById("save-button-dog").style.display = "none";
    document.getElementById("save-button-joke").style.display = "none";
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
    document.getElementById("save-button-cat").style.display = "none";
    document.getElementById("save-button-joke").style.display = "none";
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
    document.getElementById("save-button-cat").style.display = "none";
    document.getElementById("save-button-dog").style.display = "none";
};

function displayFunnyJoke(funnyStuff) {
    var firstFunnyThing = funnyStuff.value;
    document.body.appendChild(paragraphEl);
    paragraphEl.classList.add('box');
    paragraphEl.innerHTML = firstFunnyThing;
}
//joke save button
document.getElementById('save-button-joke').addEventListener("click", saveFunnyJoke);

function saveFunnyJoke() {
    if (!localStorageJokes) {
        savedJokes = [];
    } else {
        savedJokes = JSON.parse(localStorageJokes);
    }
    savedJokes.push(paragraphEl.innerHTML);
    localStorage.setItem('savedJokes', JSON.stringify(savedJokes));

}

function goBackToMainPage() {
    window.location.reload();
}

dogPicsButton.addEventListener("click", getDogPicture);

catFactsButton.addEventListener("click", getCatFact);

console.log("Hey - we made it to the end of our JS!");