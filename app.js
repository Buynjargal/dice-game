// Toglogchiin eeljiig hadgalah huvisagch, 1dugeer toglogchiig 0, 2 dugaar toglogchiig 1 gey.
var activePlayer = 0;

// Toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];

// Toglogchiin eeljindee tsugluulj bga onoog hadgalah huvisagch
var roundScore = 0;

// Shoonii ali talaaraa buusniig hadgalah huvisagch. 1-6 gesen utgiig ene huvisagchid sanamsarguigeer uusgej ogno.
var diceNumber = Math.floor(Math.random() * 6) + 1;


// Program ehlehed beltgey
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function(){
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";

    //alert("shoo buulaa........." + diceNumber);
});

