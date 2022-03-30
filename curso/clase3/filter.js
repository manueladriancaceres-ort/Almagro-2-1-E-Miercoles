
const unaLista = [4,5,2,1,12] ;

console.log(unaLista.filter(numero => numero > 4 ));

//
// Ejercicio
// Hacer una funcion con dos parametros
// una lista y un numero
// la funcion tiene que devolver los menores al numero pasado
//
function filtroCheto(unaLista, numero){
    return unaLista.filter(number => number < numero)
}

console.log(filtroCheto(unaLista,5));


//
// filtro objetos
// 

const listaProductos = [
    {codigo:1,importe:500,desc:"medias"},
    {codigo:1,importe:3000,desc:"pantalon"},
    {codigo:1,importe:15000,desc:"zapatillas"},
    {codigo:1,importe:2000,desc:"remera"},
]

console.log(listaProductos.filter(producto =>  (producto.importe < 3000) ));

//
// Ejercicio
// Hacer una funcion con dos parametros
// una lista de objetos y un numero
// la funcion tiene que devolver los objectos
// con importe menores al numero pasado
//

function filtroPrecio(listaProductos, precio){
    return listaProductos.filter(producto => (producto.importe < precio));
}

console.log(filtroPrecio(listaProductos,3000));
