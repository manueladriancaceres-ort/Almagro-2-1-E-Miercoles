const proceso = {
    codigo: 1,
    descripcion: "proceso",
    facturas: [
        {codigo:1, cliente: 'Juan', importe: 1000 },
        {codigo:2, cliente: 'Pedro', importe: 2000 },
        {codigo:3, cliente: 'Juan', importe: 3000 },    
        {codigo:4, cliente: 'Juan', importe: 1000 }
    ],
    recibos: [
        {numero:1, numeroFactura: 1, pagado: 1000},
        {numero:2, numeroFactura: 4, pagado: 1000}
    ],
    facturasOrdenasPorImporte(lista) {
        let listaAuxiliar = [...lista];
        listaAuxiliar.sort((a,b) => a.importe - b.importe);
        return listaAuxiliar;
    },
    facturasPorCliente(cliente) {
        const rta = [];
        rta.push(this.facturas.filter(elemento => elemento.cliente === cliente));
        return rta;
    },
    sumaImportesRecibos(lista) {
        return lista.reduce((sum,numero) => ( sum + numero.pagado), 0 );
    },
    listaDeNombresDeClientes(lista) {
        return lista.map(cl => `NOMBRE:${cl.cliente}`);
    },
    // desafio
    listaFacturasImpagas() {
        const facturasImpagas = [];
        let reciboActual;
        this.facturas.forEach(facturaActual => {
            reciboActual = this.buscarRecibo(facturaActual);
            if(Object.keys(reciboActual).length===0){
                facturasImpagas.push(facturaActual);
            }
        })
        return facturasImpagas.map((factura)=> `ESTADO:IMPAGA - CODIGO:${factura.codigo} - CLIENTE:${factura.cliente} - IMPORTE:${factura.importe}`)
    },

    buscarRecibo(factura){
        return this.recibos.filter((elemento) => elemento.numeroFactura === factura.codigo);
    }


}



console.log(proceso.facturasOrdenasPorImporte(proceso.facturas));

console.log(proceso.facturasPorCliente(proceso.facturas[1].cliente));

console.log(proceso.sumaImportesRecibos(proceso.recibos));

console.log(proceso.listaDeNombresDeClientes(proceso.facturas));

console.log(proceso.listaFacturasImpagas());

