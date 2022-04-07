const obj = Vue.createApp({
  data() {
    return {
        codigoFactura: "11111",
        nroCliente: 1,
        items: [
            {codigo:1,descripcion:'SeveUp'},
            {codigo:2,descripcion:'Fanta'},
            {codigo:3,descripcion:'CocaCola'},
        ],
        estilo: {
            color:'black',
        },
        listaCargada: false,
        itemsBackup: [],
        item: { codigo:0,descripcion:''}
    }
  }, 
  methods: {
    cambioColor() {
        this.estilo = {
            color:'blue',
            fontFamily: 'verdana',
            textShadow: "1px 1px red"
        }
      },
      ordenar() {
          if(!this.listaCargada) {
              this.listaCargada = true;
              this.itemsBackup = [...this.items];
          }
          this.items.sort((a,b) => {
            if (a.descripcion > b.descripcion) {
              return 1;
            }
            if (a.descripcion < b.descripcion) {
              return -1;
            }
            return 0;
          });
        
      },
      agregarItem() {
          this.items.push({...this.item});
      },
      imprimirFactura(){
          console.log(JSON.stringify(this));
      }
  }
}).mount('#app')


