const unaLista = [4,5,2,1,12] ;

const nuevaLista = unaLista;

unaLista[0] = 1000;

console.log(unaLista);
console.log(nuevaLista);

// para evitar se puede usar ...
// copia de lista
const otraLista = [...unaLista];
otraLista[0] = 500;

console.log(unaLista);
console.log(otraLista);

// otro uso
function operacion(...args) {
    const var1 = args[0];
    const var2 = args[1];
    const var3 = args[2];
    const var4 = args[3];
    console.log(var1);
    console.log(var2);
    console.log(var3);
    console.log(var4);
}

operacion(12,[1,2,3],{codigo:1,descripcion:'algo'},undefined);



// public static void main(String[] args)