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

//Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function(){
    //1-6 dotorh sanamsargui neg too gargaj avna
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    //shoonii zurgiig web der gargaj irne.
    diceDom.style.display = "block";

    //buusan toond hargalzah shoonii zurgiig web der gargaj irne.
    diceDom.src = "dice-" + diceNumber + ".png";

    //Buusan too 1 ees yalgaatai bol idevhtei toglogchiin eeljiin onoog nemegduulne.
    if(diceNumber !== 1){
        // 1ees yalgaatai too buulaa. Buusan toog toglogchid nemj ogno.
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    }else{
        //1 buusan bol toglogchiin eeljjig end solij ogno.

        //ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono.
        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;


        //toglogchiin eeljiig ngo toglogch ruu shiljulne.
        //herev idevhtei toglogch ni 0 bvl 1 bolgono
        //herev idevhtei toglogch ni 1 bvl 0 bolgono

        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

        //Ulaan tsegiig shiljuuulne
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");

        //Shoog tur alga bolgono.
        diceDom.style.display = "none";



    }
});
