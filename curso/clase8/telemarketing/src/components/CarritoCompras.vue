<template>
  <div>
    <h2>Carrito de compras</h2>
    {{ listaCompras }}
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
      // you can return the whole store instance to use it in the template
      store, listaCompras
    };
  },
};
</script>

<style>
</style>