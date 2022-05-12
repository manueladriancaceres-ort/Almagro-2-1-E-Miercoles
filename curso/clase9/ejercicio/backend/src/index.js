// sistema estilo prototipo
import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(bodyparser.json())
app.use(cors())
const port = 3001

// simulo una base de datos en memoria
const lista = [{codigo:100,tipoVenta:'TARJETA',descripcion:'el cliente puede pagar con tarjeta'},
{codigo:101,tipoVenta:'CHEQUE',descripcion:'el cliente puede pagar con cheque'}];

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/getlista', (req, res) => {
    res.json(lista);
})

app.post('/api/setgetionventa', (req, res) => {
  console.log(req.body);
  lista.push(req.body);
  res.json(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
