
const ADRIAN_MI_VARIABLE = 45;

console.log(ADRIAN_MI_VARIABLE);

const adrianMiLista = [3,4,5,-5,-3,40,32];

console.log(adrianMiLista);

// adrianMiLista[1] = "algun cambio";

console.log(adrianMiLista);

//
// no funciona
// adrianMiLista = 34;
//

console.log("texto \n otro texto");

// Consigna:
// de esta lista adrianMiLista
// contar positivos
// contar negativos
// sumar positivos
// sumar negativos

//macarena
const macaList = [3,4,5,-5,-3,40,32];
let negatives = 0;
let positives = 0;

  for(var i = 0; i < macaList.length; i++) {
    if(macaList[i] < 0) {
      negatives = negatives+macaList[i];
    }else{
      positives += macaList[i];
        }
    }
    
  console.log(negatives);
  console.log(positives);

// Codigo Boris
let cantPos = 0;
let cantNeg = 0;
let sumPos = 0;
let sumaNeg = 0;
let cont = 0;

while(cont < adrianMiLista.length){
    if(adrianMiLista[cont] > 0){
        cantPos++;
        sumPos+=adrianMiLista[cont];
    }else{
        cantNeg++;
        sumaNeg-=adrianMiLista[cont];
    }
}
    console.log("Los Negativos son: " + cantNeg);
    console.log("Los Positivos son: " + cantPos);
    console.log("La suma de los negativos es: " + sumaNeg);
    console.log("La suma de los positivos es: " + sumPos);

//  Fin Codigo Boris

    
//  
let contadorPost
let contadorNe
let sumPost
let sumNeg

for( var i = 0; i <adrianMiLista.length; i++) {
    if (adrianMiLista[i] > 0) {
        contadorPost++;
        sumPost += adrianMiLista[i];
    } else if (adrianMiLista[i] < 0) {
        contadorNe++;
        sumNeg += adrianMiLista[i];
    }

}
console.log(contadorPost, C)

// Fernando 
const lista = [3,4,5,-5,-3,40,32];

let cantPositivos; 
let cantNegativos;
let totalPos; 
let totalNeg; 

for (i = 0; i< lista.length; i++){
    if(lista[i]>0){
        cantPositivos++;
        totalPos += lista[i];
    }else{
        cantNegativos++;
        totalNeg += lista[i];
    }
}


array.forEach(element => {
    
});






