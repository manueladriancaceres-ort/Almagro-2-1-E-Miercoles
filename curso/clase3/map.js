const unaLista = [4,5,2,1,12] ;
console.log(unaLista.map(numero => numero + 100));
console.log(unaLista);

const listaProductos = [
    {codigo:1,importe:500,desc:"medias"},
    {codigo:1,importe:3000,desc:"pantalon"},
    {codigo:1,importe:15000,desc:"zapatillas"},
    {codigo:1,importe:2000,desc:"remera"},
]

const var1 = 100;
const var2 = 14000;
const var3 = "pantalon"
const frase = `codigo ${var1} importe ${var2} descripcion ${var3} `;
console.log(frase);

// 
// funcion que devuelva una lista de string
// codigo:1,importe:500,desc:"medias" 
// utilizando map
// 
function devolverString(listita){
    return listita.map(prod => `Codigo ${prod.codigo} Importe ${prod.importe} Descripcion ${prod.desc}`)
}

console.log(devolverString(listaProductos)); 


// forma imperativos
function imperativa(unaLista) {
    const listaNueva = [];
    for (let i = 0; i < unaLista.length; i++) {
        listaNueva.push(unaLista[i]+100);
    }
    return listaNueva;
}

console.log(imperativa(unaLista)); 
