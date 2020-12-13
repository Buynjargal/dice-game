// Toglogchiin eeljiig hadgalah huvisagch, 1dugeer toglogchiig 0, 2 dugaar toglogchiig 1 gey.
var activePlayer = 0;

// Toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];

// Toglogchiin eeljindee tsugluulj bga onoog hadgalah huvisagch
var roundScore = 0;

// Shoonii ali talaaraa buusniig hadgalah huvisagch. 1-6 gesen utgiig ene huvisagchid sanamsarguigeer uusgej ogno.
var dice = Math.floor(Math.random() * 6) + 1;

//<div class="player-score" id="score-0">43</div>
// document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").textContent = 0;
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;


document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;


document.querySelector(".dice").style.display = "none";




console.log("Shoo: " + dice);

