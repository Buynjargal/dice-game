// Togloomiin buh gazar ashiglagdah buh huvisagchdiig end zarlay
//Togloom duussan esehiig hadgalah toloviin huvisagch
var isNewGame;
// henii eelj ve gedgiig hadgalna.
var activePlayer;
//2 toglogchiin tsugluulsan onoonuud bna
var scores;
//Idevhtei toglogchiin tsugluulj bui eeljiin onoo
var roundScore;

//Shoonii zurgiig uzuuleh elementiig dom oos haij olodd end hadgalya.
var diceDom = document.querySelector(".dice");

//Togloomiig ehluulne.
initGame();

//Togloomiig shineer ehlehed beltgene.
function initGame(){
    //Togloom ehellee gedeg tolovt oruulna.
    isNewGame = true;

    // Toglogchiin eeljiig hadgalah huvisagch, 1dugeer toglogchiig 0, 2 dugaar toglogchiig 1 gey.
    activePlayer = 0;

    // Toglogchdiin tsugluulsan onoog hadgalah huvisagch
    scores = [0, 0];

    // Toglogchiin eeljindee tsugluulj bga onoog hadgalah huvisagch
    roundScore = 0;

    // Program ehlehed beltgey
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    //Toglogchiin neriig butsaaj gargah
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    //winner text iig arilgah
    document.querySelector(".player-0-panel").classList.remove('winner');
    document.querySelector(".player-1-panel").classList.remove('winner');

    //Ulaan tseg buyu eeljiig hoyr toglogchdoos hasah
    document.querySelector(".player-0-panel").classList.remove('active');
    document.querySelector(".player-1-panel").classList.remove('active');

    //Toglogchiin eeljiig gargah buyu ulaan tsegiig gargah
    document.querySelector(".player-0-panel").classList.add('active');

    diceDom.style.display = "none";

}

//Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function(){

    if(isNewGame){
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
            switchToNextPlayer();
        }
    } else {
        alert("Togloom duussan bna.New game iig darj shineer ehlenuu.");
    }

});

//HOLD tovchnii event listener
document.querySelector(".btn-hold").addEventListener("click", function(){
    if(isNewGame){
        //ug toglogchiin tsugluulsan onoog global onoon der ni nemne.
        scores[activePlayer] = scores[activePlayer] + roundScore;

        //Delgets der onoog ni oorchilno.
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

        //Ug toglogch hojson esehiig shalgah. onoo ni 100gaas ih eseh.
        if(scores[activePlayer] >= 20){
        //Togloomiig duussan tolovt oruulna
        isNewGame = false;

        //Yalagch gesen text iig nerniih ni orond gargana
        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!"; 
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");

    } else {
        //Toglogchiin eeljiig solino
        switchToNextPlayer();
        }
    }else{
        alert("Togloom duussan bna.New game iig darj shineer ehlenuu. hold");
    }

});

//Ene function ni togloh eeljiig ngo toglogch ruu shiljulne.
function switchToNextPlayer(){
    //ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono.
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    //toglogchiin eeljiig ngo toglogch ruu shiljulne.
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    //Ulaan tsegiig shiljuuulne
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    //Shoog tur alga bolgono.
    diceDom.style.display = "none";
};

// NEW GAME buyu Shine togloom ehluuleh event listener
document.querySelector(".btn-new").addEventListener("click", initGame);

