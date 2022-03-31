const proceso = {
    codigo: 1,
    descripcion: "proceso",
    facturas: [
        {codigo:1, cliente: 'Juan', importe: 1000 }
        {codigo:2, cliente: 'Pedro', importe: 2000 }
        {codigo:3, cliente: 'Juan', importe: 3000 }
        {codigo:4, cliente: 'Juan', importe: 1000 }
    ],
    recibos: [
        {numero:1, numeroFactura: 1, pagado: 1000}
        {numero:2, numeroFactura: 4, pagado: 1000}
    ],
    facturasOrdenasPorImporte() {
        
    },
    facturasPorCliente(cliente) {
        const rta = [];
        return rta;
    },
    sumaImportesRecibos() {

    },
    listaDeNombresDeClientes() {

    },
    // desafio
    listaFaturasImpagas() {

    }


}