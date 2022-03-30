console.log("Ejercicio");
const proceso = {
    numero: 12,
    descripcion: "Proceso de gestion de polizas de seguros de autos",
    polizas: [
        {numero: 1, dni: 31242, precio: 5000, patente: "AA123FF"},
        {numero: 2, dni: 234523, precio: 3000, patente: "AB123FF"},
        {numero: 3, dni: 3546, precio: 4000, patente: "AC123FF"},
        {numero: 4, dni: 363546, precio: 5000, patente: "AA423FF"},
        {numero: 5, dni: 31242, precio: 5000, patente: "AB223FF"},
        {numero: 6, dni: 31242, precio: 5000, patente: "AC123FF"},
    ],
    reclamos: [
        {numero: 1, descReclamo: "Choque", estadoResolucion: false, numeroPoliza: 5},
        {numero: 2, descReclamo: "Granizo", estadoResolucion: false, numeroPoliza: 4},
        {numero: 3, descReclamo: "Robo", estadoResolucion: true, numeroPoliza: 1},
    ],
    reclamosConcluidos: [],
    // Todas las polizas con reclamo y estado Resolucion en false
    // Tiempo estimado: 10 minutos
    polizasConReclamo() {
        const rta = []
        
        return rta;
    },
    // Pasar reclamos con estadoResolucion true a reclamosConcluidos
    // Tiempo estimado 10 minutos 
    pasarEstadoResolucionAterminado() {
    }
}
console.log(proceso);