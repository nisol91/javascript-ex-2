var firstPl =  Math.floor(Math.random() * 6) + 1;
var secondPl = Math.floor(Math.random() * 6) + 1;


document.getElementById('number1').innerHTML = 'Il numero di Player 1 è: ' + firstPl;
document.getElementById('number2').innerHTML = 'Il numero di Player 2 è: ' + secondPl;




if (firstPl > secondPl) {
  document.getElementById('result').innerHTML = 'Ha vinto Player 1!';
} else if (firstPl < secondPl) {
  document.getElementById('result').innerHTML = 'Ha vinto Player 2!';
} else {
  document.getElementById('result').innerHTML = 'Pari! :(';
}
