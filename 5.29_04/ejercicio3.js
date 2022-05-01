function createGame () {
    var secretNum = Math.floor(Math.random() * (100 - 1) + 1);
    console.log(secretNum);
    return function (num) {
        if (num < secretNum){
            return 'Muy bajo!';
        }else if (num > secretNum){
            return 'Muy alto!';
        }else if (num === 'num'){
            return secretNum;
        }
        else if (num === 'win'){
            return 'Lo adivinaste, felicitaciones!';
        }
    }
}

//Comienza el juego
const guess = createGame();
console.log('Elija un numero del 1 al 100 ', guess('num'));
const usNum = prompt('Ingrese un numero valido: ');
while(usNum !== guess('num')){
    guess(usNum);
    usNum = window.prompt('Ingrese un numero valido: ');
}
console.log(guess('win'));

 // numero secreto: 5
console.log(guess);
console.log(guess(8)); // "Muy alto!"
console.log(guess(4)); // "Muy bajo!"
console.log(guess(99)); // "Lo adivinaste, felicitaciones!"