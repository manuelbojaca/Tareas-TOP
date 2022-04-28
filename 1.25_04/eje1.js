/*Ejercicio 1
Escribe una función llamada numPasos que reciba un número (entero positivo) y que retorne el número de pasos necesario 
para reducirlo a cero siguiendo estas 

instrucciones:

Si el número es par, dividirlo por 2, de lo contrario, restarle 1*/


function numPasos (num) {
    let div = 1;
    while (num > 1){
        div++;
        if (num % 2 !== 0) {
            num--;
        }else {
            num = num / 2;
        }
    }
    return div;
}

console.log(numPasos(14)); // retorna 6
console.log(numPasos(8)); // returna 4
console.log(numPasos(123)); // retorna 12
