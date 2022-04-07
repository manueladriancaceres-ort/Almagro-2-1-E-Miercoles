const obj = Vue.createApp({
    data() {
      return {
        mensaje: 'Hola Vue!',
        numero: 0,
        color: {color:'green'},
        ok: true,
        ver: false
      }
    }, 
    methods: {
      incrementar() {
        this.numero ++;
      },
      cambioColor() {
        this.color = {color:'red'};
      },
      ocultarTexto() {
        if(this.ver==true) {
          this.ver=false
        } else {
          this.ver=true
        }
      }
    }
}).mount('#app')


