import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  
    state: () => {
        return { 
            listaCompras: [] 
        }
    },
  
    actions: {
        agregarCompra() {
            this.listaCompras.push({id:1,desc:"algo"});
        },
    },

})