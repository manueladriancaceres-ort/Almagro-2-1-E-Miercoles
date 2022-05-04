import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  
    state: () => {
        return { 
            listaCompras: [] 
        }
    },
  
    actions: {
        agregarCompra(obj) {
            this.listaCompras.push(obj);
        },
    },

})