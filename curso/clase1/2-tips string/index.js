// Los string son inmutables

let palabra = "algun texto";

console.log(palabra[3]);

// no se puede porque son inmutables
palabra[0] = "A";

// para cambiar se reeemplazar.

// lenght

// Ejercicio, recorrer e imprimir
// cada letra


//Codigo de Boris
let cont = 0;
while(cont < palabra.length){
    console.log(palabra[cont]);
    cont++;
}

// codigo Fernando
for (let i = 0; i < palabra.length; i++) {
    console.log(palabra[i]);
}

//macarena
let string = "string";


//Ivan Velazquez
console.log(palabra.split(''));