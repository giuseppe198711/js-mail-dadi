// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

var email_utente = prompt("Inserisci la tua mail");
console.log(email_utente);

var emails = ["elisabetta", "enrico", "samuele"];

var mail_trovata=false;

for (var i = 0; i<emails.length; i++) {

  if(email_utente == emails[i]) {
    mail_trovata=true;
  }
}
console.log(mail_trovata);

if (mail_trovata == false){
  console.log("email non trovata");
} else {
  console.log("email trovata");
}

// == confronto
