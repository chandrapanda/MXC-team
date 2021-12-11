var catFactsButton = document.querySelector("#cat-facts");
var dogPicsButton = document.querySelector("#dog-pics");
var funnyJokesButton = document.querySelector("#funny-jokes");

function getCatFact() {
    var catFactAPI = "https://catfact.ninja/fact";
    fetch(catFactAPI)
    .then(response => response.json())
    .then(data => console.log(data));
}


// dogPicsButton.addEventListener("click", );

funnyJokesButton.addEventListener("click",funnyJokes);
   function funnyJokes() {
       var jokes = "https://api.chucknorris.io/jokes/random"
       fetch(jokes)
       .then(response => response.json())
       .then(data => console.log(data));
   };


catFactsButton.addEventListener("click", getCatFact);

console.log("Hey - we made it to the end of our JS!");