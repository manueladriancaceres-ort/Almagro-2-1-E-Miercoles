<template>
    <div>
        <Cabecera/>
        <ul>
            <li v-for="poliza in polizas" :key="poliza.numero">
                {{ poliza.numero }} {{ poliza.patente}} {{ poliza.cliente}} {{ poliza.importe}}
            </li>
        </ul>
        <AgregarPoliza @agregar='agregar($event)'/>
        <PolizasUtiles @ordenarPorNumero='ordenarPadre($event)' />
        <Pie autor="Empresa dev-z"/>
    </div>
</template>

<script>
import Cabecera from './Cabecera.vue'
import Pie from './Pie.vue'
import AgregarPoliza from './AgregarPoliza.vue'
import PolizasUtiles from './PolizasUtiles.vue'
export default {
    components: {
        Cabecera, Pie, AgregarPoliza, PolizasUtiles
    },
    data() {
        return {
            polizas: [],
        }
    },
    methods: {
        agregar(poliza) {
            this.polizas.push({...poliza});
        },
        ordenarPadre() {
            console.log('ordenar en el padre');
            this.polizas.sort((a,b) => a.numero-b.numero );
        },
        ordenarPolizasPorCliente() {
            this.polizas.sort((a,b) => a.cliente.localeCompare(b.cliente.localeCompare) );
        },
        calcularTotalPolizas() {
            this.totalPolizas = this.polizas.reduce(  (suma,poliza) => {return suma += poliza.importe} ,0);
        }
    }
}
</script>

<style>

</style>