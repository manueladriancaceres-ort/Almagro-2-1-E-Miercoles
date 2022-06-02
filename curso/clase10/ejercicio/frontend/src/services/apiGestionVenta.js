import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    // break hasta 21:35
    getGestionVentas() {
        return apiClient.get('/api/getlista')
    },
    setGetionVentas(gestionVenta) {
        return apiClient.post('/api/setgetionventa', gestionVenta)
    },
    deleteGestionVentas(id) {
        return apiClient.delete('/api/deletegetionventa/' + id)
    }

}

