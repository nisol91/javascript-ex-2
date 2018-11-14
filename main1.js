/*chiedi all'utente la mail, controlla che sia nella lista di chi puo accedere e invia un messaggio appropriato*/

var userMail = prompt('Inserisci la tua Email.');

var mailList = ['giorgio87@mail.com', 'luca56@mail.com', 'anna78@mail.com', 'enrico93@mail.com'];


// Metodo 1

// document.getElementById('login').innerHTML = 'Credenziali errate.';
//
// for (var i = 0; i < mailList.length; i++) {
//   if (userMail == mailList[i]) {
//     document.getElementById('login').innerHTML = 'Login Effettuato con successo.';
//   }
// }

// Metodo 2

document.getElementById('login').innerHTML = 'Login Effettuato con successo.';

if (mailList.indexOf(userMail) === -1) {
  document.getElementById('login').innerHTML = 'Credenziali errate.';
}
