const obj = Vue.createApp({
    data() {
      return {
          polizas: [
              {codigo:100,patente:'AA123AA'},
              {codigo:130,patente:'AA123CC'},
              {codigo:110,patente:'AA123ED'},
          ],
          listaCargada: false,
          polizasBackup: [],
          poliza: { codigo:0,patente:''}
      }
    }, 
    methods: {
        ordenar() {
            if(!this.listaCargada) {
                this.listaCargada = true;
                this.polizasBackup = [...this.polizas];
            }
            this.polizas.sort((a,b) => a.codigo-b.codigo);
        },
        agregarPoliza() {
            this.polizas.push({...this.poliza});
        }
    }
}).mount('#app')


