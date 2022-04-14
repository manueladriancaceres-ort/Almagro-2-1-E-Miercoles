<template>
  <div>
    <div>
      <button @click="ordenar">Ordenar por numero</button>
      <!--
      <button @click="ordenarPolizasPorCliente">Ordenar por cliente</button>
      <p>
        <button @click="calcularTotalPolizas">Calcular total polizas</button>
        Total polizas {{ totalPolizas }}
      </p>
      -->
    </div>
  </div>
</template>

<script>
export default {
    emits: ['ordenarPorNumero'],
    data() {
        return {
            totalPolizas: 0
        }
    },
    methods: {
        ordenar() {
            this.$emit('ordenarPorNumero');
        },
        ordenarPolizasPorCliente() {
            this.$emit('ordenarPolizasPorCliente');
        },
        calcularTotalPolizas() {
            this.totalPolizas = this.polizas.reduce(  (suma,poliza) => {return suma += poliza.importe} ,0);
        }

    }
};
</script>

<style>
</style>