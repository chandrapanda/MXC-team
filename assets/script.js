//Global variables
var catFactsButton = document.querySelector("#cat-facts");
var dogPicsButton = document.querySelector("#dog-pics");
var funnyJokesButton = document.querySelector("#funny-jokes");
var paragraphEl = document.createElement("p");
paragraphEl.classList.add('middle-area');
var homeButton = document.getElementById("home-button");
var modal = document.getElementById("myModal");

//Storage Tools
var localStorageJokes = localStorage.getItem('savedJokes');
var savedJokes;
if (!localStorageJokes) {
    savedJokes = [];
} else {
    savedJokes = JSON.parse(localStorageJokes);
}
var localStorageCat = localStorage.getItem("savedCat");
var savedCat;
if (!localStorageCat) {
    savedCat = [];
} else {
    savedCat = JSON.parse(localStorageCat);
}
var localStoragePuppers = localStorage.getItem('savedPuppers');
var savedPuppers;

if (!localStoragePuppers) {
    savedPuppers = [];
} else {
    savedPuppers = JSON.parse(localStoragePuppers);
}

//Button event listeners
homeButton.addEventListener("click", goBackToMainPage);
funnyJokesButton.addEventListener("click", funnyJokes);
dogPicsButton.addEventListener("click", getDogPicture);
catFactsButton.addEventListener("click", getCatFact);
document.getElementById("close-button").addEventListener("click", closeModal);
document.getElementById('save-button-dog').addEventListener("click", savePupper);
document.getElementById("saved-items").addEventListener("click", displaySavedItems);
document.getElementById('save-button-joke').addEventListener("click", saveFunnyJoke);
document.getElementById('save-button-cat').addEventListener("click", savedCatFact);

//Closes modal onclick
function closeModal() {
    modal.style.display = "none";
}

// Display saved Items 
function displaySavedItems() {
    document.getElementById("API-container").style.display = "none";
    document.getElementById("saved-stuff").style.display = "flex";
    renderSavedCats()
    renderSavedJokes()
    renderSavedPuppers()
}

//Get and display a cat fact
function getCatFact() {
    document.getElementById("save-button-cat").style.display = "flex";
    document.getElementById("save-button-dog").style.display = "none";
    document.getElementById("save-button-joke").style.display = "none";
    var catFactAPI = "https://catfact.ninja/fact";
    fetch(catFactAPI)
        .then(response => response.json())
        .then(function (data) {
            displayCatFact(data)
        });
}

function displayCatFact(kittyStuff) {
    var firstCatFact = kittyStuff.fact;
    document.getElementById('API-container').appendChild(paragraphEl);
    paragraphEl.classList.add('box');
    paragraphEl.innerHTML = firstCatFact;
}

//Get and display a dog picture
function getDogPicture() {
    document.getElementById("save-button-dog").style.display = "flex";
    document.getElementById("save-button-cat").style.display = "none";
    document.getElementById("save-button-joke").style.display = "none";
    var getDogAPI = "https://dog.ceo/api/breeds/image/random";
    fetch(getDogAPI)
        .then(response => response.json())
        .then(function (data) {
            displayDogPicture(data)
        });
}

function displayDogPicture(doggyStuff) {
    var firstDogpicture = doggyStuff.message;
    document.getElementById('API-container').appendChild(paragraphEl);
    paragraphEl.innerHTML = '<img src="' + firstDogpicture + '" alt="a random image of a dog">';
    paragraphEl.classList.add('dog-pictures');
}

function funnyJokes() {
    var jokes = "https://api.chucknorris.io/jokes/random"
    fetch(jokes)
        .then(response => response.json())
        .then(function (data) {
            displayFunnyJoke(data)
        });

    document.getElementById("save-button-joke").style.display = "flex";
    document.getElementById("save-button-cat").style.display = "none";
    document.getElementById("save-button-dog").style.display = "none";
};

function displayFunnyJoke(funnyStuff) {
    var firstFunnyThing = funnyStuff.value;
    document.getElementById('API-container').appendChild(paragraphEl);
    paragraphEl.classList.add('box');
    paragraphEl.innerHTML = firstFunnyThing;
}
//Save functions 
function saveFunnyJoke() {

    savedJokes.push(paragraphEl.innerHTML);
    localStorage.setItem('savedJokes', JSON.stringify(savedJokes));
    modal.style.display = "block";
}

function savePupper() {

    savedPuppers.push(paragraphEl.innerHTML);
    localStorage.setItem('savedPuppers', JSON.stringify(savedPuppers));
    modal.style.display = "block";
}
function savedCatFact() {

    savedCat.push(paragraphEl.innerHTML);
    localStorage.setItem('savedCat', JSON.stringify(savedCat));
    modal.style.display = "block";
}

//Render saved items to page 
function renderSavedJokes() {
    document.getElementById('joke-list').innerHTML = "Here are your saved jokes:";

    for (var index = 0; index < savedJokes.length; index++) {
        var listItem = document.createElement("li");
        listItem.innerHTML = savedJokes[index];
        document.getElementById("joke-list").appendChild(listItem);
    }
}

function renderSavedPuppers() {
    document.getElementById('dog-pic-list').innerHTML = "Here are your saved pictures:";

    for (var index = 0; index < savedPuppers.length; index++) {
        var listItem = document.createElement("li");
        listItem.innerHTML = savedPuppers[index];
        document.getElementById("dog-pic-list").appendChild(listItem);
    }
}

function renderSavedCats() {
    document.getElementById('cat-fact-list').innerHTML = "Here are your saved facts:";

    for (var index = 0; index < savedCat.length; index++) {
        var listItem = document.createElement("li");
        listItem.innerHTML = savedCat[index];
        document.getElementById("cat-fact-list").appendChild(listItem);
    }
}

//Page refresh
function goBackToMainPage() {
    window.location.reload();
}