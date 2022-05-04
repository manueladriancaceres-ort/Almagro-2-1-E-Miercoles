<template>
  <div>
    <h2>Carrito de compras</h2>
    {{ listaCompras }}
    <button @click="agregar">Agregar Compra</button>
  </div>
</template>

<script>
import { useStore } from "../store/storeCarrito.js";
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const store = useStore();
    const { listaCompras } = storeToRefs(store)
    return {
      store, listaCompras
    };
  },
  methods: {
    agregar() {
      this.store.agregarCompra();
    }
  }
};
</script>

<style>
</style>