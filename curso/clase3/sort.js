const unaLista = [4,5,2,1,12] ;

// console.log(unaLista.sort());

// no tiene el criterio de programcion funcional
// sort cambia el arreglo original
console.log(unaLista);

//
//  Consigna ejercicio, crear una funcion que devuelva una lista ordenada
//  sin modificar la lista original
// 

const miFuncion = (lista) => {
    let listaAuxiliar = [...lista];
    listaAuxiliar.sort((a,b) => a-b);
    return listaAuxiliar;
}

console.log(miFuncion(unaLista));

