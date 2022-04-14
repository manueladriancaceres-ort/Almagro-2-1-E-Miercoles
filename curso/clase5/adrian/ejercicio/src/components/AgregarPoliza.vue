<template>
  <div>
    Numero patente <input type="text" v-model="poliza.numero" /> Patente
    <input type="text" v-model="poliza.patente" /> Cliente
    <input type="text" v-model="poliza.cliente" /> Importe
    <input type="text" v-model="poliza.importe" />
    <button @click="agregar">Agregar poliza a la lista</button>
  </div>
</template>

<script>
export default {
  emits: ['agregar'],  
  data() {
    return {
      poliza: { numero: 0, patente: "", cliente: "", importe: 0 },
    };
  },
  methods: {
      agregar() {
          this.$emit('agregar',this.poliza);
      }
  }
};
</script>

<style>
</style>