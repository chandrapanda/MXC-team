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
}

function displayCatFact(kittyStuff) {
    var firstCatFact = kittyStuff.fact;
    document.body.appendChild(catFact);
    catFact.innerHTML = firstCatFact;
    console.log(kittyStuff.fact);
}


// dogPicsButton.addEventListener("click", );

// funnyJokesButton.addEventListener("click", );

catFactsButton.addEventListener("click", getCatFact);

console.log("Hey - we made it to the end of our JS!");