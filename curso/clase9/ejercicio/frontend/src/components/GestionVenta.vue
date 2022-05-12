<template>
  <div>
      <h2>Gestion Venta</h2>
      <li v-for="gestionVenta in lista" :key="gestionVenta.codigo"> 
        {{ gestionVenta.codigo }} {{ gestionVenta.tipoVenta}}
        {{ gestionVenta.descripcion }}
        <button @click="borrarGestion(gestionVenta.codigo)">Anular gestion</button>
      </li>
      <p>
        Codigo <input type="text" v-model="gestionVenta.codigo">
        Tipo Venta <input type="text" v-model="gestionVenta.tipoVenta">
        Descripcion <input type="text" v-model="gestionVenta.descripcion">
        <button @click="agregarGestion">Agregar gestion</button>
      </p>
      {{ mensajeError }}
  </div>
</template>

<script>
import apiGestionVenta from '../services/apiGestionVenta.js'
export default {
  data() {
    return {
      lista: [],
      gestionVenta : {codigo:0,tipoVenta:'',descripcion:''},
      mensajeError : ''
    }
  },
  created: async function () {
      try {        
        const rta = await apiGestionVenta.getGestionVentas();
        this.lista = rta.data;
      } catch( error ) {
        console.log(error);
        this.mensajeError = 'Se produjo un error en la conexion'
      }
  },
  methods: {
    async agregarGestion() {
      try {        
        const obj = {...this.gestionVenta}
        const rta = await apiGestionVenta.setGetionVentas(obj);
        console.log(rta);
        this.lista.push(obj);
      } catch( error ) {
        console.log(error);
        this.mensajeError = 'Se produjo un error en la conexion'
      }
    },
    async borrarGestion(codigo) {
      try {        
        const rta = await apiGestionVenta.deleteGestionVentas(codigo);
        console.log(rta);
        console.log(codigo);
        const listaCodigos = this.lista.map(e => {return e.codigo} )
        console.log(listaCodigos);
        const indice = listaCodigos.indexOf(codigo);
        console.log(indice);
        this.lista.splice(indice,1);
      } catch( error ) {
        console.log(error);
        this.mensajeError = 'Se produjo un error en la conexion'
      }
      
    }
  }
}
</script>

<style>

</style>


