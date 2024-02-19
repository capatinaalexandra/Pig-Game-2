//conditii joc
//avem doi jucatori cu cate un scor curent reprezentata de valoarea zarului
//button:playgame:  la primul meci jucatorul activ este player 1, cand zarul=1=>se schimba playerul
                                                            //daca zar>1, atunci scorcurrent=scorcurent+zar
//daca se apasa pe butonul hold, valoarea curenta se adauga la total
//daca se apasa pe start, totalscor si currentscor se reseteaza la 0


let player1 = document.querySelector(".player-0")
let player2 = document.querySelector(".player-1");
let totalScore0 = document.querySelector("#totalScore-0");
let totalScore1 = document.querySelector("#totalScore-1");
let currentScore0 = document.querySelector("#currentScore-0");
let currentScore1 = document.querySelector("#currentScore-1");
let start = document.querySelector("#startGame");
let rollDice = document.querySelector("#rollDice");
let hold = document.querySelector("#hold");
let diceIm = document.querySelector(".dice");
let activePlayer, scor,scorT,gamePlay


//de cate ori se reseteaza jocul, functia startGem, aduce toate variabilele la 0
function startGame(){
    //adaugam zarului o clasa hideen pe care o setam in css ca avand display invzibil la inceputul jocului
    diceIm.classList.add('hidden');
    currentScore0.textContent=0;
    currentScore1.textContent=0;
    totalScore0.textContent=0;
    totalScore1.textContent=0

    activePlayer=0
    scor=0
    scorT=[0,0]
    gamePlay=true;

}

startGame()

function playGame() {
if(gamePlay){
//generam  aparitii aleatoare ale zarului
//Am folosit funcția Math.trunc() deoarece această funcție returnează porțiunea întreagă a funcției generate aleatoriu și 
//i-am adăugat un 1 deoarece funcția random() poate genera orice număr începând de la 0 la 1, dar în cazul nostru, 
//doar au nevoie de numere de la 1 la 6. <br>Înțelegerea variabilei zar: variabila zar va stoca numărul generat aleatoriu. 
//Să presupunem că funcția Math.random() generează numărul 0,02. Conform codului, primul 0,02 va fi înmulțit cu 6.
// Deci zarurile variabile vor avea acum o valoare de 0,12. Apoi funcția Math.trunc() va intra în joc și va face variabila zarului 0.
// Acum 1 va fi adăugat la variabila, ceea ce va face ca zarul = 1 (De asta avem nevoie ca număr pentru zarurile noastre)
const dice = Math.trunc(Math.random() * 6) + 1;
 
//afiseaza imaginea zarului stergand clasa hidden setata mai sus, apoi imaginea corecta a zarului este redata pe interfata
diceIm.classList.remove('hidden');
diceIm.src = `dice-${dice}.png`;


if(dice>1){
    scor=scor+dice
    document.getElementById(`currentScore-${activePlayer}`).textContent=scor;

}else if(dice===1){
    switchUser()
}

}
}


function switchUser() {
  if(activePlayer===0){
    activePlayer=1
  }else{
    activePlayer=0
  }

    scor=0
    document.getElementById(`currentScore-${activePlayer}`).textContent=scor

}


function holdP(){
   if(gamePlay){
        scorT[activePlayer]=scorT[activePlayer]+scor
        scor=0
        document.getElementById(`totalScore-${activePlayer}`).textContent=scorT[activePlayer]
        
   

    if(scorT[activePlayer]>=100){
        alert(`activeplayer wins`)
                                }
}else{
    switchUser()
     }


}


//de cate ori se reseteaza jocul, functia startGem, aduce toate variabilele la 0
function startGame(){
    //adaugam zarului o clasa hideen pe care o setam in css ca avand display invzibil la inceputul jocului
    diceIm.classList.add('hidden');
    currentScore0.textContent=0;
    currentScore1.textContent=0;
    totalScore0.textContent=0;
    totalScore1.textContent=0

    activePlayer=0
    scor=0
    scorT=[0,0]
    gamePlay=true;

}

startGame()//apelam aici, deoarece este utilizata si in momentul incarcarii jocului