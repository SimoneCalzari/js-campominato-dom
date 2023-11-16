# CAMPO MINATO

## Comportamenti da riprodurre

- Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe; nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali
- In seguito l'utente clicca su una cella: 
   - Se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina
    - Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle
- La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe)
- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba

### Superbonus 1
Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle

### Superbonus 2
Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste