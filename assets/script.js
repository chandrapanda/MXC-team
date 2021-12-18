//Global variables
var catFactsButton = document.querySelector("#cat-facts");
var dogPicsButton = document.querySelector("#dog-pics");
var funnyJokesButton = document.querySelector("#funny-jokes");
var paragraphEl = document.createElement("p");
var backButton = document.getElementById("back-button");
var homeButton = document.getElementById("home-button");

//Storage Tools
var localStorageJokes = localStorage.getItem('savedJokes');
var savedJokes;
var localStorageCat = localStorage.getItem("savedCat");
var savedCat;
var localStoragePuppers = localStorage.getItem('savedPuppers');
var savedPuppers;

//Button event listeners
homeButton.addEventListener("click", goBackToMainPage);
backButton.addEventListener("click", goBackToMainPage);
funnyJokesButton.addEventListener("click",funnyJokes);
dogPicsButton.addEventListener("click", getDogPicture);
catFactsButton.addEventListener("click", getCatFact);
document.getElementById('save-button-dog').addEventListener("click", savePupper);
document.getElementById("saved-items").addEventListener("click",displaySavedItems);
document.getElementById('save-button-joke').addEventListener("click", saveFunnyJoke);
document.getElementById('save-button-cat').addEventListener("click", savedCatFact);

// Display saved Items 
function displaySavedItems() {
 document.getElementById("saved-stuff").style.display= "block";
 renderSavedCats()
 renderSavedJokes()
 renderSavedPuppers()
}

//Get and display a cat fact
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

//Get and display a dog picture
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
//Save functions 
function saveFunnyJoke() {
    if (!localStorageJokes) {
        savedJokes = [];
    } else {
        savedJokes = JSON.parse(localStorageJokes);
    }
    savedJokes.push(paragraphEl.innerHTML);
    localStorage.setItem('savedJokes', JSON.stringify(savedJokes));
    alert('Saved! Click "Saved Items" at the top of the page to see your collection.');
}

function savePupper() {
    if (!localStoragePuppers) {
        savedPuppers = [];
    } else {
        savedPuppers = JSON.parse(localStoragePuppers);
    }
    savedPuppers.push(paragraphEl.innerHTML);
    localStorage.setItem('savedPuppers', JSON.stringify(savedPuppers));
    alert('Saved! Click "Saved Items" at the top of the page to see your collection.');
}
function savedCatFact() {
    if (!localStorageCat) {
       savedCat = [];  
    } else {
        savedCat = JSON.parse(localStorageCat);
    }
    savedCat.push(paragraphEl.innerHTML);
    localStorage.setItem('savedCat', JSON.stringify(savedCat));
    alert('Saved! Click "Saved Items" at the top of the page to see your collection.');
}

//Render saved items to page 
 function renderSavedJokes() {
    var savedJokeList = JSON.parse(localStorageJokes);
    if (!savedJokeList) {
        return;
    }
    else {
        document.getElementById('joke-list').innerHTML = "Here are your saved facts";

    }
    for (var index = 0; index < savedJokeList.length; index++) {
        var listItem = document.createElement("li");
        listItem.innerHTML = savedJokeList[index];
        document.getElementById("joke-list").appendChild(listItem);
    } 
}

function renderSavedPuppers (){
    var savedPupperPics = JSON.parse (localStoragePuppers);
    if (!savedPupperPics){
        return;
    }
    else {
        document.getElementById('dog-pic-list').innerHTML = "Here are your saved facts";

    }
    for (var index = 0; index < savedPupperPics.length; index++) {
        var listItem = document.createElement ("li");
        listItem.innerHTML = savedPupperPics[index];
        document.getElementById("dog-pic-list").appendChild(listItem);
    }
}

function renderSavedCats (){
    var savedCatFacts = JSON.parse (localStorageCat);
    if (!savedCatFacts){
        return;
    }
    else {
        document.getElementById('cat-fact-list').innerHTML = "Here are your saved facts";

    }
    for (var index = 0; index < savedCatFacts.length; index++) {
        var listItem = document.createElement ("li");
        listItem.innerHTML = savedCatFacts[index];
        document.getElementById("cat-fact-list").appendChild(listItem);
    }
}

//Page refresh
function goBackToMainPage() {
    window.location.reload();
}



console.log("Hey - we made it to the end of our JS!");

