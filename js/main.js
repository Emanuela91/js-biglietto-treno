// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// Variabili e costanti
let chilometri, eta, costoBiglietto, costoBigliettoMin, costoBigliettoAnz;
const costoKm = 0.21;
const minorenni = 17;
const anziano = 65;

// Percorrenza in Km 
chilometri = parseInt(prompt("Quanti chilometri vuoi percorrere?"));

console.log(chilometri);

// Età del passeggero
eta = parseInt(prompt("Inserisci la tua età"));

console.log(eta);


// Costo del biglietto, somma Km e costo al Km
costoBiglietto = chilometri * costoKm;


console.log(costoBiglietto);


// Costo del biglietto con sconto
// Minorenne o Anziano
if(eta > minorenni ) {

}