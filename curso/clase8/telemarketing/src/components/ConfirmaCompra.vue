<template>
    <div>
        <h2>Lista para confirmar compra</h2>
        {{listaCompras}}
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

}
</script>

<style>

</style>