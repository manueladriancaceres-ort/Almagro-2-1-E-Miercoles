import { defineStore } from 'pinia'
import axios from 'axios'

export const usuarioStore = defineStore('main', {
  
    state: () => {
        return { 
            usuario : {},
            estaLogeado : false
        }
    },
  
    actions: {
        async registerUser(usuario) {
            console.log(usuario);
            try {
                const data = await axios.post('http://localhost:3001/api/login',usuario);
                this.estaLogeado = true;
                localStorage.setItem('usuario',JSON.stringify(data));
            } catch (error) {
                console.log(error);
            }
        },
        userLogout() {
            this.estaLogeado = false;
            // localStorage.setItem('usuario',''); // no funciona
            location.reload();
            localStorage.removeItem('usuario');
        }
    },

})