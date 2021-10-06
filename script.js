let deck = [];
let sumBanco = 0;
let sumGiocatore = 0;

document.addEventListener("DOMContentLoaded", initGame);

let playBtn = document.getElementById("go");
document.addEventListener("DOMContentLoaded", () => {
    playBtn.addEventListener("click", play);
});

let stopBtn = document.getElementById("go");
document.addEventListener("DOMContentLoaded", () => {
    stopBtn.addEventListener("click", stop);
});

function initGame(){
    let seeds = ["Quadri", "Fiori", "Cuori", "Picche"];
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let numValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0.5, 0.5, 0.5];

    for(let i = 0; i < seeds.length; i++){
        for(let j = 0; j < values.length; j++){
            let card = {
                Value: values[j],
                numValue: numValues[j],
                Seed: seeds[i],
            }
            deck.push(card);
        }
    }
    
    console.log(deck);
    //console.log("TDP");
    
    drawCard("#giocatore");
    drawCard("#banco");
    drawCard("#giocatore");

}

function drawCard(str){
    let bancoOrPlayer = document.body.querySelector(str);

    let index = Math.floor(Math.random() * (deck.length + 1));
    let item = deck[index];
    deck.splice(index, 1);
    let element = document.createElement("H5");
    element.classList.add("card");
    element.innerHTML = item.Value + " - " + item.Seed;
    bancoOrPlayer.appendChild(element);

    if(str == "#banco"){
        sumBanco += item.numValue;
        document.getElementById("sumBanco").innerHTML = "Punteggio: " + sumBanco;
    } else if(str == "#giocatore"){
        sumGiocatore += item.numValue;
        document.getElementById("sumGiocatore").innerHTML = "Punteggio: " + sumGiocatore;
    }
}

function play(){
    if(sumGiocatore >= 21) {
        playBtn.disabled = true;
    } else {
        drawCard("#giocatore");
    }
}

function stop(){

}
