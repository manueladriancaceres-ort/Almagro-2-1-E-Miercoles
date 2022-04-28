import {createRouter,createWebHashHistory} from 'vue-router'
import Vendedor from '../components/Vendedor.vue'
import Home from '../components/Home.vue'
import GestionVenta from '../components/GestionVenta.vue'
import Usuario from '../components/Usuario.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/vendedor', component: Vendedor },
    { path: '/gestionventa', component: GestionVenta },
    { path: '/usuario/:id', component: Usuario },
    { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

export default router