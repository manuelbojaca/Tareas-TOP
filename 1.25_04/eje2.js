(function contraseña (str) {
    str.replace(/ /g, "").forEach(element => {
        if (element == 'a'){
            element = 4;
        }else if (element == 'e'){
            element = 3;
        }else if (element == 'i'){
            element = 1;
        }else if (element == 'o'){
            element = 0;
        }
    });
    return str + '';
})();

console.log(contrasena("hola")); // "h0l4"
console.log(contrasena("esta es una prueba")); // "3st43sun4pru3b4"
console.log(contrasena("")); // ""