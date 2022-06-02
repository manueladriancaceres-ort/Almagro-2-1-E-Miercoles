import {createRouter,createWebHashHistory} from 'vue-router'
import Vendedor from '../components/Vendedor.vue'
import Home from '../components/Home.vue'
import GestionVenta from '../components/GestionVenta.vue'
import Usuario from '../components/Usuario.vue'
import NotFound from '../components/NotFound.vue'
import CarritoCompras from '../components/CarritoCompras.vue'
import ConfirmaCompra from '../components/ConfirmaCompra.vue'
import Login from '../components/Login.vue'
import Logout from '../components/Logout.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/carritocompras', component: CarritoCompras },
    { path: '/login', component: Login },
    { path: '/:pathMatch(.*)*', component: NotFound },

    { path: '/vendedor', component: Vendedor , meta: {requiresAuth:true}},
    { path: '/gestionventa', component: GestionVenta  , meta: {requiresAuth:true}},
    { path: '/usuario/:id', component: Usuario  , meta: {requiresAuth:true}},
    { path: '/confirmacompra', component: ConfirmaCompra  , meta: {requiresAuth:true}},
    { path: '/logout', component: Logout  , meta: {requiresAuth:true}},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

router.beforeEach(  (to, from, next) => {

    const login = localStorage.getItem('usuario')
    const obj = JSON.parse(login)
    //console.log( obj );

    if( to.matched.some(record => record.meta.requiresAuth ) && !login ) {
        next('/')
    } else {
        next()
    }

})



export default router