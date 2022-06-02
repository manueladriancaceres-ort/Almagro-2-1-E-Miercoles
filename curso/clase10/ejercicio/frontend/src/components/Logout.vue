<template>
  <div>
      <h2>Log out</h2>
      <button @click="logout">Salir del sistema</button>
  </div>
</template>

<script>
import {usuarioStore} from '../store/usuarioStore.js'

export default {
  setup() {
    const store = usuarioStore();
    const {userLogout} = store;
    return {
      store, userLogout
    }
  },
  methods: {
    logout() {
      this.userLogout();
      this.$router.push('/');
    }
  }
}
</script>

<style>

</style>