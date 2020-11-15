{

/* Function */

function playGame(playerImput){
    clearMessages();

function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }

    else if(argMoveId == 2){
        return 'papier';
    }

    else if(argMoveId == 3){
        return 'nożyce';
    }
}

/* computer */

const randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

const computerMove = getMoveName(randomNumber);


printMessage('Mój ruch to: ' + computerMove);

/* player */
/*
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
*/

const playerMove = getMoveName(playerImput);

printMessage('Twój ruch to: ' + playerMove);

/* results */

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem' + argComputerMove + ', a ty ' + argPlayerMove);
if( argComputerMove == 'kamień' && argPlayerMove == 'papier') {
    printMessage('Ty Wygrywasz');
} else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    printMessage('Ty Wygrywasz');
} else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    printMessage('Ty Wygrywasz');
} else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
    printMessage('Przegrywasz');
} else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
    printMessage('Przegrywasz');
} else if( argComputerMove == 'papier' && argPlayerMove == 'kamień') {
    printMessage('Przegrywasz');
} else if(argComputerMove == argPlayerMove) {
    printMessage('Remis');
} else {
    printMessage('Gra nierostrzygnięta');
}}

displayResult(computerMove, playerMove);
}
document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1');
  });

document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
  });

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3');
  });

}