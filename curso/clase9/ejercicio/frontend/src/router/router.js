import {createRouter,createWebHashHistory} from 'vue-router'
import Vendedor from '../components/Vendedor.vue'
import Home from '../components/Home.vue'
import GestionVenta from '../components/GestionVenta.vue'
import Usuario from '../components/Usuario.vue'
import NotFound from '../components/NotFound.vue'
import CarritoCompras from '../components/CarritoCompras.vue'
import ConfirmaCompra from '../components/ConfirmaCompra.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/vendedor', component: Vendedor },
    { path: '/gestionventa', component: GestionVenta },
    { path: '/usuario/:id', component: Usuario },
    { path: '/carritocompras', component: CarritoCompras },
    { path: '/confirmacompra', component: ConfirmaCompra },
    { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

export default router