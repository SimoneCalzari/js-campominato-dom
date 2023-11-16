'use strict';

//INIZIO FUNZIONI

// FUNZIONE CREAZIONE,INSERIMENTO E AGGIUNTA EVENTLISTENER ALLE CELLE
function newElements(typeElement, classElement, numElements) {
  //CICLO FOR PER CREARE E INSERIRE UN CERTO NUMERO DI CELLE
  for (let i = 1; i <= numElements; i++) {
    const cell = document.createElement(typeElement); // CREO NUOVA CELLA
    cell.classList = classElement; // ASSEGNO LA CLASSE
    cell.innerHTML = `${i}`; // INSERISCO CONTENUTO
    field.append(cell); // INSERISCO NELL HTML DENTRO AL FIELD
    field.classList.remove('no-click'); // TOLGO AL FIELD LA CLASSE CHE IMPEDISCE DI CLICCARE CHE VIENE INSERITA A FINE PARTITA
    // EVENT LISTENER ALLE CELLE
    cell.addEventListener('click', function() {
        if (positionBombs.includes(Number(cell.innerHTML))) {
          cell.classList.add('cell-bomb'); // AGGIUNGO CLASSE PER CASO CELLA CON BOMBA
          field.classList.add('no-click'); // IMPEDISCO DI CLICCARE A FINE PARTITA
          showResult.innerHTML = `Hai perso! Grazie per aver giocato, il tuo punteggio è stato di ${counterNoBomb}`;
          // QUANDO CLICCO SU UNA BOMBA SCOPRO ANCHE TUTTE LE ALTRE
          for (let j = 1; j <= numElements; j++) {
            const div = document.querySelector(`.field div:nth-child(${j})`);
            if (positionBombs.includes(Number(div.innerHTML))) {
              div.classList.add('cell-bomb');
            }
          }
        } 
        else {
          cell.classList.add('cell-no-bomb'); // AGGIUNGO CLASSE PER CASO CELLA SENZA BOMBA
          cell.classList.add('no-click'); // IMPEDISCO DI CLICCARE SU UNA CELLA GIA CLICCATA
          counterNoBomb++; // INCREMENTO PUNTEGGIO AD OGNI CELLA NON BOMBA CLICCATA
          showResult.innerHTML = `Continua così! Il tuo punteggio al momento è di ${counterNoBomb}`;
          // CASO TUTTE LE CASELLE SENZA BOMBA TROVATE
          if (counterNoBomb === numElements - numBombs) {
            showResult.innerHTML = `Ha vinto! Il tuo punteggio è stato di ${counterNoBomb}`;
          }
        }
      } 
    )
  }
}


// FUNZIONE CHE AGGIUNGE UN EVENTLISTENER AL BOTTONE PLAY QUANDO CLICCO PER GENERARE IL GIOCO
function myGame() {
  button.addEventListener('click', 
    function() {
      counterNoBomb = 0; // AZZERO PUNTEGGIO ALL'INIZIO DI OGNI PARTITA
      showResult.innerHTML = 'Seleziona la difficoltà e poi clicca su Play per cominciare a giocare !';
      field.innerHTML = ''; // SVUOTO FIELD ALTRIMENTI ANDREI AD AGGIUNGERE CELLE AD UN SECONDO CLICK
      field.classList.add('active'); // FIELD DI DEFAULT NON VISIBILE, AGGIUNGO CLASSE PER RENDERLO VISIBILE
      // CASO DIFFICOLTà DIFFICILE
      if (select.value === 'Hard'){
        newElements('div', 'cell-7', 49);
        createBombs(numBombs, 49);
        console.log(positionBombs);
      } 
      // CASO DIFFICOLTà MEDIA
      else if (select.value === 'Medium'){
        newElements('div', 'cell-9', 81);
        createBombs(numBombs, 81);
        console.log(positionBombs);
      }
      // CASO DIFFICOLTà FACILE
      else {
        newElements('div', 'cell-10', 100);
        createBombs(numBombs, 100);
        console.log(positionBombs);
      }
    }
  )
}


// FUNZIONE CALCOLO NUMERO RANDOM TRA DUE NUMERI, ESTREMI COMPRESI
function randomTraNumeriCompresi(inf,sup) {
  const numRandom = inf + Math.floor(Math.random() * (sup - inf + 1));
  return numRandom;
}


// FUNZIONE PER GENERARE ARRAY CON POSIZIONE BOMBE
function createBombs(numBombs, maxCells) {
  positionBombs = [];
  while (positionBombs.length < numBombs) {
    const bomb = randomTraNumeriCompresi(1, maxCells);
    if (!positionBombs.includes(bomb)) {
      positionBombs.push(bomb);
    }
  }
}

//FINE FUNZIONI




// LOGICA PROGRAMMA

// VARIABILI DEGLI ELEMENTI DEL DOM UTILIZZATI NELLA FUNCTION
const field = document.querySelector('div.field');
const button = document.querySelector('button');
const select = document.querySelector('select');
const showResult = document.getElementById('vinto-perso')


const numBombs = 16; // NUMERO DI BOMBE DA INSERIRE
let positionBombs = []; // POSIZIONI BOMBE
let counterNoBomb = 0; // PUNTEGGIO


// CHIAMO LA FUNZIONI PER IL MIO GIOCO
myGame();


//TODO: CODICE DA RIVEDERE PER EVITARE LA PRIMA MACRO FUNZIONE CHE FA TROPPE COSE!!!!









