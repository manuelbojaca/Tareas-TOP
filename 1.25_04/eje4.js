/*Ejercicio 4
Escribir una función llamada generarCodigo que reciba un string y retorne un nuevo string con las dos primeras letras de 
cada palabra.*/

function generarCodigo (str) {
    var ind = 2;
    var res = str.substr(0, 2);
    var x;

    while (ind > 1) {
        ind = str.indexOf(' ', ind) + 1;
        if(ind > 0){
            res = res + str.substr(ind, 2);
        }
    }
    return res;
}

console.log(generarCodigo("hola mundo")) // "homu"
console.log(generarCodigo("juan david berbeo")) // "judabe"
console.log(generarCodigo("")) // ""

