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
        {numero: 4, descReclamo: "Inundacion", estadoResolucion: true, numeroPoliza: 6},
    ],
    reclamosConcluidos: [],

    // Agregar todas las polizas con reclamo y estado Resolucion en false
    // Tiempo estimado: 10 minutos
    polizasConReclamo() {
        const rta = [];
        let poliza;
        for(let i = 0; i < this.reclamos.length; i++){
            if(!this.reclamos[i].estadoResolucion){
                poliza = this.damePoliza(this.reclamos[i].numeroPoliza);
                if(poliza != null){
                    rta.push(poliza);
                }
            }
        }
        return rta;
    },

    damePoliza(nroPoliza){
        let polizaBuscada = null;    
        let i = 0;
        let cantElementos = this.polizas.length;
        while(i < cantElementos && polizaBuscada == null){
            if(this.polizas[i].numero === nroPoliza){
                polizaBuscada = this.polizas[i];
            }else{
                i++;
            }
        }
        return polizaBuscada;
    },

    // Pasar reclamos con estadoResolucion true a reclamosConcluidos
    // Tiempo estimado 10 minutos 
    pasarEstadoResolucionAterminado() {
        let i = 0;
        let reclamoResuelto;
        while(i < this.reclamos.length){
            if(this.reclamos[i].estadoResolucion){
                reclamoResuelto = this.retirarReclamoResuelto(i);
                this.reclamosConcluidos.push(reclamoResuelto[0]);
                /* Otra alternativa 
                this.reclamosConcluidos.push(reclamoResuelto.pop());
                */
            }else{
                i++;
            }
        }
    },

    retirarReclamoResuelto(reclamo){
        return this.reclamos.splice(reclamo,1);
    }

};

console.log(proceso);

console.log(proceso.polizasConReclamo());

proceso.pasarEstadoResolucionAterminado();

console.log(proceso.reclamosConcluidos);