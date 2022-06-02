<template>
  <div>
    <h2>Carrito de compras</h2>
    {{ listaCompras }}
    <button @click="agregar">Agregar Compra</button>
    <p>
    Codigo<input type="text" v-model="producto.codigo">
    Descripcion <input type="text" v-model="producto.desc">
    </p>
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
  data() {
    return {
      producto: {codigo:0,desc:''}
    }
  },
  methods: {
    agregar() {
      this.store.agregarCompra({...this.producto});
    }
  }
};
</script>

<style>
</style>