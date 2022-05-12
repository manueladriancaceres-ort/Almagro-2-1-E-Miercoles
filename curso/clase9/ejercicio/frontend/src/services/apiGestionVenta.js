import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getGestionVentas() {
        return apiClient.get('/api/getlista')
    },
    setGetionVentas(gestionVenta) {
        return apiClient.post('/api/setgetionventa', gestionVenta)
    },
    deleteGestionVentas(id) {
        return apiClient.delete('/api/setgetionventa/' + id)
    }

}

