
// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var arrayCognomi = [
    "Bianchi",
    "Neri",
    "Rossi",
    "Verdi",
    "Gialli"
];

var cognome = prompt("Qual è il tuo cognome?");

arrayCognomi.push(cognome[0].toUpperCase() + cognome.slice(1));


for (var i = 0; i < arrayCognomi.length; i++) {
    
    arrayCognomi.sort();
    
    var li = document.createElement('li');

    li.appendChild(document.createTextNode(`${arrayCognomi[i]} è il ${i + 1}° cognome`)) ;

    document.getElementById("cognomi").appendChild(li);
    
}

// console.log(arrayCognomi.sort());




// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
// Consigli del giorno:
// Consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.