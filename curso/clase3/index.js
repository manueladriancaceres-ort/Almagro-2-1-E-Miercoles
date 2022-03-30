console.log("Clase 3 - programacion funcional");

// algo similar en java expresiones lambda
const unaLista = [4,5,2,1,12] ;

function listar(unaLista) {
    unaLista[0] = 100;
}

listar(unaLista);
console.log(unaLista);

//
// var texto = 1;             ->  let texto = 1;
// muchas lineas despues
// var texto = "algo";        ->  let texto = "algo"  -> error en tpo de ejecucion
//

// programacion funcional
// usa funciones puras
// 
// si se modifica una variable del sistema, se llama mutacion
//

// map, filter, recude