const nomeUtente = prompt("Qual è il tuo nome?");
const cognomeUtente = prompt("Qual è il tuo cognome?");
const colorePreferitoUtente = prompt("Qual è il tuo colore preferito?");

const passwordGenerata = `${nomeUtente}${cognomeUtente}${colorePreferitoUtente}22`;

const spanPasswordGenerata = document.getElementById("displayPassword");

spanPasswordGenerata.innerHTML = passwordGenerata;

