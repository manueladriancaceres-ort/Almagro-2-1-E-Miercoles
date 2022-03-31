const unaLista = [4,5,2,1,12] ;

console.log(unaLista.reduce( (sum,numero) => (sum+numero), 0 )  );

const listaProductos = [
    {codigo:1,importe:500,desc:"medias"},
    {codigo:1,importe:3000,desc:"pantalon"},
    {codigo:1,importe:15000,desc:"zapatillas"},
    {codigo:1,importe:2000,desc:"remera"},
]

//
// una funcion que devuelva el total de los importes
// parametro es la lista de productos
//

const miFuncion = (lista)=>{ return lista.reduce((sum,numero) => ( sum + numero.importe), 0 );}

console.log(miFuncion(listaProductos));

function calcular(lista) {
    return lista.reduce((sum,numero) => ( sum + numero.importe), 0 );
}

