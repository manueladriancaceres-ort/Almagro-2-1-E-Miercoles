<template>
  <div>
      <h2>Login</h2>      
      <form @submit.prevent="login">
        Email <input type="text" v-model="usuario.email">
        Passwors <input type="text" v-model="usuario.password">
        <button type="submit" >Login</button>
        {{ mensajeDeError }}
      </form>
  </div>
</template>

<script>
import {usuarioStore} from '../store/usuarioStore.js'
import {storeToRefs} from 'pinia'

export default {
  setup() {
    const store = usuarioStore();
    const {estaLogeado}  = storeToRefs(store);
    const {registerUser} = store;
    return {
      store, registerUser, estaLogeado
    }
  },
  data() {
    return {
      usuario : {email: "", password: ""},
      mensajeDeError : ''
    }
  },
  methods: {
    async login() {
      try {
        await this.registerUser({...this.usuario})
        if (this.estaLogeado) {
          this.$router.push('/vendedor')
        } else {
          this.mensajeDeError = "Usuario o password inconrrecto"  
        }
      } catch(e) {
        this.mensajeDeError = "Se produjo un error"
      }

    }
  }
}
</script>

<style>

</style>