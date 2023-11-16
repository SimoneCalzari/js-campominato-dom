'use strict';

//******* INIZIO FUNZIONI

// GENERA CELLA CON CLASSE CSS
function newCell(typeElement,classElement) {
  const cell = document.createElement(typeElement); 
  cell.classList = classElement; 
  return cell;
}

// GENERA LA GRIGLIA E SALVA ELEMENTI IN UN ARRAY
function createGrid(typeCell, classCell, numCells) {
  arrayCells = [];
  for (let i = 1; i <= numCells; i++) {
    const cellInGrid = newCell(typeCell, classCell);
    cellInGrid.innerHTML = `${i}`;
    field.append(cellInGrid);
    arrayCells.push(cellInGrid);
  }
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

// FUNZIONE CHE MOSTRA ROSSE TUTTE LE CELLE CON LE BOMBE
function bombCellRed(numCells) {
  for (let i = 0; i < numCells; i++) {
    if (positionBombs.includes(Number(arrayCells[i].innerHTML))) {
      arrayCells[i].classList.add('cell-bomb');
    }
  }
}

// FUNZIONE CHE CREA IL COMPORTAMENTO AL CLICK DELLE CELLE
function clickOnCell(numCells) {
  for (let i = 0; i < numCells; i++) {
    arrayCells[i].addEventListener('click', function() {
      if (positionBombs.includes(Number(arrayCells[i].innerHTML))) {
        arrayCells[i].classList.add('cell-bomb');
        field.classList.add('no-click');
        showResult.innerHTML = `Hai perso! Grazie per aver giocato, il tuo punteggio è stato di ${counterNoBomb}`;
        bombCellRed(numCells);
      } 
      else {
        arrayCells[i].classList.add('cell-no-bomb','no-click');
        counterNoBomb++;
        showResult.innerHTML = `Continua così! Il tuo punteggio al momento è di ${counterNoBomb}`;
        if (counterNoBomb === numCells - numBombs) {
          showResult.innerHTML = `Ha vinto! Il tuo punteggio è stato di ${counterNoBomb}`;
          field.classList.add('no-click'); 
        }
      }
    });
  }
}

// FUNZIONE PRINCIPALE CHE CREA LA PARTITA
function myGame() {
  button.addEventListener('click', function() {
    field.innerHTML = ''; 
    field.classList.add('active');
    field.classList.remove('no-click');
    showResult.innerHTML = 'Seleziona la difficoltà e poi clicca su Play per cominciare a giocare !';
    counterNoBomb = 0; 
    if (select.value === 'Hard') {
      createGrid('div', 'cell-7', 49);
      createBombs(numBombs, 49);
      clickOnCell(49);
    } 
    else if (select.value === 'Medium') {
      createGrid('div', 'cell-9', 81);
      createBombs(numBombs, 81);
      clickOnCell(81);
    }
    else {
      createGrid('div', 'cell-10', 100);
      createBombs(numBombs, 100);
      clickOnCell(100);
    }
  });
}

//******* FINE FUNZIONI


//******* INIZIO LOGICA PROGRAMMA

const field = document.querySelector('div.field');
const button = document.querySelector('button');
const select = document.querySelector('select');
const showResult = document.getElementById('vinto-perso')
const numBombs = 16; 
let positionBombs = [];
let arrayCells = []; 
let counterNoBomb = 0; 
myGame();









