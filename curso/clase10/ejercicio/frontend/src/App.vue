<template>
  <div>
    <div v-if="!estaLogeado">
      <router-link to="/">Go to Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/carritocompras">Carrito de compras</router-link> |
    </div>
    <div v-if="estaLogeado">
      <router-link to="/vendedor">Vendedor</router-link> |
      <router-link to="/gestionventa">Gestion venta</router-link> |
      <router-link to="/confirmacompra">Confirma compra</router-link> |
      <router-link to="/logout">Logout</router-link> |
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { usuarioStore } from "../src/store/usuarioStore.js";
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const store = usuarioStore();
    const { estaLogeado } = storeToRefs(store)
    return {
      store, estaLogeado
    };
  },
};
</script>


<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
