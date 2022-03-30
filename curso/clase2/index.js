console.log("Clase 2");

const persona = {
    codigo: 1,
    nombre: "Carlos",
    apellido: "Gomez",
    nombreApellido: () => { return ` Nombre ${persona.nombre} Apellid ${persona.apellido} ` },
    telefonos: [{codigo:1,desc:"casa",numero:123423},{codigo:2,desc:"celular",numero:142},{algo:1}]
}

console.log(persona);
persona.nombre = "Juan";
const otraPersona = persona;
otraPersona.nombre = "Pedro";
console.log(otraPersona);
console.log(persona);

persona.direccion = "San martin 1300";

console.log(persona);

//Object.freeze(persona);

persona.codigoPostal = "1234";

console.log(persona.nombreApellido());

// break hasta 21:25